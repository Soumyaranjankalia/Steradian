import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const QuestionList = () => {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = async () => {
    let result = await fetch("http://localhost:5000/questions");
    result = await result.json();
    setQuestion(result);
  };

  console.warn(question);

  const searchHandel = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setQuestion(result);
      }
    }else{
        getQuestion();
    }
  };

  return (
    <div className="homeDiv">
      <div>
        <input
          type="text"
          onChange={searchHandel}
          placeholder="Search Question"
          className='searchBar'
        />
      </div>
      {question.length > 0 ? question.map((e, i) => (
        <div key={e.id}>
          <h4>Question :- {e.question}</h4>
          <p>Answer :- {e.answer}</p>
        </div>
      )):
        <h1>No Result Found</h1>
      }
    </div>
  );
};
