import React from 'react'
import { INPUT_PROPS } from './type'

function TextInput(props:INPUT_PROPS) {
    return (
        <div>
            <label htmlFor="colorInput">{props.label}</label>
            <input type={props.type} id='colorInput' onChange={event => props.onChange(event.target.value)}/>
        </div>
    )
}

export default TextInput