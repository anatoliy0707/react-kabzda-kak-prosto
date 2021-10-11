import React, {useRef, useState} from "react";


export const UncontrolInput = () => {
const [value, setValue] = useState('')

const inputRef = useRef(null)
    return (
        <div>
        <input  /><button>save</button> actualValue:{value}
        </div>
    )
}

