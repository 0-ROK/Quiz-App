import React from "react";
import { useRecoilValue } from "recoil";
import { resolvedQuizState } from "../states/recoilResolvedQuizState";

const MAX_COUNT = 10;

const ProgressInfo = () => {
  const resolvedQuiz = useRecoilValue(resolvedQuizState);

  return (
    <>
      <span>{`진행도 : ${resolvedQuiz.length + 1}/${MAX_COUNT}`}</span>
      <span>{resolvedQuiz.map((quiz) => (quiz.result ? "✅" : "❌"))}</span>
    </>
  );
};

export default ProgressInfo;
