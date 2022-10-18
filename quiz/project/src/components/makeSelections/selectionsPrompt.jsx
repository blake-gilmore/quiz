import React from 'react'
import questionDatabase from '../data/data'
export default function SelectionsPrompt(){
    return(
        <p className="selections-prompt">Enter a number from 1-{questionDatabase.length} for the number of questions in your quiz.<br /></p>
    )
}