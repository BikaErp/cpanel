import {BrowserRouter, Route, Routes} from "react-router";
import Provider from "@components/Routes/Provider.jsx";
import Authentication from "@components/Authentication/index.jsx";
import RouteChangeHandler from "@components/Globals/Components/RouteChnageHandler.jsx";

const RoutesPath = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route element={<Provider/>}>
                    <Route path="/" element={<Authentication/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>);
};

export default RoutesPath;
