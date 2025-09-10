import {InRoute} from "@components/Globals/Functions/InRoute.js";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router";
import {useContext} from "react";
import {MainLayoutContext} from "@components/Routes/ApplicationProvider.jsx";
import Profile from "@components/MainLayout/Profile.jsx";

const Header = () => {
    const {t} = useTranslation();
    const {data} = useContext(MainLayoutContext);
    let location = useLocation();
    let location_array = location.pathname.split("/")

    const handleName = () => {
        if (["add", "delete", "edit"].includes(location_array[location_array.length - 1])) {
            return t(location_array[location_array.length - 2].toUpperCase()) + "  -  " + t(location_array[location_array.length - 1].toUpperCase())
        }else {
            return t(location_array[location_array.length - 1].toUpperCase())
        }
    }

    return (<>
        <header className={"min-h-12 px-4 border-b-1 border-gray-200 relative top-0 flex items-center justify-between"}>
            <div>
            </div>
            <div>
                <Profile user={data?.currentUser} />
            </div>
        </header>
        <section className={`${InRoute("/") && "!hidden"} h-16 border-b border-gray-200 relative top-0 bg-white`}>
            <div className={"xl:max-w-[1320px] size-full mx-auto flex items-center justify-between font-bold text-[26px] font-[rokh]"}>
                {handleName()}
            </div>
        </section>
    </>)
}

export default Header;