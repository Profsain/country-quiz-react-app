import React from 'react';
import '../App.css';

const QuizQuestion = ({ question }) => {
  return (
    <div className="Question-container">
        <img src="../images/flag.png" alt="flag" className="Flag" />
        <div className="Question">
            <p>{question}?</p>
        </div>
    </div>
  )
}

export default QuizQuestion