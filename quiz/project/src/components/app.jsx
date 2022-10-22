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
        setQuestionsSet(true);
        setNumQuestions(newValue);
        setRandomQuestionList(RandomizeQuestions(newValue));
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
                    numQuestions = {randomQuestionList.length}
                />
            }
        </div>
    )
}