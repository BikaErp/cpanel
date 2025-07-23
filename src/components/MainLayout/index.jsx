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
                <div className="max-w-[1536px] h-full w-full mx-auto">
                    popok
                </div>
            </div>
        </div>)
}

export default MainLayout;