import React from 'react';
import questionDatabase from '../data/data';


export function isValidNumber(str, numQuestions){

    if (toString(str).trim() === ''){
        return false;
    }
    if (isNaN(str)){
        return false;
    }
    return (str > 0 && str <= numQuestions);
}

export function RandomizeQuestions(){
    var fullList = [];
    for (let i = 0; i < questionDatabase.length; i++){
        fullList.push(i+1);
    }

    let currentIndex = fullList.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [fullList[currentIndex], fullList[randomIndex]] = [
        fullList[randomIndex], fullList[currentIndex]];
    }
    return fullList;
}

export function shuffleAnswers(questions, currentQuestion){
    var answers = []
    for (let i = 0; i < questionDatabase[questions[currentQuestion]-1].incorrectAnswers.length; i++)
        answers.push(questionDatabase[questions[currentQuestion]-1].incorrectAnswers[i]);
    
    answers.push(questionDatabase[questions[currentQuestion]-1].correctAnswer);

    let currentIndex = answers.length,  randomIndex;
    
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [answers[currentIndex], answers[randomIndex]] = [
        answers[randomIndex], answers[currentIndex]];
    }
    return answers;
}