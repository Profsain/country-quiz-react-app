import React, { useState, createContext } from 'react';
import Quiz from './components/Quiz';
import './App.css';
import QuizResult from './components/QuizResult';

// create quiz context
export const QuizContext = createContext();

const App = () => {
  const [score, setScore] = useState(0);
    return (
      <QuizContext.Provider value={{ score, setScore }}>
        <div className="App">
        <h1 className="Headings">Country Quiz</h1>
        <Quiz />
          {/* result report component */}
        {/* <QuizResult /> */}
        {/* footer component */}
      </div>
      </QuizContext.Provider>
    );
}

export default App;
