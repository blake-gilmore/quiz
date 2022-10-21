import React, {useState} from 'react'
import MakeSelections from './makeSelections/makeSelections';
import TakeQuiz from './takeQuiz/takeQuiz';
import Heading from './heading';
import {RandomizeQuestions} from './library/functions'

export default function App(){

    const [randomQuestionList, setRandomQuestionList] = useState([]);
    const [numQuestions, setNumQuestions] = useState([]);
    const [questionsSet, setQuestionsSet] = useState(false);


    function handleQuestionChange(newValue){
        setNumQuestions(newValue);
        setRandomQuestionList(RandomizeQuestions());
    }


    return(
        <div className='quiz-app'>
            <Heading />
            {questionsSet == false ? 
                <MakeSelections 
                    numQuestions = {numQuestions} 
                    handleQuestions = {handleQuestionChange}
                    setNumQuestions = {setNumQuestions}
                    setQuestionsSet = {setQuestionsSet}   
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