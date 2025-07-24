import React, {useEffect, useState} from "react";
import {Button} from "@heroui/react";
import {More} from "iconsax-reactjs";
import {useTranslation} from "react-i18next";
import {GET} from "@components/Services/Axios/Methods.js";
import TableHeader from "@components/Globals/Components/DataTable/TableHeader.jsx";

const ActionCellRenderer = (props) => {
    return (<div className="relative inline-block">
        <Button isIconOnly variant="light" size="sm">
            <More size={20}/>
        </Button>
        {/* TODO: Dropdown actions implementation */}
    </div>);
};

const DataTable = ({name, module, rowData, columnsDef}) => {
    const {t} = useTranslation();
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

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
            <TableHeader name={name}/>
            <div className="w-full mt-4 overflow-x-auto">
                <table
                    className="min-w-full table-fixed border border-gray-300 border-separate border-spacing-0 rounded-xl overflow-hidden">
                    <thead className="h-[36px] bg-[#f0f0f0] text-[#7f7f7f]">
                    <tr>
                        <th className="text-right px-3 text-[15px] font-bold" style={{width: "60px"}}>ردیف</th>
                        {columns.map(column => (<th
                            key={column.field}
                            className="text-right px-3 text-[15px] font-bold text-nowrap"
                            style={{width: column.width ? `${column.width}px` : "auto"}}
                        >
                            {column.title}
                        </th>))}
                    </tr>
                    </thead>
                    <tbody>
                    {data?.items.map((item, index) => (<tr key={item.id} className="h-[48px] hover:bg-gray-50">
                        <td className="px-3">
                                <span
                                    className="bg-[#F0F0F0] p-1 px-2 rounded-lg text-gray-500 text-[12px]">{index + 1}</span>
                        </td>
                        {columns.map(column => (<td
                            key={column.field}
                            className="text-right px-3 text-[15px] text-nowrap text-gray-600"
                            style={{width: column.width ? `${column.width}px` : "auto"}}
                        >
                            {column.render ? column.render(item) : item[column.field]}
                        </td>))}
                    </tr>))}
                    </tbody>
                </table>
            </div>
        </div>

    </>);
};

export {DataTable};
