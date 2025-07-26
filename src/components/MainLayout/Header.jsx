import {InRoute} from "@components/Globals/Functions/InRoute.js";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router";
import {useContext} from "react";
import {MainLayoutContext} from "@components/Routes/ApplicationProvider.jsx";

const Header = () => {
    const {t} = useTranslation();
    const {data} = useContext(MainLayoutContext);
    let location = useLocation();
    location = location.pathname.split("/")
    location = location[location.length-1]

    return (<>
        <header className={"min-h-12 px-4 border-b-1 border-gray-200 relative top-0 flex items-center justify-between"}>
        </header>
        <section className={`${InRoute("/") && "!hidden"} h-16 border-b border-gray-200 relative top-0 bg-white`}>
            <div className={"xl:max-w-[1320px] size-full mx-auto flex items-center justify-between font-bold text-[26px] font-[rokh]"}>
                {t(location.toUpperCase())}
            </div>
        </section>
    </>)
}

export default Header;