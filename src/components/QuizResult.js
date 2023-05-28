import React, { useContext } from 'react';
import { QuizContext } from '../App';

const QuizResult = () => {
    const contextValue = useContext(QuizContext);
    const { score } = contextValue;
    return (
        <div>QuizResult: { score }</div>
    )
}

export default QuizResult;
