import {addToast} from "@heroui/react";

const Alert = (title, description, variant = "default") => {
    const variants = ["default", "primary", "secondary", "success", "warning", "danger"]

    if (!variants.includes(variant)) {
        return;
    }

    addToast({
        title: title, description: description, color: variant
    })
}

export {Alert}