import React from "react";
import { useRecoilValue } from "recoil";
import { resolvedQuizState } from "../states/recoilResolvedQuizState";
import { timerState } from "../states/recoilTimerState";

const ResultInfo = () => {
  const time = useRecoilValue(timerState);
  const resolvedQuiz = useRecoilValue(resolvedQuizState);

  return (
    <>
      <p>{`총 ${time}초가 걸렸어요!`}</p>
      <span>{`무려 ${
        resolvedQuiz.filter((quiz) => quiz.result).length
      }문제를 맞췄어요! 🥳`}</span>
      <span>{`아쉽게도, ${
        resolvedQuiz.filter((quiz) => !quiz.result).length
      }문제를 틀렸어요! 🥺`}</span>
    </>
  );
};

export default ResultInfo;
