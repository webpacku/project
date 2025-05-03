import {useMutation, useQueryClient} from "@tanstack/react-query";
import {apis} from "@/api/axios";
import {toast} from "sonner";
interface FeedType {
    id: number;
    user_id: number;
    content: string;
    image_url: string | null;
    created_at: string;
    username: string;
    likes: number;
    likes_me: 0 | 1; // 0 = belum like, 1 = sudah like
}
export const useLikes = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({postId, like}: {postId: number; like: boolean}) => {
            if (like) {
                await apis.post("/likes", {postId});
            } else {
                await apis.delete(`/likes/${postId}`);
            }
        },
        // Optimistic Update untuk memperbarui UI sebelum mutasi selesai
        onMutate: async ({postId, like}) => {
            await queryClient.cancelQueries({queryKey: ["status"]});

            const previous = queryClient.getQueryData<FeedType[]>(["status"]);

            queryClient.setQueryData<FeedType[]>(["status"], old => {
                if (!old) return [];
                return old.map(item =>
                    item.id === postId
                        ? {
                              ...item,
                              likes_me: like ? 1 : 0,
                              likes: item.likes + (like ? 1 : -1)
                          }
                        : item
                );
            });

            return {previous};
        },

        // Menghandle error dan rollback data jika terjadi kesalahan
        onError: (_err, _vars, context) => {
            if (context?.previous) {
                queryClient.setQueryData<FeedType[]>(
                    ["status"],
                    context.previous
                );
            }
            toast.error("An error occurred while updating likes.");
        },
        // Setelah mutasi selesai, mengupdate data di server dan client
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ["status"]});
        }
    });
};
