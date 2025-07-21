import {HeroUIProvider} from "@heroui/system";
import {Outlet, useHref, useNavigate} from "react-router";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from "@components/Services/Translations/i18n.js";

const Provider = () => {
    const navigate = useNavigate();
    const {i18n: translate} = useTranslation();
    translate.changeLanguage("fa-IR");

    return (<>
        <HeroUIProvider navigate={navigate} useHref={useHref}>
            <I18nextProvider i18n={i18n}>
                <div className={"max-w-[1536px] h-full w-full mx-auto"}>
                    <Outlet/>
                </div>
            </I18nextProvider>
        </HeroUIProvider>
    </>);
}

export default Provider;