import React, {useState} from 'react';


type OnOffPropsType = {
    onClick: (value: boolean) => void
    on: boolean
}



export function OnOff(props: OnOffPropsType) {



    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={ ()=>{ props.onClick(!props.on) } }>On</div>
            <div style={offStyle} onClick={ ()=>{ props.onClick(!props.on) } }>Off</div>
            <div style={indicatorStyle} ></div>
        </div>
    )

}


