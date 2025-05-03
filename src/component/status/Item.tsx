import {timeago} from "@/service/timeago";
import Bottom from "./Bottom";
import AvatarMd from "@/component/common/AvatarMd";
import {TextParser} from "@/component/common/Link";

import {
    SparklesIcon,
    CheckBadgeIcon as SolidCheckBadgeIcon
} from "@heroicons/react/24/solid";

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
interface ItemProps {
    type: "read" | "home";
    data: StatusType;
}

const Item: React.FC<ItemProps> = ({type, data}) => {
    return (
        <article className="bg-white p-5 shadow-md mb-2 rounded-lg">
            {/* Sponsor Badge */}
            {true && ( // Ganti kondisi sesuai kebutuhan
                <span className="inline-block text-blue-500 text-sm font-medium mb-2">
                    <SparklesIcon className="text-green-500 size-5 mr-2" />
                    Sponsor
                </span>
            )}

            {/* User Info */}
            <div className="flex items-start gap-2">
                <AvatarMd src={data.profile_picture} />
                <div className="flex-1">
                    <span className="font-semibold hover:underline">
                        {data.username}
                    </span>
                    {true && ( // Ganti kondisi sesuai kebutuhan
                        <SolidCheckBadgeIcon className="size-5 text-blue-500 ml-1" />
                    )}
                    <div className="text-sm flex gap-2 text-gray-500">
                        <time dateTime={data.created_at}>
                            {timeago(data.created_at)}
                        </time>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mt-4">
                {data.image_url && (
                    <img
                        className="w-full object-cover max-h-[400px] rounded-md mt-2"
                        src={data.image_url} // Gunakan URL gambar dinamis
                        alt="reaction"
                    />
                )}
                <p className="text-base text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {TextParser(data.content)}
                </p>
            </div>

            {/* Status Bottom */}
            <Bottom type={type} data={data} />
        </article>
    );
};
export default Item;
