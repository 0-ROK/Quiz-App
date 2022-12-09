import { render, screen } from "@testing-library/react";
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

  it("데이터를 불러오는 동안은 문항이 skeleton으로 표시된다.", async () => {
    render(
      <RecoilRoot>
        <Router>
          <QuizPage />
        </Router>
      </RecoilRoot>
    );

    const quiz = screen.queryByText(/^\d\. .+?/);
    expect(quiz).toBe(null);

    await screen.findByText(/^\d\. .+?/);
  });

  it("데이터를 불러오는 동안은 난이도가 skeleton으로 표시된다.", async () => {
    render(
      <RecoilRoot>
        <Router>
          <QuizPage />
        </Router>
      </RecoilRoot>
    );

    const difficulty = screen.queryByDisplayValue(/\b(:?easy|medium|hard)\b/);
    expect(difficulty).toBe(null);
  });

  it("데이터를 불러오는 동안은 보기가 skeleton으로 표시된다.", async () => {
    render(
      <RecoilRoot>
        <Router>
          <QuizPage />
        </Router>
      </RecoilRoot>
    );

    const answers = screen.queryAllByDisplayValue(/^/);
    expect(answers?.length).toBe(0);

    const waitedAnswers = await screen.findAllByDisplayValue(/^/);
    expect(waitedAnswers?.length).toBe(4);
  });
});
