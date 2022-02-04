import React from "react";
import { AnswerObject } from "../../App";
type Props = {
  questionNr: number;
  totalQuestions: number;
  questionText: string;
  questionAnswers: string[];
  //   userAnswer: AnswerObject | undefined;
  callBack: any;
};

const QuestionCard: React.FC<Props> = ({
  questionNr,
  totalQuestions,
  questionText,
  questionAnswers,
  callBack,
  //   userAnswer,
}) => (
  <article>
    <h4>
      Question Number: {questionNr} / {totalQuestions}
    </h4>
    {/* <h4>{question}</h4> */}
    <p dangerouslySetInnerHTML={{ __html: questionText }} />
    <article>
      {questionAnswers?.map((answer, id) => (
        <section key={id}>
          <button onClick={callBack} value={answer}>
            <span>{answer}</span>
          </button>
        </section>
      ))}
    </article>
  </article>
);

export default QuestionCard;
