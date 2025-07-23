import {HeroUIProvider} from "@heroui/system";
import {Outlet, useHref, useNavigate} from "react-router";
import {I18nextProvider} from "react-i18next";
import i18n from "@components/Services/Translations/i18n.js";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ToastProvider} from "@heroui/toast";
import RouteChangeHandler from "@components/Globals/Components/RouteChnageHandler.jsx";
import {useEffect} from "react";

const queryClient = new QueryClient()

const InitialProvider = () => {
    const navigate = useNavigate();

    useEffect(() => {
        i18n.changeLanguage("fa-IR");
    }, []);

    return (<>
        <HeroUIProvider navigate={navigate} useHref={useHref}>
            <ToastProvider/>
            <RouteChangeHandler/>
            <I18nextProvider i18n={i18n}>
                <QueryClientProvider client={queryClient}>
                    <Outlet/>
                </QueryClientProvider>
            </I18nextProvider>
        </HeroUIProvider>
    </>);
}

export default InitialProvider;
