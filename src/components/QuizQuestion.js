import React from 'react';
import '../App.css';

const QuizQuestion = () => {
  return (
    <div className="Question-container">
        <img src="../images/flag.png" alt="flag" className="Flag" />
        <div className="Question">
            <h2>Which country does this flag belong to?</h2>
        </div>
    </div>
  )
}

export default QuizQuestion