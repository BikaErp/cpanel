import {useMutation} from "@tanstack/react-query";
import {POST} from "@components/Services/Axios/Methods.js";

export const useLogin = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await POST("/authentication/login/password", data);

            return res.data;
        }
    });
};
