import React, { useState } from "react";
import {action} from "@storybook/addon-actions"
import UnControlledAccordion from "./UnControlledAccordion";




export default {
    title: "UnControlledAccordion",
    component: UnControlledAccordion
}

const callBack = action('accordion mode change event fired')


export const ChangeUnControlledAccordion = () => {

    return (
        <UnControlledAccordion titleValue={"Users"}  />

    )
}