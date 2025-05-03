import {createLazyFileRoute} from "@tanstack/react-router";
import {NumberFormat} from "@/service/NumberFormat";
import {useState} from "react";
import {
    CalendarDaysIcon,
    NewspaperIcon,
    PhotoIcon,
    UsersIcon,
    PaperAirplaneIcon
} from "@heroicons/react/24/outline";
export const Route = createLazyFileRoute("/profile/$id")({
    component: RouteComponent
});

const images = (image: string) => "/src/images/" + image;
const bio =
    "directory. I have also added the command to install termux-services so we can manage nginx services with sv command.";
function RouteComponent() {
    const [buttonAction, setButtonAction] = useState(true);

    const HandleAcion = () => {
        setButtonAction(prep => !prep);
    };
    const updated = () => {};

    return (
        <div className="min-h-screen mt-16">
            <div className="p-6 bg-white">
                <img
                    src={images("logo.jpg")}
                    className="mx-auto w-24 h-24 object-cover rounded-full"
                    width={30}
                    height={30}
                />

                <h1 className="mt-4 font-semibold"> Ananda kusuma</h1>
                <ul className="flex gap-3">
                    <li className="hover:underline">
                        {NumberFormat(4758)} pengikut
                    </li>
                    <li className="hover:underline">
                        {NumberFormat(4758)} mengikuti
                    </li>
                </ul>
                {5 > 4 ? (
                    <p className="mt-4 text-sm text-gray-700 whitespace-pre-wrap">
                        {bio}
                    </p>
                ) : null}

                <ul className="mt-2 text-gray-500 text-sm">
                    <li>
                        <CalendarDaysIcon className="size-5" /> Bergabung sejak
                        12-02-2025
                    </li>
                </ul>
                <ul className="flex gap-2 justify-around items-center text-gray-500 mt-4">
                    <li>
                        <NewspaperIcon className="size-6" />
                    </li>
                    <li>
                        <PhotoIcon className="size-6" />
                    </li>
                    <li>
                        <UsersIcon className="size-6" />
                    </li>
                    <li>
                        <PaperAirplaneIcon className="size-6" />
                    </li>

                    <li>
                        <button
                            onClick={false ? updated : HandleAcion}
                            className="py-1 px-3 bg-blue-500 text-sm text-white rounded-md"
                        >
                            {false
                                ? "update"
                                : buttonAction
                                ? "berhenti"
                                : "ikuti"}
                        </button>
                    </li>
                </ul>
            </div>

            <div>
                <span> postingan</span>
                <span> teman </span>
                <span> galery </span>
            </div>
        </div>
    );
}
