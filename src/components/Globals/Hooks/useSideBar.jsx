import {LanguageSquare} from "iconsax-reactjs";
import {InRoute} from "@components/Globals/Functions/InRoute.js";

const useSideBar = () => {
    const sideBarItems = [
        {
            title: "زبان ها",
            description: "کنترل زبان ها",
            url: "/languages",
            icon: <LanguageSquare className={InRoute("/languages") ? "text-primary" : ""} />
        }
    ]

    return sideBarItems
}

export {useSideBar}