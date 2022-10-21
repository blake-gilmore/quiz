import React, {useState} from 'react'
import InputBox from './inputBox';
import { isValidNumber} from '../library/functions';
import questionDatabase from '../data/data';


export default function QuestionSelections(props){
    const [tempNum, setTempNum]=useState(questionDatabase.map((section) => ({id: section.id, value: 0, inputResponse: '', questions: section.sectionContent.length})));
    const [isValid, setIsValid] = useState(true);
    const [validNums, setValidNums] = useState([]);

    function getData(val, idIn){
        setTempNum(
            tempNum.map((num) =>
                // Here you accept a id argument to the function and replace it with hard coded 🤪 2, to make it dynamic.
                num.id === idIn
                    ? { ...num, value: val }
                    : { ...num }
            )
        );
    }

    function handleFormSubmit(){

        setValidNums(tempNum.map((num) => isValidNumber(num.value, num.id)));
        console.log(validNums);
        setIsValid(true);
        for (let i = 0; i < validNums.length; i++){
            if (validNums[i].value){
                tempNum[i].inputResponse = " Invalid number of questions for this section.";
                setIsValid(false);
            }
            else
                tempNum[i].inputResponse = "";
        }
    }

    return(
        <>
            {questionDatabase.map((section) => (
                <div className='section-question-number-prompt'>
                    <InputBox 
                        label = {section.sectionTitle}
                        numQuestions = {section.sectionContent.length}
                        sectionContent = {section.sectionContent}
                        onChange = {getData}
                        id = {section.id}
                        inputResponse = {tempNum[section.id-1].inputResponse}
                    />
                    <br/>
                </div>
            ))}
    
            <button onClick={()=>handleFormSubmit()}>Submit</button>
        </>
    )
}