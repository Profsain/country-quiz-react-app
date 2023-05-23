import React from 'react';
import '../App.css';

const QuizAnsware = ({ option, answare}) => {
  return (
    <button className="Answare-btn">
        <span>{option}</span>  {answare}
    </button>
  )
}

export default QuizAnsware;
