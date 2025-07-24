import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
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
import {Add, Filter, SearchNormal1, More} from "iconsax-reactjs";
import {AgGridReact} from "ag-grid-react";
import {GET} from "@components/Services/Axios/Methods.js";
import {useTranslation} from "react-i18next";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import {AgGridPersion} from "@components/Services/Translations/Resources.js";

const ActionCellRenderer = (props) => {
    return (
        <div className="relative inline-block">
            <Button isIconOnly variant="light" size="sm">
                <More size={20} />
            </Button>
            {/* TODO: Dropdown actions implementation */}
        </div>
    );
};

ModuleRegistry.registerModules([AllCommunityModule]);

const DataTable = ({name}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();
    const gridRef = useRef();
    const [rowData, setRowData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [filters, setFilters] = useState({
        Search: "",
        CountryId: "",
        IsActive: null,
        IsDeActive: null,
        PageNumber: 1,
        PageSize: 10,
    });

    const columnDefs = useMemo(() => [
        {headerName: "عنوان", field: "title", flex: 1, sortable: true, filter: true},
        {headerName: "کد فرهنگ", field: "languageCulture", flex: 1, sortable: true},
        {
            headerName: "فلگ",
            field: "flagImageFileName",
            cellRenderer: (params) => <img src={params.value} alt="flag" className="w-6 h-4" />,
        },
        {headerName: "جهت نوشتار", field: "direction.value"},
        {headerName: "پیش‌فرض", field: "isDefault", cellRenderer: ({value}) => value ? "✅" : "❌"},
        {headerName: "فعال", field: "stateShow", cellRenderer: ({value}) => value ? "✅" : "❌"},
        {headerName: "ترتیب", field: "order"},
        {
            headerName: "",
            field: "actions",
            cellRenderer: ActionCellRenderer,
            pinned: "left",
        },
    ], []);

    const fetchData = useCallback(async () => {
        const res = await GET("/Languages", filters, "PagedList");
        setRowData(res.items);
        setTotalCount(res.totalCount);
    }, [filters]);

    useEffect(() => {
        fetchData();
    }, []);

    const onPaginationChanged = useCallback((params) => {
        const current = params.api.paginationGetCurrentPage();
        const size = params.api.paginationGetPageSize();
        setFilters((prev) => ({...prev, PageNumber: current + 1, PageSize: size}));
    }, []);

    const handleSearchChange = (e) => {
        setFilters((prev) => ({...prev, Search: e.target.value, PageNumber: 1}));
    };

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
                        classNames={{ base: "w-[330px]", inputWrapper: "border-1" }}
                        variant="bordered"
                        startContent={<SearchNormal1 className="track-2 text-gray-500" size={25} />}
                        onChange={handleSearchChange}
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
            <div className="w-full mt-4">
                <div className="ag-theme-alpine w-full h-[500px]">
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        enableRtl={true}
                        columnDefs={columnDefs}
                        pagination={true}
                        paginationPageSize={filters.PageSize}
                        onPaginationChanged={onPaginationChanged}
                        rowHeight={45}
                        suppressRowClickSelection
                        rowSelection="single"
                        localeText={AgGridPersion}
                    />
                </div>
            </div>
        </div>

        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent>
                {(onClose) => (
                    <>
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
                    </>
                )}
            </DrawerContent>
        </Drawer>
    </>);
};

export {DataTable};
