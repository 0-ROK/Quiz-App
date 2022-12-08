import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import QuizPage from "./QuizPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("<QuizPage/>", () => {
  it("is quizpage snapshot", () => {
    const utils = render(
      <RecoilRoot>
        <Router>
          <QuizPage />
        </Router>
      </RecoilRoot>
    );
    expect(utils.container).toMatchSnapshot();
  });
});
