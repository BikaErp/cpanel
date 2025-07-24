import React, {useEffect, useState} from "react";
import {User, Chip, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";
import {DataTable} from "@components/Globals/Components/DataTable/index.jsx";
import TableHeader from "@components/Globals/Components/DataTable/TableHeader.jsx";
import {GET} from "@components/Services/Axios/Methods.js";
import {useTranslation} from "react-i18next";

export default function LanguagesModule() {
    const [rowData, setRowData] = useState([])
    const {t} = useTranslation()

    const columnsDef = [
        {
            title: t("Title"),
            field: "title"
        },
        {
            title: t("Language"),
            field: "languageCulture"
        },
        {
            title: t("Orientation"),
            render: (props) => props.direction.value
        },
        {
            title: t("FlagImage"),
            render: (props) => (
                <img src={props.flagImageFileName} alt={""} className={"size-[38px] border border-gray-300 object-cover overflow-hidden rounded-full"} />
            )
        },
        {
            title: t("StateShow"),
            render: (props) => "stateShow"
        }
    ]

    return (
        <>
            <DataTable
                name={"زبان"}
                module={"languages"}
                columnsDef={columnsDef}
            />
        </>
    );
}
