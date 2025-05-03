import {useHook} from "@/hooks/useHook";
import Logo from "./Logo";

import {
    SquaresPlusIcon,
    PencilSquareIcon,
    BellIcon,
    PaperAirplaneIcon
} from "@heroicons/react/24/outline";

const HeaderHome = () => {
    const {setSidebar, setCreatePost} = useHook();

    return (
        <header className="sticky top-0 bg-white px-4 py-2.5 shadow-md z-50">
            <nav className="flex text-gray-600 items-center gap-2.5 justify-between">
                <button onClick={setSidebar}>
                    <SquaresPlusIcon className="size-7 " />
                </button>
                <Logo />

                <ul className="w-full flex gap-4 justify-end">
                    <li onClick={setCreatePost}>
                        <PencilSquareIcon className="size-7" />
                    </li>
                    <li>
                        <BellIcon className="size-7" />
                    </li>
                    <li>
                        <PaperAirplaneIcon className="size-7" />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderHome;
