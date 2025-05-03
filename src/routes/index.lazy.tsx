import {createLazyFileRoute} from "@tanstack/react-router";
import {lazy, Suspense} from "react";
import Home from "@/component/home/Home";
const HomeSidebar = lazy(() => import("@/component/sidebar/HomeSidebar"));
import Header from "@/component/header/HeaderHome";

import {useHook} from "@/hooks/useHook";

export const Route = createLazyFileRoute("/")({
    component: RouteComponent
});

function RouteComponent() {
    const {createPost, sidebar} = useHook();
    return (
        <section>
            <head>
                <title> mysocial | beranda </title>
            </head>

            {/* Sidebar  */}
            <Header />

            {createPost ? "" : null}

            {/* Sidebar  */}
            <Suspense fallback={<>memuat...</>}>
                {sidebar && <HomeSidebar />}
            </Suspense>

            {/* home component */}
            <Home />
        </section>
    );
}
