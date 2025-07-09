import { BrowserRouter } from "react-router";
import { AppRouter } from "./routes/AppRouter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AppRouter />
                <ReactQueryDevtools initialIsOpen={false} />
            </BrowserRouter>
        </QueryClientProvider>
    );
};
