import React from 'react'
import { useState } from 'react'

export const AddQuestion = () => {
    const [question , setQuestion] =  React.useState("");
    const [answer, setAnswer] = React.useState("");

    const addQuestion = async() => {

        console.warn(question, answer);
        let result = await fetch("http://localhost:5000/add-question", {
            method: "post",
            body: JSON.stringify({question, answer}),
            headers:{
                "Content-type":"application/json"
            }
        });
        result = await result.json();
        alert("Question Added")
        console.warn(result)
    }

  return (
    <div className='login'>
        <h1>Add Question</h1>
        <input className='inputBox' type="text" value={question} onChange={(e)=>{setQuestion(e.target.value)}} placeholder='Enter Question' />
        <textarea className='inputBox' type="text" value={answer} onChange={(e)=>{setAnswer(e.target.value)}} placeholder='Enter Answer' />
        <button onClick={addQuestion} className="appButton">Add Question</button>
    </div>
  )
}
