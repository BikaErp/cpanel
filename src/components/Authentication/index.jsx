import {addToast, Button, Form, Input} from "@heroui/react";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Eye, EyeSlash} from "iconsax-reactjs";
import {useForm} from "react-hook-form";
import {useLogin} from "./Components/Hooks/useLogin.js";
import {Alert} from "@components/Globals/Functions/Alert.js";
import {useNavigate} from "react-router";

const Authentication = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const {t} = useTranslation();
    const naviage = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm();
    const loginMutation = useLogin();

    const onSubmit = (data) => {
        loginMutation.mutate(data, {
            onSuccess: (res) => {
                Alert(
                    "ورود با موفقیت انجام",
                    "",
                    "success",
                )

                naviage("/")
            }, onError: (error) => {
                Alert(
                    "خطا در ورود",
                    "اطلاعات خود را بررسی کنید",
                    "danger"
                )
            }
        });
    }

    return (<main className="h-screen flex justify-center items-center">
        <div
            className="max-w-[1100px] gap-[50px] w-full rounded-[30px] p-4 bg-white border border-gray-300 h-screen max-h-[550px] flex justify-center">
            <div className="basis-5/12 flex justify-center">
                <div className="w-[350px] flex flex-col justify-center h-full">
                    <img src="/images/BikaFull.png" alt="Harmony" className="w-[220px] mx-auto mb-10"/>
                    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <Input
                            label={t("userName")}
                            isRequired
                            errorMessage="لطفا یک مقدار وارد کنید"
                            labelPlacement="outside"
                            placeholder="نام کاربری را وارد کنید"
                            type="text"
                            size="md"
                            {...register("username")}
                        />

                        <Input
                            endContent={<button type="button" onClick={toggleVisibility}>
                                {isVisible ? <EyeSlash className={"text-gray-400"}/> :
                                    <Eye className={"text-gray-400"}/>}
                            </button>}
                            type={isVisible ? "text" : "password"}
                            label={t("Password")}
                            isRequired
                            errorMessage="لطفا یک مقدار وارد کنید"
                            labelPlacement="outside"
                            placeholder="رمز عبور را وارد کنید"
                            {...register("password")}
                        />
                        <Button
                            color="primary"
                            type="submit"
                            className="w-full text-medium"
                            isLoading={loginMutation.isPending}
                        >
                            {t("LogIn")}
                        </Button>
                    </Form>
                </div>
            </div>

            <div
                className="basis-7/12 rounded-[20px] gradient-primary flex flex-col justify-center items-center gap-[10px]">
                <img src="/images/Bika.svg" className={"w-[150px]"} alt=""/>
                <h1 className="font-[rokh] font-bold text-white text-[32px]">بهتر از انچه فکر میکنید!</h1>
                <h3 className="font-[rokh] font-bold text-white text-[20px]">همه چیز را داشته باشید و هیچ چیز نیاز نداشته باشید!</h3>
            </div>
        </div>
    </main>);
};

export default Authentication;
