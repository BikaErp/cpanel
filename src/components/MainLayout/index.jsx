import Header from "@components/MainLayout/Header.jsx";
import SideBar from "@components/MainLayout/SideBar.jsx";
import {useEffect, useState} from "react";
import {InRoute} from "@components/Globals/Functions/InRoute.js";
import {useLocation} from "react-router";


const MainLayout = ({children, data}) => {
    const [sideBarWidth, setSideBarWidth] = useState(300);
    const location = useLocation();

    useEffect(() => {
        if (!InRoute("/")) {
            setSideBarWidth(80)
        }else {
            setSideBarWidth(300)
        }
    }, [location])

    return (<div className={"flex"}>
            <SideBar width={sideBarWidth}/>
            <div className={"size-full"} style={{paddingRight: sideBarWidth + "px"}}>
                <Header/>
                <div className={"w-full min-h-[calc(100svh-56px)] bg-[#F5F5F5] py-5"}>
                    <div className="xl:max-w-[1320px] size-full mx-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>)
}

export default MainLayout;