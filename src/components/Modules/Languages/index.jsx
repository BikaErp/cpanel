import React from "react";
import {User, Chip, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";
import {DataTable} from "@components/Globals/Components/DataTable/index.jsx";
import TableHeader from "@components/Globals/Components/DataTable/TableHeader.jsx";

export default function LanguagesModule() {
    return (
        <>
            <DataTable name={"زبان"} />
        </>
    );
}
