import {BrowserRouter, Route, Routes} from "react-router";
import InitialProvider from "@components/Routes/InitialProvider.jsx";
import Authentication from "@components/Authentication/index.jsx";
import ApplicationProvider from "@components/Routes/ApplicationProvider.jsx";
import Languages from "@components/Modules/Languages/index.jsx";
import NotFound from "@components/Services/Errors/NotFound.jsx";

const RoutesPath = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route element={<InitialProvider/>}>
                    <Route path="/login" element={<Authentication/>}/>

                    <Route element={<ApplicationProvider/>}>
                        <Route path="/" element={<>heellloo</>}/>

                        <Route path="/Languages">
                            <Route index element={<Languages/>}/>
                            <Route path="add" element={<Languages.Add/>}/>
                        </Route>
                    </Route>

                    <Route path={"*"} element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>);
};

export default RoutesPath;
