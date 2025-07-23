import {BrowserRouter, Route, Routes} from "react-router";
import InitialProvider from "@components/Routes/InitialProvider.jsx";
import Authentication from "@components/Authentication/index.jsx";
import ApplicationProvider from "@components/Routes/ApplicationProvider.jsx";
import Languages from "@components/Modules/Languages/index.jsx";

const RoutesPath = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route element={<InitialProvider/>}>
                    <Route path="/" element={<Authentication/>}/>

                    <Route element={<ApplicationProvider />}>
                        <Route path="/Languages" element={<Languages />}>

                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>);
};

export default RoutesPath;
