import React, {useEffect, useState} from "react";
import {User, Chip, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Switch} from "@heroui/react";
import {DataTable} from "@components/Globals/Components/DataTable/index.jsx";
import TableHeader from "@components/Globals/Components/DataTable/TableHeader.jsx";
import {GET} from "@components/Services/Axios/Methods.js";
import {useTranslation} from "react-i18next";
import StateChange from "@components/Globals/Components/DataTable/StateChange.jsx";
import {ToggleApi} from "@components/Globals/Functions/ToggleApi.js";

const Module = "languages";

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
            render: (props) => (
                <StateChange selected={props.stateShow} fetch={{
                    url: `/${Module}/StateShow`,
                    id: props.languageId,
                    field: "languageId"
                }}/>
            )
        }
    ]

    return (
        <>
            <DataTable
                name={"زبان"}
                module={Module}
                columnsDef={columnsDef}
            />
        </>
    );
}
