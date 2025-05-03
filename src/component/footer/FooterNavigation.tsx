import {Link} from "@tanstack/react-router";

import {
    HomeIcon,
    UserGroupIcon,
    MagnifyingGlassIcon,
    NewspaperIcon,
    UserCircleIcon
} from "@heroicons/react/24/outline";

interface buttonType {
    to: string;
    title: string;
    children: React.ReactNode;
}

const ButtonNav: React.FC<buttonType> = ({to, title, children}) => {
    return (
        <li className="flex text-center flex-col">
            <Link
                to={to}
                activeProps={{className: "text-blue-500"}}
                className="items-center text-sm px-2.5 py-2 cursor-pointer"
            >
                {children}
                <span>{title}</span>
            </Link>
        </li>
    );
};

const FooterNavigation = () => {
    return (
        <footer className="bg-white sticky bottom-0 px-3">
            <ul className="flex items-center justify-around text-gray-500">
                <ButtonNav title="awal" to="/">
                    <HomeIcon className="size-7" />
                </ButtonNav>
                <ButtonNav title="cari" to="/search">
                    <MagnifyingGlassIcon className="size-7" />
                </ButtonNav>
                <ButtonNav title="forum" to="/group">
                    <UserGroupIcon className="size-7" />
                </ButtonNav>
                <ButtonNav title="cerita" to="/story">
                    <NewspaperIcon className="size-7" />
                </ButtonNav>
                <ButtonNav title="saya" to="/profile/admin">
                    <UserCircleIcon className="size-7" />
                </ButtonNav>
            </ul>
        </footer>
    );
};

export default FooterNavigation;
