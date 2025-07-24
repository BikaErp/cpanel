import {POST} from "@components/Services/Axios/Methods.js";
import {Alert} from "@components/Globals/Functions/Alert.js";

const ToggleApi = async (url, payload) => {
    try {
        await POST(url, payload)
    } catch (error) {
        Alert("مشکلی پیش امده است", error, "danger")
    }
}

export {ToggleApi}