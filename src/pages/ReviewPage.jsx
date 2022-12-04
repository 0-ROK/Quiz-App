import React from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import useQuiz from "../hooks/useQuiz";
import QuizReviewForm from "../modules/QuizReviewForm";
import { resolvedQuizState } from "../states/recoilResolvedQuizState";

const ReviewPage = () => {
  const [, skipQuiz, submitQuiz] = useQuiz();
  const resolvedQuiz = useRecoilValue(resolvedQuizState);
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="App-header">
        <span>{`틀린 문제 : ${count + 1}/${
          resolvedQuiz.filter((quiz) => !quiz.result).length
        }`}</span>
        <br />
        <div style={{ width: "80%", height: "40%" }}>
          <QuizReviewForm
            quiz={resolvedQuiz.filter((quiz) => !quiz.result)[count]}
            skipQuiz={skipQuiz}
            submitQuiz={submitQuiz}
            count={count}
            setCount={setCount}
            type="review"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
