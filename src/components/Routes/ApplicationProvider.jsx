import {Outlet} from "react-router";
import {GET} from "@components/Services/Axios/Methods.js";
import {createContext} from "react";
import MainLayout from "@components/MainLayout/index.jsx";
import {useQuery} from "@components/Globals/Hooks/useQuery.js";

export const MainLayoutContext = createContext(null);

const ApplicationProvider = () => {
    const {data} = useQuery({
        url: "/MainLayout@get",
    })

    console.log(data)

    return (<>
        <MainLayoutContext.Provider value={{data}}>
            <MainLayout>
                <Outlet/>
            </MainLayout>
        </MainLayoutContext.Provider>
    </>);
};

export default ApplicationProvider;
