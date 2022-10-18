import React from 'react'
export default function InputBox(props){
    return(
        <label className='input-box'>
            {props.label}
            <input 
                type='text' 
                onChange={props.onChange}
            />
        </label>
    )
}