import React from "react";
import { useRecoilValue } from "recoil";
import useQuiz from "../hooks/useQuiz";
import Counter from "../modules/Counter";
import QuizForm from "../modules/QuizForm";
import { resolvedQuizState } from "../states/recoilResolvedQuizState";

const MAX_COUNT = 10;

const QuizPage = () => {
  const [quiz, skipQuiz, submitQuiz] = useQuiz();

  const resolvedQuiz = useRecoilValue(resolvedQuizState);

  return (
    <div>
      <div className="App-header">
        <span>{`진행도 : ${resolvedQuiz.length + 1}/${MAX_COUNT}`}</span>
        <span>{resolvedQuiz.map((quiz) => (quiz.result ? "✅" : "❌"))}</span>
        <Counter />
        <br />
        <div style={{ width: "80%", height: "40%" }}>
          <QuizForm
            quiz={quiz}
            skipQuiz={skipQuiz}
            submitQuiz={submitQuiz}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
