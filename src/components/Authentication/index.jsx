import {Button, Form, Input} from "@heroui/react";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const Authentication = () => {
    const [action, setAction] = useState(null);
    const {t} = useTranslation()

    return (<>
        <main className={"h-screen flex justify-center items-center"}>
            <div className="border border-gray-300 p-4 min-h-[350px] w-full max-w-[450px] rounded-[20px]">
                <h1 className={"text-[30px] font-bold"}>ورود</h1>
                <Form className="size-full">
                    <Input
                        isRequired
                        label={t("userName")}
                        errorMessage="لطفا یک مقدار وارد کنید"
                        labelPlacement="outside"
                        name="username"
                        placeholder="نام کاربری را وارد کنید"
                        type="text"
                    />

                    <Input
                        isRequired
                        errorMessage="Please enter a valid email"
                        label="Email"
                        labelPlacement="outside"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                    />
                    <div className="flex gap-2">
                        <Button color="primary" type="submit">
                            Submit
                        </Button>
                        <Button type="reset" variant="flat">
                            Reset
                        </Button>
                    </div>
                    {action && (<div className="text-small text-default-500">
                        Action: <code>{action}</code>
                    </div>)}
                </Form>
            </div>
        </main>
    </>)
}

export default Authentication;