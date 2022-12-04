import React from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { pageState } from "../states/recoilPageState";
import { useEffect } from "react";
import { timerState } from "../states/recoilTimerState";
import { resolvedQuizState } from "../states/recoilResolvedQuizState";

const StartPage = () => {
  const navigate = useNavigate();
  const setPage = useSetRecoilState(pageState);
  const resetPage = useResetRecoilState(pageState);
  const resetTime = useResetRecoilState(timerState);
  const resetResolvedQuiz = useResetRecoilState(resolvedQuizState);

  useEffect(() => {
    resetPage();
    resetTime();
    resetResolvedQuiz();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <p>즐거운 퀴즈!!</p>
        <Button
          variant="contained"
          onClick={() => {
            setPage((page) => page + 1, navigate("/quiz"));
          }}
        >
          퀴즈 시작해볼까요?
        </Button>
      </div>
    </div>
  );
};

export default StartPage;
