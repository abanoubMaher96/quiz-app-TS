import React from "react";

type Props = {
  questionNr: number;
  totalQuestions: number;
  questionText: string;
  questionAnswers: string[];
  userAnswer: number | undefined;
  callBack: any;
};

const QuestionCard: React.FC<Props> = ({
  questionNr,
  totalQuestions,
  questionText,
  questionAnswers,
  callBack,
  userAnswer,
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
          <button disabled={!!userAnswer} onClick={callBack}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </section>
      ))}
    </article>
  </article>
);

export default QuestionCard;
