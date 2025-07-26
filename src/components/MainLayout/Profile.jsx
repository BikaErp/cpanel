import {Edit2, Logout, Trash, User} from "iconsax-reactjs";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@heroui/react";
import React from "react";
import {HandleLogout} from "@components/Globals/Functions/HandleLogout.js";

const Profile = ({user}) => {

    return (<>

        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                    <div className="border border-gray-200 w-[170px] h-[34px] rounded-lg flex items-center justify-start p-1 gap-2 text-[11px] cursor-pointer">
                        <div className={"h-full w-[24px] bg-[#f0f0f0] rounded flex justify-center items-center"}>
                            <User  className={"text-gray-600 track-2"} size={15}/>
                        </div>
                        {user?.fullName}
                    </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                    key="delete"
                    className={"border-red-500"}
                    color={"danger"}
                    variant={"bordered"}
                    classNames={{ title: "flex gap-2 flex-0 w-[200px]", base: "flex !justify-center border-1 text-red-500 rounded-xl hover:bg-red-500/10" }}
                    onClick={() => HandleLogout()}
                >
                    <Logout className="text-red-500" />
                    خروج
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </>)
}

export default Profile;