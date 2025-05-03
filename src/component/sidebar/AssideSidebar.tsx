import {
    RectangleStackIcon,
    RocketLaunchIcon,
    CurrencyDollarIcon,
    Cog6ToothIcon,
    LanguageIcon,
    ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";

interface assideprops {
    title: string;
    icons: React.ReactElement;
    to?: string;
    label?: string;
}

export const AssideArray: assideprops[] = [
    {
        title: "Kolleksi",
        icons: <RectangleStackIcon className="size-6" />,
        to: "/collection"
    },
    {
        title: "premium",
        icons: <RocketLaunchIcon className="size-6" />,
        to: "/upgrade",
        label: "super murah🔥"
    },

    {
        title: "Sawer untuk support",
        icons: <CurrencyDollarIcon className="size-6" />,
        to: "/setting"
    },
    {
        title: "Pengaturan",
        icons: <Cog6ToothIcon className="size-6" />,
        to: "/setting"
    },
    {
        title: "Bahasa",
        icons: <LanguageIcon className="size-6" />
    },
    {
        title: "Keluar",
        icons: <ArrowRightStartOnRectangleIcon className="size-6" />
    }
];
