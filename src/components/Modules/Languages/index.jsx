import React, {useEffect, useState} from "react";
import {User, Chip, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Switch} from "@heroui/react";
import {DataTable} from "@components/Globals/Components/DataTable/index.jsx";
import TableHeader from "@components/Globals/Components/DataTable/TableHeader.jsx";
import {GET} from "@components/Services/Axios/Methods.js";
import {useTranslation} from "react-i18next";
import StateChange from "@components/Globals/Components/DataTable/StateChange.jsx";
import {ToggleApi} from "@components/Globals/Functions/ToggleApi.js";
import {ColumnsDef} from "@components/Modules/Languages/Components/Configs/ColumnsDef.jsx";

const Module = "languages";

export default function LanguagesModule() {
    const {t} = useTranslation()
    const [refresh, setRefresh] = useState(true)
    const [dropDownShow, setDropDownShow] = useState(false)

    const update = () => {
        setRefresh(prev => !prev)
    }

    const handleOpenDropDown = () => {
        setDropDownShow(true)
    }

    const handleCloseDropDown = () => {
        setDropDownShow(false)
    }

    const columns = ColumnsDef(Module, update)

    return (
        <>
            <DataTable
                name={"زبان"}
                module={Module}
                columnsDef={columns}
                refresh={refresh}
                onCellClick={handleOpenDropDown}
            />
        </>
    );
}
