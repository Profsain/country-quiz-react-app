import React from 'react';
import '../App.css';

const QuizAnsware = ({ option, answare, answareAction}) => {
  return (
    <button className="Answare-btn" onClick={answareAction}>
        <span>{option}</span>  {answare}
    </button>
  )
}

export default QuizAnsware;
