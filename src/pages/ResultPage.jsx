import React from "react";
import { RadialChart } from "react-vis";
import { useRecoilValue } from "recoil";
import { resolvedQuizState } from "../states/recoilResolvedQuizState";

const ResultPage = () => {
  const resolvedQuiz = useRecoilValue(resolvedQuizState);
  return (
    <div className="App">
      <header className="App-header">
        <p>문제를 다 풀었습니다!😤</p>
        {console.log(resolvedQuiz)}
        <RadialChart
          // data={[{ angle: 1 }, { angle: 5 }, { angle: 2 }]}
          // data={[
          //   { 정답: resolvedQuiz.filter((quiz) => quiz.result).length },
          //   { 오답: resolvedQuiz.filter((quiz) => !quiz.result).length },
          // ]}
          data={[
            { angle: 3, label: "정답", color: "Green", showLabels: true },
            { angle: 4, label: "오답", color: "red", showLabels: true },
          ]}
          width={300}
          height={300}
        />
      </header>
    </div>
  );
};

export default ResultPage;
