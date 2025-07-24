import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    Input,
    useDisclosure
} from "@heroui/react";
import {Add, Filter, SearchNormal1} from "iconsax-reactjs";
import React from "react";
import {useTranslation} from "react-i18next";

const TableHeader = ({name}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();

    return (<>
        <div className="flex justify-between items-center w-full">
            <div className="gap-4 flex items-center justify-center">
                <Input
                    isClearable
                    isRequired
                    name="username"
                    placeholder={`جستجوی ${name}`}
                    type="text"
                    classNames={{base: "w-[330px]", inputWrapper: "border-1"}}
                    variant="bordered"
                    startContent={<SearchNormal1 className="track-2 text-gray-500" size={25}/>}
                    onChange={() => {
                    }}
                />
                <Button variant="bordered" onPress={onOpen} className="gap-2 font-bold text-gray-800">
                    <Filter size={22}/>
                    <span>فیلتر پیشرفته</span>
                </Button>
            </div>
            <Button color="primary" className="gap-1 font-bold">
                <Add size={28}/>
                {!name ? <span>افزودن</span> : <span>{name} جدید</span>}
            </Button>
        </div>

        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent>
                {(onClose) => (<>
                    <DrawerHeader className="flex flex-col gap-1">{t("ActionFilter")}</DrawerHeader>
                    <DrawerBody>
                        {/* TODO: افزودن فیلترهای بیشتر */}
                    </DrawerBody>
                    <DrawerFooter className="flex justify-center items-center">
                        <Button color="danger" className="font-bold basis-1/2" variant="light" onPress={onClose}>
                            {t("Close")}
                        </Button>
                        <Button color="primary" className="font-bold basis-1/2" onPress={onClose}>
                            {t("Actions")}
                        </Button>
                    </DrawerFooter>
                </>)}
            </DrawerContent>
        </Drawer>
    </>)
}

export default TableHeader;