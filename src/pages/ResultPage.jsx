import { Button } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useNavigate } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Pie } from "react-chartjs-2";
import { pageState } from "../states/recoilPageState";
import { resolvedQuizState } from "../states/recoilResolvedQuizState";
import ResultInfo from "../modules/ResultInfo";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultPage = () => {
  const navigate = useNavigate();
  const resolvedQuiz = useRecoilValue(resolvedQuizState);

  const setPage = useSetRecoilState(pageState);
  return (
    <div className="App">
      <div className="App-header">
        <ResultInfo />
        <br />
        <div width={300} height={300}>
          <Pie
            width={300}
            height={300}
            data={{
              labels: ["정답", "오답"],
              datasets: [
                {
                  label: "개수",
                  data: [
                    resolvedQuiz.filter((quiz) => quiz.result).length,
                    resolvedQuiz.filter((quiz) => !quiz.result).length,
                  ],
                  backgroundColor: [
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    // "rgba(255, 206, 86, 0.2)",
                    // "rgba(75, 192, 192, 0.2)",
                    // "rgba(153, 102, 255, 0.2)",
                    // "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 99, 132, 1)",
                    // "rgba(255, 206, 86, 1)",
                    // "rgba(75, 192, 192, 1)",
                    // "rgba(153, 102, 255, 1)",
                    // "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
        <br />
        {resolvedQuiz.filter((quiz) => !quiz.result).length ? (
          <Button
            variant="contained"
            onClick={() => setPage((page) => page + 1, navigate("/review"))}
          >
            오답 노트 확인 😤
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default ResultPage;
