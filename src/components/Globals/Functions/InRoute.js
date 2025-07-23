import {useLocation} from "react-router";

const InRoute = (route) => {
    const location = useLocation();

    return location.pathname === route
}

export {InRoute}