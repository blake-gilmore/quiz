import React, {useState} from "react";
import PrintScore from "./printScore";
import PrintQuestion from "./printQuestion";
import PrintAnswers from "./printAnswers";

export default function TakeQuiz(props){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    
    function handleAnswerOptionClick(isCorrect){
        if (isCorrect)
            setCurrentScore(currentScore + 1);

        var nextQuestion = currentQuestion + 1;
        if (nextQuestion == props.questions.length)
            setQuizCompleted(true);
        
        setCurrentQuestion(nextQuestion);
    }

    return(
        <div className='q&a-section'>
            {quizCompleted ? 
                <PrintScore 
                    currentScore = {currentScore}
                    currentQuestion = {currentQuestion}
                    scoreText = {"Final Score: "}
                />
            :
                <>
                    <PrintQuestion 
                        currentQuestion = {currentQuestion}
                        numQuestions = {props.numQuestions}
                        questions = {props.questions}
                    />
                    <PrintAnswers 
                        currentQuestion = {currentQuestion}
                        questions = {props.questions}
                        handleAnswers = {handleAnswerOptionClick}
                    />
                    <PrintScore 
                        currentScore = {currentScore}
                        currentQuestion = {currentQuestion}
                        scoreText = {"Score: "}
                    />
                </>
            }
        </div>

    )
}