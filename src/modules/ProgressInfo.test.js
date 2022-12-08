import { render, screen, renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { RecoilObserver } from "../states/recoilObserver";
import {
  resolvedQuizState,
  useRecoilQuizValue,
} from "../states/recoilResolvedQuizState";
import ProgressInfo from "./ProgressInfo";

describe("<ProgressInfo/>", () => {
  it("is progressinfo snapshot", () => {
    const utils = render(
      <RecoilRoot>
        <RecoilObserver node={resolvedQuizState} onChange={() => {}} />
        <ProgressInfo />
      </RecoilRoot>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it("진행도가 표시되어야 한다.", () => {
    render(
      <RecoilRoot>
        <RecoilObserver node={resolvedQuizState} onChange={() => {}} />
        <ProgressInfo />
      </RecoilRoot>
    );

    const { result } = renderHook(() => useRecoilQuizValue(resolvedQuizState), {
      wrapper: RecoilRoot,
    });

    const progressInfo = screen.getByText(/진행도 : \d\/\d\d/);
  });

  // 아래는 resolvedState라는
  //   recoilState가
  //   quizForm 컴포넌트에 의해
  //   변경될 때,
  //   기대되는 테스트 케이스
  //   통합 테스트에서 구현 예정

  //   it("진행도가 표시되어야 한다. (1~10)", () => {});

  //   it("문제의 정답과 오답 현황이 표시되어야 한다.", () => {});
});
