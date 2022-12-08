import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import StartPage from "./StartPage";

describe("<StartPage/>", () => {
  it("is start page snapshot", () => {
    const utils = render(
      <RecoilRoot>
        <Router>
          <StartPage />
        </Router>
      </RecoilRoot>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it("시작 버튼을 누르면 /quiz 페이지로 이동한다.", () => {
    render(
      <RecoilRoot>
        <Router>
          <StartPage />
        </Router>
      </RecoilRoot>
    );

    const startButton = screen.getByRole("button", {
      name: "퀴즈 시작해볼까요?",
    });

    fireEvent.click(startButton);

    expect(global.window.location.pathname).toBe("/quiz");
  });
});
