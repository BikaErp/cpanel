import {HeroUIProvider} from "@heroui/system";
import {useHref, useNavigate} from "react-router";
import {Outlet} from "react-router";

const Provider = () => {
    const navigate = useNavigate();

    return (
        <HeroUIProvider navigate={navigate} useHref={useHref}>
            <div className={"max-w-[1536px] h-full w-full mx-auto"}>
                <Outlet />
            </div>
        </HeroUIProvider>
    );
}

export default Provider;