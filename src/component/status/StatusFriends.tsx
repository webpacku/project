import Items from "./Item";
import {apis} from "@/api/axios";
import {useQuery} from "@tanstack/react-query";

type StatusType = {
    id: number;
    user_id: number;
    content: string;
    image_url: string | null;
    created_at: string;
    username: string;
    profile_picture: string | number;
    likes: number;
    likes_me: 0 | 1 | number | boolean; // atau boolean, tergantung dari API
};

const StatusFriends = () => {
    const {data: feeds, isPending} = useQuery<StatusType[]>({
        queryKey: ["status"],
        queryFn: async () => {
            const {data} = await apis.get("/status");
            return data.data;
        }
    });

    if (isPending) return <p>memuat status</p>;

    return feeds?.map(ItemsData => (
        <Items type="home" data={ItemsData} key={ItemsData.id} />
    ));
};

export default StatusFriends;
