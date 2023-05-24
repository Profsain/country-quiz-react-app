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

  // change question
  // const changeQuestion = () => {}
  const handleNext = () => {
    if (quizIndex <= quizData.length - 1) {
      setQuizIndex(quizIndex += 1);
      console.log(quizData.length - 1)
    }
    // let i = 0;
    // while (i < quizData.length) {
    //   setQuizIndex(i);
    //   i++;
    // }
  }
  return (
    <div className="Container">
        <div  className="Logo">
            <Logo />
        </div>
        <QuizQuestion question={quizQuestion}/>
        {allOptions.map((option, index) => (
            <QuizAnsware key={index} answare={option} />
        ))}

        <div className="Action-Container">
            <ActionBtn text="Next" bgColor="#f9a826" color="#fff" border="none" action={handleNext}/>
        </div>
    </div>
  )
}

export default Quiz