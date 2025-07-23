import {Outlet} from "react-router";
import {GET} from "@components/Services/Axios/Methods.js";
import {createContext} from "react";
import MainLayout from "@components/MainLayout/index.jsx";
import {useQuery} from "@components/Globals/Hooks/useQuery.js";

export const MainLayoutContext = createContext();

const ApplicationProvider = () => {
    useQuery({
        url: "/MainLayout@get",
    })

    return (<>
        <MainLayoutContext.Provider value={{}}>
            <MainLayout>
                <Outlet/>
            </MainLayout>
        </MainLayoutContext.Provider>
    </>);
};

export default ApplicationProvider;
