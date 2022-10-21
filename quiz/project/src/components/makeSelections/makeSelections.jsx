import React from 'react'
import QuestionSelections from "./questionSelections"
import SelectionsPrompt from './selectionsPrompt'

export default function MakeSelections(props){
    return(
        <div className = "questions-prompt">
            <SelectionsPrompt />
            <QuestionSelections 
                numQuestions = {props.numQuestions}  
                handleQuestions = {props.handleQuestions}
                setNumQuestions = {props.setNumQuestions}
                setQuestionsSet = {props.setQuestionsSet} 
            />
        </div>
    )
}