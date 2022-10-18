import React from 'react';
import questionDatabase from '../data/data';


export function isNumber(str){
    if (toString(str).trim() === ''){
        return false;
    }
    console.log(str)
    return !isNaN(str);
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