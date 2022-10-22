import React from "react";
import ChooseAnswerPrompt from "./chooseAnswerPrompt";

export default function PrintQuestion(props){
    return(
        <>
            <ChooseAnswerPrompt />
            <div className='question-section'>
                <div className='question-count'> Question {props.currentQuestion+1} / {props.numQuestions} </div>
                <div className='question-text'> {props.questions[props.currentQuestion].question} </div>
            </div>
        </>
    )
}