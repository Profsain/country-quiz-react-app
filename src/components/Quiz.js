import React from 'react';
import Logo from './Logo';
import '../App.css';
import QuizQuestion from './QuizQuestion';
import QuizAnsware from './QuizAnsware';


const Quiz = () => {
  return (
    <div className="Container">
        <div  className="Logo">
            <Logo />
        </div>
        <QuizQuestion />
        <QuizAnsware option="A" answare="Finland" />
        <QuizAnsware option="B" answare="Nigeria" />
        <QuizAnsware option="C" answare="Spain" />
        <QuizAnsware option="D" answare="Ghana" />
    </div>
  )
}

export default Quiz