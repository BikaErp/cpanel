import {HeroUIProvider} from "@heroui/system";
import {useHref, useNavigate} from "react-router";
import {Outlet} from "react-router";

const Provider = () => {
    const navigate = useNavigate();

    return (
        <HeroUIProvider navigate={navigate} useHref={useHref}>
            <Outlet />
        </HeroUIProvider>
    );
}

export default Provider;