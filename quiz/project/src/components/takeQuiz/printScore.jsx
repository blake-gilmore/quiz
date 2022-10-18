import React from "react"
export default function PrintScore(props){
    return (<div className='score'> {props.scoreText} {props.currentScore}/{props.currentQuestion} </div>)
}