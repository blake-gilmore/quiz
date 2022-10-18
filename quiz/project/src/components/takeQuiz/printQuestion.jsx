import React from "react";
import questionDatabase from "../data/data";
import ChooseAnswerPrompt from "./chooseAnswerPrompt";

export default function PrintQuestion(props){
    return(
        <>
            <ChooseAnswerPrompt />
            <div className='question-section'>
                <div className='question-count'> Question {props.currentQuestion+1} / {props.numQuestions} </div>
                <div className='question-text'> {questionDatabase[props.questions[props.currentQuestion]-1].question} </div>
            </div>
        </>
    )
}