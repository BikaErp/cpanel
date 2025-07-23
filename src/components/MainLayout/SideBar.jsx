import SideBarItem from "@components/MainLayout/SideBarItem.jsx";
import {useSideBar} from "@components/Globals/Hooks/useSideBar.jsx";
import {Divider} from "@heroui/react";
import {Link} from "react-router";
import {InRoute} from "@components/Globals/Functions/InRoute.js";

const SideBar = ({width}) => {
    const sideBarItems = useSideBar()

    return (<>
        <aside style={{width: width + "px"}} className={"h-screen p-4 fixed right-0 top-0 border-l-1 border-gray-200"}>
            <Link to={"/"} className={`flex items-center gap-2 group cursor-pointer ${!InRoute("/") ? "justify-center" : "justify-start"}`}>
                <div
                    className={`size-11 flex justify-center items-center rounded-xl transition-all duration-200 group-hover:bg-primary/10 ${InRoute("/") && "bg-primary/10"}`}>
                    <img src="/images/icon.png" alt="" className={`size-8 ${!InRoute("/") && "grayscale"}`}/>
                </div>
                <div className={`flex flex-col ${!InRoute("/") && "!hidden"}`}>
                    <h2 className={`font-[rokh] font-bold text-[15px] ${InRoute("/") && "text-primary"}`}>هارمونی</h2>
                    <p className={`text-[12px] ${InRoute("/") && "text-gray-500"}`}>بهترین برای همه</p>
                </div>
            </Link>

            <div className={"flex gap-2 w-full items-center my-1"}>
                <span className={`text-gray-400 text-nowrap text-[14px] -mt-1 ${!InRoute("/") && "!hidden"}`}>بخش ها</span>
                <Divider className="my-4 shrink"/>
            </div>

            {sideBarItems.map((item, index) => (<SideBarItem data={item} key={index}/>))}
        </aside>
    </>)
}

export default SideBar;