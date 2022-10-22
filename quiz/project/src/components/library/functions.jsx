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

export function RandomizeQuestions(newValue){
    
    var qList = [];
    for (let i = 0; i < questionDatabase.length; i++){
        var fullList = [];
        
        for (let j = 0; j < questionDatabase[i].sectionContent.length; j++)
            fullList.push(j);
        
        let currentIndex = fullList.length,  randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            [fullList[currentIndex], fullList[randomIndex]] = [
            fullList[randomIndex], fullList[currentIndex]];
        }

        for (let j = 0; j < Number(newValue[i].value); j++){
            qList.push(questionDatabase[i].sectionContent[fullList[j]]);
        }
    }

    var fullList = [];
    for (let i = 0; i < qList.length; i++){
        fullList.push(i);
    }

    let currentIndex = fullList.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [fullList[currentIndex], fullList[randomIndex]] = [
        fullList[randomIndex], fullList[currentIndex]];
    }

    var fullQList = [];
    for (let i = 0; i < fullList.length; i++){
        fullQList.push(qList[fullList[i]]);
    }

    return fullQList;
}

export function shuffleAnswers(questions, currentQuestion){
    var answers = []
    for (let i = 0; i < questions[currentQuestion].incorrectAnswers.length; i++)
        answers.push(questions[currentQuestion].incorrectAnswers[i]);
    
    answers.push(questions[currentQuestion].correctAnswer);

    let currentIndex = answers.length,  randomIndex;
    
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [answers[currentIndex], answers[randomIndex]] = [
        answers[randomIndex], answers[currentIndex]];
    }
    return answers;
}