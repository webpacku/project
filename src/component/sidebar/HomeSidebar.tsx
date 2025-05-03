import {memo} from "react";
import {Link} from "@tanstack/react-router";
import {useHook} from "@/hooks/useHook";
import {AssideArray} from "./AssideSidebar";

const HomeSidebar = memo(() => {
    const {setSidebar} = useHook();

    return (
        <aside
            onClick={setSidebar}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
        >
            <div className="bg-white w-72 p-4 min-h-screen max-h-screen overflow-y-scroll pb-20">
                <ul className="w-full mp-2.5 text-sm text-gray-600">
                    {AssideArray.map((item: any, index: number) => (
                        <li className="mb-2.5" key={index}>
                            <Link
                                to={item?.to}
                                activeProps={{
                                    className:
                                        "bg-gray-200 rounded-md font-medium"
                                }}
                                className="flex gap-2 items-center p-2.5"
                            >
                                {item.icons}
                                {item.title}

                                <small className="ml-auto text-red-600 px-1.5 rounded-full">
                                    {item.label}
                                </small>
                            </Link>
                        </li>
                    )).slice(0, 4)}

                    <li className="font-medium uppercase mt-4">Server</li>
                    {AssideArray.map((item: any, index: number) => (
                        <li className="mb-2.5" key={index}>
                            <Link
                                to={item?.to}
                                activeProps={{
                                    className:
                                        "bg-gray-200 rounded-md font-medium"
                                }}
                                className="flex gap-2 items-center p-2.5"
                            >
                                {item.icons}
                                {item.title}
                            </Link>
                        </li>
                    )).slice(4, 7)}

                    <li className="font-medium uppercase mt-4">Lainya</li>
                    {AssideArray.map((item: any, index: number) => (
                        <li className="mb-2.5" key={index}>
                            <Link
                                to={item?.to}
                                activeProps={{
                                    className:
                                        "bg-gray-200 rounded-md font-medium"
                                }}
                                className="flex gap-2 items-center p-2.5"
                            >
                                {item.icons}
                                {item.title}
                            </Link>
                        </li>
                    )).slice(5, 10)}
                </ul>
                <div className="mt-4 text-sm text-gray-600 border-t-2">
                    copyright ©2025
                </div>
            </div>
        </aside>
    );
});

export default HomeSidebar;
