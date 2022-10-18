import React, {useState} from 'react'
import InputBox from './inputBox';
import { isNumber } from '../library/functions';
import questionDatabase from '../data/data';


export default function QuestionSelections(props){
    const [inputResponse, setInputResponse]=useState("");
    const [tempNum, setTempNum]=useState(-1);

    function getData(val){
        setTempNum(val.target.value);
    }

    function handleFormSubmit(){
        if (isNumber(tempNum) && tempNum >= 0 && tempNum <= questionDatabase.length)
            props.handleQuestions(tempNum);
        else
            setInputResponse("Invalid entry. Please try again.");
    }

    return(
        <>
            <InputBox 
                label = "Question Amount: "
                onChange = {getData}
            />
            <button onClick={()=>handleFormSubmit()}>Submit</button>
            {inputResponse}
        </>
    )
}