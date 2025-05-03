import {createLazyFileRoute} from "@tanstack/react-router";

import Search from "@/component/search/Search";

export const Route = createLazyFileRoute("/search/")({
    component: RouteComponent
});

function RouteComponent() {
    return <Search />;
}
