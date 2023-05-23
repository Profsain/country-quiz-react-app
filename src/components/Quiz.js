import React from 'react';
import Logo from './Logo';
import '../App.css';
import QuizQuestion from './QuizQuestion';
import QuizAnsware from './QuizAnsware';
import ActionBtn from '../ActionBtn';


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

        <div className="Action-Container">
            <ActionBtn text="Next" bgColor="#f9a826" color="#fff" border="none" />
        </div>
    </div>
  )
}

export default Quiz