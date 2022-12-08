import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import QuizReviewForm from "./QuizReviewForm";

describe("<QuizReviewForm/>", () => {
  const quiz = {
    category: "Entertainment: Cartoon ㄴ& Animations",
    type: "multiple",
    difficulty: "easy",
    question:
      "1. What is the relationship between Rick and Morty in the show &quot;Rick and Morty&quot;?",
    correct_answer: "Grandfather and Grandson",
    incorrect_answers: [
      "Father and Son",
      "Best Friends",
      "Crimefighting Partners",
    ],
    answers: [
      "Best Friends",
      "Crimefighting Partners",
      "Father and Son",
      "Grandfather and Grandson",
    ],
    result: false,
    selected_answer: "Father and Son",
  };
  it("is quiz review form snapshot", () => {
    const utils = render(
      <RecoilRoot>
        <QuizReviewForm quiz={quiz} />
      </RecoilRoot>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it("문항을 렌더링한다.", () => {
    render(
      <RecoilRoot>
        <QuizReviewForm quiz={quiz} />
      </RecoilRoot>
    );

    screen.getByText(/^\d\. .+?/);
  });

  it("문제의 난이도를 화면에 출력한다.", () => {
    render(
      <RecoilRoot>
        <QuizReviewForm quiz={quiz} />
      </RecoilRoot>
    );

    if (
      screen.queryByText("easy") ||
      screen.queryByText("medium") ||
      screen.queryByText("hard")
    ) {
    } else throw Error();
  });

  it("서로 다른 보기 4개가 출력된다.", () => {
    render(
      <RecoilRoot>
        <QuizReviewForm quiz={quiz} />
      </RecoilRoot>
    );

    const answers = screen.getAllByDisplayValue(/^/);

    expect(answers?.length).toBe(4);
    expect(answers?.length).toBe(new Set(answers).size);
  });

  it("문제의 정답과 사용자가 선택했던 보기가 표시된다.", () => {
    render(
      <RecoilRoot>
        <QuizReviewForm quiz={quiz} />
      </RecoilRoot>
    );

    const answers = screen.getAllByDisplayValue(/^/);

    for (let i = 0; i < answers.length; i++) {
      if (answers[i].getAttribute("value") === quiz.correct_answer)
        screen.getByText(
          `${answers[i].getAttribute("value")} ✅ (correct Answer)`
        );
      else if (answers[i].getAttribute("value") === quiz.selected_answer)
        screen.getByText(
          `${answers[i].getAttribute("value")} ❌ (your Answer)`
        );
    }
  });

  it("하단에 이전 버튼과 다음 버튼이 존재한다.", () => {
    render(
      <RecoilRoot>
        <QuizReviewForm quiz={quiz} />
      </RecoilRoot>
    );

    screen.getByRole("button", { name: "이전" });
    screen.getByRole("button", { name: "다음" });
  });

  it("첫 문항일 경우, 이전 버튼은 비활성화 된다.", () => {
    render(
      <RecoilRoot>
        <QuizReviewForm quiz={quiz} count={0} />
      </RecoilRoot>
    );

    const prevButton = screen.getByRole("button", { name: "이전" });

    expect(prevButton.hasAttribute("disabled")).toBe(true);
  });

  it("마지막 문항일 경우, 다음 버튼은 비활성화 된다.", () => {
    render(
      <RecoilRoot>
        <QuizReviewForm quiz={quiz} count={9} maxCount={10} />
      </RecoilRoot>
    );

    const nextButton = screen.getByRole("button", { name: "다음" });

    expect(nextButton.hasAttribute("disabled")).toBe(true);
  });

  //   아래의 기능은
  //    <ReviewPage /> 로부터 넘겨받는
  //    quiz, count, props의
  //   변경을 감지하며 실행
  //   아래는 단위 테스트 아님, 추후 통합 테스트에서 구현

  //   it("다음 버튼을 누르면 다음 문제를 불러온다.", () => {
  //     render(
  //       <RecoilRoot>
  //         <QuizReviewForm />
  //       </RecoilRoot>
  //     );
  //     const nextButton = screen.getByRole("button", { name: "다음" });

  //     fireEvent.click(nextButton);
  //   });

  //   it("이전 버튼을 누르면 이전 문제를 불러온다.", () => {
  //     render(
  //       <RecoilRoot>
  //         <QuizReviewForm />
  //       </RecoilRoot>
  //     );
  //     const prevButton = screen.getByRole("button", { name: "이전" });

  //     fireEvent.click(prevButton);
  //   });
});
