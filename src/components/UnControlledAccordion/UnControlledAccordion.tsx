import { useReducer } from "react";
import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    //collapsed: boolean
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
if (action.type === "TOGGLE-COLLAPSED") {
    return !state
}

    return state
}

function UnControlledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")


    //const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, false)


    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={ () => {dispatch({type: "TOGGLE-COLLAPSED"})} }/>

            {!collapsed && <AccordionBody/>}

        </div>
    );

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={ () => {props.onClick()} }>-- {props.title} --</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


export default UnControlledAccordion;