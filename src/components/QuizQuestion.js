import React from 'react';
import '../App.css';

const QuizQuestion = ({ question, score }) => {
  return (
    <div className="Question-container">
        <h3 className="Score">Score: <span>{score}</span> </h3>
        <div className="Question">
            <p>{question}?</p>
        </div>
    </div>
  )
}

export default QuizQuestion