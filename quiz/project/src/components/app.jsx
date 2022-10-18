import React, {useState} from 'react'
import MakeSelections from './makeSelections/makeSelections';
import TakeQuiz from './takeQuiz/takeQuiz';
import Heading from './heading';
import {RandomizeQuestions} from './library/functions'

export default function App(){

    const [randomQuestionList, setRandomQuestionList] = useState([]);
    const [numQuestions, setNumQuestions] = useState(-1)

    function handleQuestionChange(newValue){
        setNumQuestions(newValue);
        setRandomQuestionList(RandomizeQuestions());
    }


    return(
        <div className='quiz-app'>
            <Heading />
            {numQuestions == -1 ? 
                <MakeSelections 
                    numQuestions = {numQuestions} 
                    handleQuestions = {handleQuestionChange}   
                />
                : 
                <TakeQuiz 
                    questions = {randomQuestionList}
                    numQuestions = {numQuestions}
                />
            }
        </div>
    )
}