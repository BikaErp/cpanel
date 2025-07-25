import {useTranslation} from "react-i18next";
import StateChange from "@components/Globals/Components/DataTable/StateChange.jsx";
import CellRender from "@components/Modules/Languages/Components/Configs/CellRender.jsx";

const ColumnsDef = (Module, update) => {
    const {t} = useTranslation();

    return [
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
        },
        {
            title: t("default"),
            render: (props) => (
                <StateChange selected={props.isDefault} fetch={{
                    url: `/${Module}/Default`,
                    id: props.languageId,
                    field: "languageId",
                    refresh: update
                }}/>
            )
        },
        {
            title: t("Actions"),
            width: 10,
            render: (props) => <CellRender props={props} selectedRow={props.selectedRow} />
        }
    ]
}

export {ColumnsDef}