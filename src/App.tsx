import React, { useState } from "react";
import "./App.css";
import QuestionCard from "./components/questionCard/QuestionCard";
import { fetchQuizQuestions, Difficulty } from "./api/Endpoints";

const TOTAL_QUESTIONS = 10;
function App() {
  const [loading, setLoading] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNr, setQuestionNr] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  const startTrivia = () => {
    setStartQuiz(true);
  };
  const nextQuestion = () => {
    setQuestionNr((question) => question + 1);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setQuestionNr((question) => question + 1);
  };
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      {!startQuiz && (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      )}
      {startQuiz && (
        <>
          <p>Score:{score}</p>
          {/* <QuestionCard
            questionNr={questionNr + 1}
            questionText={questions[questionNr]?.question}
            questionAnswers={questions[questionNr]?.answers}
            userAnswer={userAnswers ? userAnswers[questionNr] : undefined}
            callBack={checkAnswer}
            totalQuestions={TOTAL_QUESTIONS}
          /> */}
          <button onClick={nextQuestion}>Next</button>
        </>
      )}
    </div>
  );
}

export default App;
