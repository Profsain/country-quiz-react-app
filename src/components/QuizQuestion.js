import React from 'react';
import '../App.css';

const QuizQuestion = () => {
  return (
    <div className="Question-container">
        <img src="../images/flag.png" alt="flag" className="Flag" />
        <div className="Question">
            <p>Which country does this flag belong to?</p>
        </div>
    </div>
  )
}

export default QuizQuestion