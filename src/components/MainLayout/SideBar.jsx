import SideBarItem from "@components/MainLayout/SideBarItem.jsx";
import {useSideBar} from "@components/Globals/Hooks/useSideBar.jsx";
import {Divider} from "@heroui/react";

const SideBar = ({width}) => {
    const sideBarItems = useSideBar()

    return (<>
        <aside style={{width: width + "px"}} className={"h-screen p-4 fixed right-0 top-0 border-l-1 border-gray-200"}>
            <a href={"https://harmonysystem.ir"} target={"_blank"} className={"flex items-center justify-start gap-2 group cursor-pointer"}>
                <div className="size-11 flex justify-center items-center rounded-lg transition-all duration-200 group-hover:bg-primary/10">
                    <img src="/images/icon.png" alt="" className={"size-8"}/>
                </div>
                <div className={"flex flex-col"}>
                    <h2 className={"font-[rokh] font-bold text-[15px] text-primary"}>هارمونی</h2>
                    <p className={"text-[12px] text-gray-500"}>بهترین برای همه</p>
                </div>
            </a>
            <div className={"flex gap-2 w-full my-3 items-center"}>
                <span className={"text-gray-400 text-nowrap text-[14px] -mt-1"}>بخش ها</span>
                <Divider className="my-4 shrink" />
            </div>
            {sideBarItems.map((item, index) => (
                <SideBarItem data={item} key={index} />
            ))}
        </aside>
    </>)
}

export default SideBar;