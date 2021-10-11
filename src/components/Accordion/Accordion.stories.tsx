import React, { useState } from "react";
import {action} from "@storybook/addon-actions"
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";



export default {
    title: "Accordion",
    component: Accordion,
}

const callBack = action('accordion mode change event fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion{...args} />

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue:"Menu",
    collapsed:true,
    onClick:callBack,
}

export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    titleValue:"Users",
    collapsed:false,
    onClick:callBack,
}



export const ChangeAccordionMode = () => {
    const [value, setValue] = useState(false)
    return (
        <Accordion titleValue={"Users"} collapsed={value} onClick={()=>{setValue(!value)}}/>

    )
}

