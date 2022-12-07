// import { describe } from "pm2";
import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";
import { jest } from "@jest/globals";

describe("<Counter/>", () => {
  it("matches snapshot", () => {
    const utils = render(
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it("시간을 나타내는 텍스트가 있다.", () => {
    render(
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    );

    screen.getByText("소요시간 : 0초");
  });

  it("매 초마다 시간이 증가한다.", () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    );

    let time = 0;

    const timeSpan = screen.getByText(/^소요시간/);

    for (let i = 0; i <= 3; i++) {
      expect(timeSpan).toHaveTextContent(`소요시간 : ${time}초`);
      act(() => jest.advanceTimersByTime(1000));
      time++;
    }
  });
});
