import {createLazyFileRoute} from "@tanstack/react-router";
import {lazy, Suspense} from "react";
const FormLogin = lazy(() => import("@/component/auth/LoginForm"));
const FormRegister = lazy(() => import("@/component/auth/RegisterForm"));

type PageType = "login" | "register";
// Type for search params
type SearchParams = {
    page?: PageType;
};

function validateSearch(search: Record<string, any>): SearchParams {
    const {page} = search;
    if (page !== undefined && page !== "login" && page !== "register") {
        throw new Error("Invalid search parameters");
    }
    return {page};
}

export const Route = createLazyFileRoute("/auth/")({
    component: RouteComponent
});

function RouteComponent() {
    // Fetch search params
    const search = Route.useSearch();
    const navigate = Route.useNavigate();

    // Validate search params using Zod
    const {page} = validateSearch(search);

    // Use ParamsReducer format for the navigation
    const handleNavigation = (target: "login" | "register") => {
        navigate({
            to: "/auth",
            search: prevSearch => ({
                ...prevSearch,
                page: target
            })
        });
    };

    if (page === "login") {
        return (
            <Suspense fallback={<div>Loading login...</div>}>
                <FormLogin />
            </Suspense>
        );
    }

    if (page === "register") {
        return (
            <Suspense fallback={<div>Loading register...</div>}>
                <FormRegister />
            </Suspense>
        );
    }

    const appName = import.meta.env.VITE_APP_NAME ?? "MySocial";

    return (
        <main className="min-h-screen p-6 bg-white flex justify-center items-center">
            <div className="w-80">
                <div className="py-4">
                    <h1 className="text-2xl text-center font-bold text-blue-500">
                        Welcome to {appName}
                    </h1>
                    <p className="mt-2 text-center leading-relaxed text-sm text-gray-500">
                        MySocial is a social media community platform where you
                        can find friends, post content, and more.
                    </p>
                </div>

                <img
                    src="/images/social.jpg"
                    alt="Social Illustration"
                    className="mt-7 mx-auto w-[70%] h-auto object-cover rounded-full"
                />

                <div className="mt-7">
                    <button
                        onClick={() => handleNavigation("login")}
                        className="w-full bg-blue-500 font-bold text-center text-white p-3 rounded-md"
                    >
                        Get Started
                    </button>

                    <p className="mt-2 text-gray-500 text-sm">
                        If you don't have an account,
                        <button
                            type="button"
                            onClick={() => handleNavigation("register")}
                            className="ml-1 text-blue-500 underline"
                        >
                            create an account
                        </button>
                    </p>
                </div>
            </div>
        </main>
    );
}
