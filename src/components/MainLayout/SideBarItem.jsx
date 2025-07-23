import {Link} from "react-router";
import {InRoute} from "@components/Globals/Functions/InRoute.js";

const SideBarItem = ({data}) => {
    return (<>
        <Link to={data.url} className={"flex items-center justify-start gap-2 group cursor-pointer"}>
            <div
                className={`size-11 flex justify-center items-center rounded-xl transition-all duration-200 group-hover:bg-primary/10 ${InRoute(data.url) && "bg-primary/10"}`}>
                {data.icon}
            </div>
            <div className={"flex flex-col"}>
                <h2 className={`font-[rokh] font-bold text-[15px] ${InRoute(data.url) && "text-primary"}`}>{data.title}</h2>
                <p className={`text-[12px] ${InRoute(data.url) && "text-gray-500"}`}>{data.description}</p>
            </div>
        </Link>
    </>)
}

export default SideBarItem