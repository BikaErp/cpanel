import {Button, Form, Input} from "@heroui/react";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Eye, EyeSlash} from "iconsax-reactjs";

const Authentication = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const {t} = useTranslation()

    return (<>
        <main className={"h-screen flex justify-center items-center"}>
            <div className={"max-w-[1100px] gap-[50px] w-full rounded-[30px] p-4 bg-white border border-gray-300 h-screen max-h-[550px] flex justify-center"}>
                <divc class={"basis-5/12 flex justify-center"}>
                    <div className="w-[350px] flex flex-col justify-center h-full">
                        <img src="/images/ArmDark.svg" alt="Harmony" className={"w-[220px] mx-auto mb-10"} />
                        <Form className="space-y-6">
                            <Input
                                label={t("userName")}
                                isRequired
                                errorMessage="لطفا یک مقدار وارد کنید"
                                labelPlacement="outside"
                                name="username"
                                placeholder="نام کاربری را وارد کنید"
                                type="text"
                                size={"md"}
                            />

                            <Input
                                endContent={<>
                                    <button
                                        type="button"
                                        className={"cursor-pointer"}
                                        onClick={toggleVisibility}
                                    >
                                        {isVisible ? <EyeSlash/> : <Eye/>}
                                    </button>
                                </>}
                                type={isVisible ? "text" : "password"}
                                label={t("Password")}
                                isRequired
                                errorMessage="لطفا یک مقدار وارد کنید"
                                labelPlacement="outside"
                                name="username"
                                placeholder="رمز عبور را وارد کنید"
                            />
                            <Button color="primary" type="submit" className={"w-full text-medium"}>{t("LogIn")}</Button>
                        </Form>
                    </div>
                </divc>
                <div className={"basis-7/12 rounded-[20px] gradient-primary"}>
                    <img src="https://cpanel.harmonysystem.ir/Assets/Image/Login/illustration.svg" alt=""/>
                </div>
            </div>
        </main>
    </>)
}

export default Authentication;