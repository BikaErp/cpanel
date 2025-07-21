import { BrowserRouter, Routes, Route } from "react-router";
import Provider from "@components/Routes/Provider.jsx";

const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Provider />}>
                    <Route path="/" element={<>hello</>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesPath;
