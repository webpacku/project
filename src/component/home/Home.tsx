import {Suspense, lazy} from "react";
import {useAuth} from "@/hooks/useAuth";
const Status = lazy(() => import("@/component/status/StatusFriends"));
import {CameraIcon, PaperClipIcon} from "@heroicons/react/24/outline";

const AllPosts = () => {
    const {logout} = useAuth();

    return (
        <div className="">
            <button
                className="p-2 bg-red-500 text-white rounded-md"
                onClick={logout}
            >
                {" "}
                keluar{" "}
            </button>

            <form className="bg-white text-gray-500 p-4 my-4">
                <div className="flex items-center gap-3">
                    <img
                        src="/src/images/cewe3.jpg"
                        className="shrink-0 h-14 w-14 object-cover rounded-full"
                    />
                    <div className="flex-1 flex items-center text-sm bg-gray-200 px-4 h-14 rounded-full">
                        apa yang kamu pikirkan?
                    </div>
                </div>
                <ul className="mt-4 flex items-center">
                    <li className="p-2 text-sm">
                        <CameraIcon className="size-5 mr-1" />
                        camera
                    </li>
                    <li className="p-2 text-sm">
                        <PaperClipIcon className="size-5 mr-1" />
                        berkas
                    </li>
                    <li className="ml-auto">
                        <button className="bg-blue-500 text-sm text-white p-2 px-4 rounded-lg">
                            posting
                        </button>
                    </li>
                </ul>
            </form>

            <section>
                <Suspense>
                    <Status />
                </Suspense>
            </section>
        </div>
    );
};

export default AllPosts;
