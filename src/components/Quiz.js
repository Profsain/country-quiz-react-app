import React, { useState } from 'react';
import Logo from './Logo';
import '../App.css';
import QuizQuestion from './QuizQuestion';
import QuizAnsware from './QuizAnsware';
import ActionBtn from './ActionBtn';
import data from '../quizdata.json';


const Quiz = () => {
  const quizData = data.questions;
  let [quizIndex, setQuizIndex] = useState(0);
  const quizQuestion = quizData[quizIndex].question;
  const quizOptions = quizData[quizIndex].wrong_answers;
  const quizAnsware = quizData[quizIndex].correct_answer;
  const allOptions = [...quizOptions, quizAnsware];

  // disable all button after click
  const disableBtn = () => {
    const allButtons = document.querySelectorAll('.Answare-btn');
    allButtons.forEach(button => {
      button.disabled = true;
    });
  }

  // clear style and enable button
  const clearStyle = () => {
    const allButtons = document.querySelectorAll('.Answare-btn');
    allButtons.forEach(button => {
      button.classList.remove('correctAnsware');
      button.classList.remove('wrongAnsware');
      button.disabled = false;
    });
  }

  // handle correct answare
  const handleCorrectAnsware = (e) => {
    const selectedAnsware = e.target.innerText;
    const correctAnsware = quizData[quizIndex].correct_answer;
    if (selectedAnsware === correctAnsware) {
      e.target.classList.add('correctAnsware');
    } else {
      e.target.classList.add('wrongAnsware');
    }

    disableBtn();
  }

  // handle next question
   const handleNext = () => {
    if (quizIndex === quizData.length - 1) {
      setQuizIndex(0);
    } else {
      setQuizIndex(quizIndex += 1);
    }
    clearStyle();
  }

  return (
    <div className="Container">
        <div  className="Logo">
            <Logo />
        </div>
        <QuizQuestion question={quizQuestion}/>
        {allOptions.map((option, index) => (
            <QuizAnsware 
              key={index} 
              answare={option}
              answareAction={handleCorrectAnsware}
            />
        ))}

        <div className="Action-Container">
            <ActionBtn 
              text="Next"
              bgColor="#f9a826"
              color="#fff"
              border="none"
              action={handleNext}
            />
        </div>
    </div>
  )
}

export default Quiz