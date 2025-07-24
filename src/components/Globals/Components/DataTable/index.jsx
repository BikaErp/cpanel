import React, {useEffect, useState} from "react";
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
import {Add, Filter, More, SearchNormal1} from "iconsax-reactjs";
import {useTranslation} from "react-i18next";
import {GET} from "@components/Services/Axios/Methods.js";

const ActionCellRenderer = (props) => {
    return (<div className="relative inline-block">
        <Button isIconOnly variant="light" size="sm">
            <More size={20}/>
        </Button>
        {/* TODO: Dropdown actions implementation */}
    </div>);
};

const DataTable = ({name, module, rowData, columnsDef}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState(null)


    const fetchData = async () => {
        const res = await GET(`/${module}`, {
            pageNumber: 1, pageSize: 10,
        }, "PagedList")

        if (res) setData(res)
    }

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        setColumns(columnsDef)
    }, [columnsDef]);


    return (<>
        <div className="bg-white rounded-[14px] w-full p-4 mb-4">
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
            <div className="w-full mt-4 overflow-x-auto">
                <table className="min-w-full table-fixed border border-gray-300 border-separate border-spacing-0 rounded-xl overflow-hidden">
                    <thead className="h-[36px] bg-[#f0f0f0] text-[#7f7f7f]">
                    <tr>
                        <th className="text-right px-3 text-[15px] font-bold" style={{ width: "60px" }}>ردیف</th>
                        {columns.map(column => (
                            <th
                                key={column.field}
                                className="text-right px-3 text-[15px] font-bold text-nowrap"
                                style={{ width: column.width ? `${column.width}px` : "auto" }}
                            >
                                {column.title}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data?.items.map((item, index) => (
                        <tr key={item.id} className="h-[48px] hover:bg-gray-50">
                            <td className="px-3">
                                <span className="bg-[#F0F0F0] p-1 px-2 rounded-lg text-gray-500 text-[12px]">{index + 1}</span>
                            </td>
                            {columns.map(column => (
                                <td
                                    key={column.field}
                                    className="text-right px-3 text-[15px] text-nowrap"
                                    style={{ width: column.width ? `${column.width}px` : "auto" }}
                                >
                                    {column.render ? column.render(item) : item[column.field]}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
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
    </>);
};

export {DataTable};
