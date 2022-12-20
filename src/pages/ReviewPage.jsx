import React from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import QuizReviewForm from "../modules/QuizReviewForm";
import { resolvedQuizState } from "../states/recoilResolvedQuizState";

const ReviewPage = () => {
  const resolvedQuiz = useRecoilValue(resolvedQuizState);

  return (
    <div>
      <div className="App-header">
        <div style={{ width: "80%", height: "40%", marginBottom: "10" }}>
          <QuizReviewForm quiz={resolvedQuiz.filter((quiz) => !quiz.result)} />
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
