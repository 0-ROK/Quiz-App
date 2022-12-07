import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import QuizPage from "../pages/QuizPage";
import ResultInfo from "./ResultInfo";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("<ResultInfo/>", () => {
  it("is quizform snapshot", () => {
    const utils = render(
      <RecoilRoot>
        <Router>
          <ResultInfo />
        </Router>
      </RecoilRoot>
    );
    expect(utils.container).toMatchSnapshot();
  });

  // 아래는 단위 테스트 아님, 추후 통합 테스트에서 구현

  //   it("이전에 기록된 시간이 유지되어야 합니다.", () => {
  //     jest.useFakeTimers();
  //     const { unmount } = render(
  //       <RecoilRoot>
  //         <Router>
  //           <QuizPage />
  //           <ResultInfo />
  //         </Router>
  //       </RecoilRoot>
  //     );
  //     act(() => jest.advanceTimersByTime(3000));

  //     unmount();
  //     render(
  //       <RecoilRoot>
  //         <Router>
  //           <ResultInfo />
  //         </Router>
  //       </RecoilRoot>
  //     );

  //     screen.getByText(`소요시간 : 3초`);
  //   });
});
