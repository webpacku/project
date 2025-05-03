import {
    Outlet,
    createRootRouteWithContext,
    redirect
} from "@tanstack/react-router";
import {Suspense, lazy} from "react";
import {useAuth} from "@/hooks/useAuth";

// Lazy load FooterNavigation
const FooterNavigation = lazy(
    () => import("@/component/footer/FooterNavigation")
);

interface SafeContext {
    session: {
        isLogin: number | boolean;
    };
}
export const Route = createRootRouteWithContext<SafeContext>()({
    component: RootComponent,
    beforeLoad: ({context, location}) => {
        const NoProtect = ["/auth", "/auth/login", "/auth/register"];
        const isLogin = context.session.isLogin;

        // Redirect logic based on authentication status
        if (!isLogin && !NoProtect.includes(location.pathname)) {
            throw redirect({to: "/auth"});
        }

        if (isLogin && NoProtect.includes(location.pathname)) {
            throw redirect({to: "/"});
        }
    }
});
function RootComponent() {
    const {session} = useAuth();

    return (
        <main className="flex flex-col w-full">
            <div className="min-h-screen">
                <Suspense fallback={<small>Memuat konten...</small>}>
                    <Outlet />
                </Suspense>
            </div>
            {session.isLogin && (
                <Suspense fallback={null}>
                    <FooterNavigation />
                </Suspense>
            )}
        </main>
    );
}
