import {Outlet} from "react-router";


const ApplicationProvider = () => {
    return (<>
        <div className={"max-w-[1536px] h-full w-full mx-auto"}>
            <Outlet/>
        </div>
    </>);
}

export default ApplicationProvider;