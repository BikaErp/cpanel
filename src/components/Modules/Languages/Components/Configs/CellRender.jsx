import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@heroui/react";
import { Edit2, Trash } from "iconsax-reactjs";
import React, {useEffect, useRef, useState} from "react";

const CellRender = ({ props }) => {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef(null);

    useEffect(() => {
        if (props.selectedRow && props.selectedRow.id === props.id) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [props.selectedRow]);

    return (
        <Dropdown isOpen={open} onOpenChange={setOpen} placement="bottom-end">
            <DropdownTrigger ref={triggerRef}>
                <Button className="bg-transparent flex flex-col justify-center items-center gap-1">
                    <div className="size-[4px] bg-gray-500 rounded-full"></div>
                    <div className="size-[4px] bg-gray-500 rounded-full"></div>
                    <div className="size-[4px] bg-gray-500 rounded-full"></div>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                    key="edit"
                    classNames={{ title: "flex gap-2" }}
                >
                    <Edit2 className="text-green-500" />
                    ویرایش
                </DropdownItem>
                <DropdownItem
                    key="delete"
                    classNames={{ title: "flex gap-2" }}
                >
                    <Trash className="text-red-500" />
                    حذف
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default CellRender