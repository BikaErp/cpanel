import {LanguageSquare} from "iconsax-reactjs";

const useSideBar = () => {
    const sideBarItems = [
        {
            title: "زبان ها",
            description: "کنترل زبان ها",
            url: "/languages",
            icon: <LanguageSquare />
        }
    ]

    return sideBarItems
}

export {useSideBar}