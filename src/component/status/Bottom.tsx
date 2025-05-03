import {lazy, memo, Suspense} from "react";
//import {useLikes} from "@/mutation/useLikes";

const CounterLabel = lazy(() => import("@/component/common/CounterLabel"));

import {
    HeartIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    ArrowPathRoundedSquareIcon
} from "@heroicons/react/24/outline";

import {HeartIcon as SolidHeartIcon} from "@heroicons/react/24/solid";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {apis} from "@/api/axios";

type StatusType = {
    id: number;
    user_id: number;
    content: string;
    image_url: string | null;
    created_at: string;
    username: string;
    likes: number;
    likes_me: 0 | 1 | number | boolean; // atau boolean, tergantung dari API
};
interface FeedbottomType {
    type: "home" | "read";
    data: StatusType;
}

const FeedBottom: React.FC<FeedbottomType> = memo(({type, data}) => {
    const queryClient = useQueryClient();
    const Mutations = useMutation({
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

            const previous = queryClient.getQueryData<StatusType>(["status"]);

            queryClient.setQueryData<StatusType[]>(["status"], old => {
                if (!old) return [];
                return old.map((item: StatusType) =>
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
        onError: (_err, _vars, context) => {
            if (context?.previous) {
                queryClient.setQueryData<StatusType>(
                    ["status"],
                    context.previous
                );
            }
        },
        // Setelah mutasi selesai, mengupdate data di server dan client
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ["status"]});
        }
    });
    const HandleLikes = () => {
     // if(Mutations.isPending) return;
        Mutations.mutate({
            postId: data.id,
            like: data.likes_me == 0 // Toggle Like
        });
    };
    return (
        <div>
            <p className="mt-4 text-gray-600 flex text-sm gap-1.5 items-center">
                <Suspense>
                    <CounterLabel count={data.likes} title="suka" /> •
                    <CounterLabel count={data.likes} title="komentar" />
                    •
                    <CounterLabel count={data.likes} title="tayangan" />
                </Suspense>
            </p>

            <div className="flex text-gray-600 justify-around text-sm items-center *:cursor-pointer gap-4 mt-2.5">
                <span
                    onClick={HandleLikes}
                    className="flex gap-1.5 items-center"
                >
                    {data.likes_me ? (
                        <SolidHeartIcon className="size-7 text-red-500" />
                    ) : (
                        <HeartIcon className="size-7" />
                    )}
                    {data.likes}
                </span>

                <span className="flex gap-1.5 items-center">
                    <ChatBubbleOvalLeftEllipsisIcon className="size-7" />
                    {data.likes}
                </span>

                <span className="flex gap-1.5 items-center">
                    <ArrowPathRoundedSquareIcon className="size-7" />
                </span>
                {type && ""}
                <button>•••</button>
            </div>
        </div>
    );
});

export default FeedBottom;
