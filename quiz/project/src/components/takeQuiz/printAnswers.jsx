import React from "react";
import { shuffleAnswers } from "../library/functions";

export default function PrintAnswers(props){
    return (
        <div className='answer-section'>
            {shuffleAnswers(props.questions, props.currentQuestion).map((answerOption) => (
                <button key={answerOption} onClick={() => props.handleAnswers(answerOption === props.questions[props.currentQuestion].correctAnswer)}>
                    {answerOption}
                </button>
            ))} 
        </div>
    )
}