import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
      <header className="App-header">
        <span>{`${resolvedQuiz.length}/${MAX_COUNT}`}</span>
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
      </header>
    </div>
  );
};

export default QuizPage;
