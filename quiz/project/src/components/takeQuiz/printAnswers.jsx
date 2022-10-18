import React from "react";
import questionDatabase from "../data/data";
import { shuffleAnswers } from "../library/functions";

export default function PrintAnswers(props){
    return (
        <div className='answer-section'>
            {shuffleAnswers(props.questions, props.currentQuestion).map((answerOption) => (
                <button onClick={() => props.handleAnswers(answerOption === questionDatabase[props.questions[props.currentQuestion]-1].correctAnswer)}>
                    {answerOption}
                </button>
            ))} 
        </div>
    )
}