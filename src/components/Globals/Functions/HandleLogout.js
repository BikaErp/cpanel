import {POST} from "@components/Services/Axios/Methods.js";
import {Alert} from "@components/Globals/Functions/Alert.js";
import {useNavigate} from "react-router";

const HandleLogout = async () => {
    try {
        await POST("/Authentication/Logout")
        window.location.href = "/login";
    } catch (error) {
        Alert("مشکلی پیش امده است", error, "danger")
    }
}

export {HandleLogout}