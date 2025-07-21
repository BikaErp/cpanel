import {createBrowserRouter, RouterProvider,} from "react-router";
import Authentication from "@/Components/Authentication/index.jsx";

const Routes = () => {
    const router = [
        {
            path: "/", element: <Authentication />,
        },
    ];

    return (<>
        <RouterProvider router={createBrowserRouter(router)}/>
    </>)
}

export default Routes