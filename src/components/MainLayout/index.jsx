import Header from "@components/MainLayout/Header.jsx";
import SideBar from "@components/MainLayout/SideBar.jsx";
import {useState} from "react";

const MainLayout = ({children, data}) => {
    const [sideBarWidth, setSideBarWidth] = useState(300);

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