import React, { useState } from "react";
import "./App.css";
import QuestionCard from "./components/questionCard/QuestionCard";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./api/Endpoints";

const TOTAL_QUESTIONS = 10;
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNr, setQuestionNr] = useState(0);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswer, setUserAnswer] = useState("");
  // const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const startTrivia = async () => {
    setStartQuiz(true);
    setLoading(true);
    let newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setQuestionNr(0);
    // setUserAnswers([]);
    setUserAnswer("");
    setLoading(false);
  };
  const nextQuestion = () => {
    setQuestionNr((question) => question + 1);
    const correct = questions[questionNr].correct_answer === userAnswer;
    correct && setScore((score) => score + 1);
    setUserAnswer("");
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    setUserAnswer(answer);
  };
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      {!startQuiz && (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        startQuiz && (
          <>
            <p>Score:{score}</p>
            <QuestionCard
              questionNr={questionNr + 1}
              questionText={questions[questionNr]?.question}
              questionAnswers={questions[questionNr]?.answers}
              // userAnswer={userAnswers ? userAnswers[questionNr] : undefined}
              callBack={checkAnswer}
              totalQuestions={TOTAL_QUESTIONS}
            />
            {userAnswer.length > 0 && questionNr !== TOTAL_QUESTIONS - 1 && (
              <button onClick={nextQuestion}>Next</button>
            )}
          </>
        )
      )}
    </div>
  );
}

export default App;
