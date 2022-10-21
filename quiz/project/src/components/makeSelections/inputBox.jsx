import React from 'react'
export default function InputBox(props){
    return(
        <label className='input-box'>
            {props.label} - {props.numQuestions} Questions:&emsp;
            <input 
                type='text' 
                onChange={e=>props.onChange(e.target.value, props.id)}
            />
            {props.inputResponse}
        </label>
    )
}