const SideBarItem = ({ data }) => {
    return (<>
        <a target={"_blank"} className={"flex items-center justify-start gap-2 group cursor-pointer"}>
            <div className="size-11 flex justify-center items-center rounded-lg transition-all duration-200 group-hover:bg-primary/10">
                <img src="/images/icon.png" alt="" className={"size-8"}/>
            </div>
            <div className={"flex flex-col"}>
                <h2 className={"font-[rokh] font-bold text-[15px] text-primary"}>هارمونی</h2>
                <p className={"text-[12px] text-gray-500"}>بهترین برای همه</p>
            </div>
        </a>
    </>)
}

export default SideBarItem