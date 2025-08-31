import {createRouter, RouterProvider} from "@tanstack/react-router";
import {routeTree} from "./routeTree.gen";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient();
import {Toaster} from "sonner";
import {useAuth} from "@/hooks/useAuth";

const router = createRouter({
    routeTree,
    context: {
        session: {
            isLogin: true // Atau nilai default yang sesuai
        }
    },
    defaultNotFoundComponent: () => (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-red-500 text-white text-2xl text-center p-4 rounded-lg">
                404
            </div>
        </div>
    )
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

function App() {
    const {session} = useAuth();
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} context={{session}} />
            <Toaster richColors />
        </QueryClientProvider>
    );
}
export default App;
