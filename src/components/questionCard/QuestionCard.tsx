import React from "react";
import "./questionCard.css";
type Props = {
  questionNr: number;
  totalQuestions: number;
  questionText: string;
  questionAnswers: string[];
  callBack: any;
  selectedAnswer: string;
};

const QuestionCard: React.FC<Props> = ({
  questionNr,
  totalQuestions,
  questionText,
  questionAnswers,
  callBack,
  selectedAnswer,
}) => (
  <article className="card_container">
    {questionNr === totalQuestions + 1 ? (
      <h4>Finised</h4>
    ) : (
      <>
        <h4>
          Question Number: {questionNr} / {totalQuestions}
        </h4>
        <p dangerouslySetInnerHTML={{ __html: questionText }} />
        <article>
          {questionAnswers?.map((answer, id) => (
            <section key={id}>
              <button
                onClick={callBack}
                value={answer}
                className="btn"
                style={{
                  background:
                    selectedAnswer === answer
                      ? "linear-gradient(90deg, rgb(86, 255, 164), rgb(89, 188, 134))"
                      : "linear-gradient(90deg, rgb(86, 204, 255), rgb(110, 175, 180))",
                }}
              >
                {answer}
              </button>
            </section>
          ))}
        </article>
      </>
    )}
  </article>
);

export default QuestionCard;
