import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import QuizForm from "./QuizForm";

describe("<QuizForm/>", () => {
  const quiz = {
    category: "Entertainment: Cartoon & Animations",
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
  };
  it("is quizform snapshot", () => {
    const utils = render(
      <RecoilRoot>
        <QuizForm quiz={quiz} />
      </RecoilRoot>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it("문항을 렌더링한다.", () => {
    render(
      <RecoilRoot>
        <QuizForm quiz={quiz} />
      </RecoilRoot>
    );

    screen.getByText(/^\d\. .+?/);
  });

  it("문제의 난이도를 화면에 출력한다.", () => {
    render(
      <RecoilRoot>
        <QuizForm quiz={quiz} />
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
        <QuizForm quiz={quiz} />
      </RecoilRoot>
    );

    const answers = screen.getAllByDisplayValue(/^/);

    expect(answers?.length).toBe(4);
    expect(answers?.length).toBe(new Set(answers).size);
  });

  it("하단에 submit 버튼과 skip 버튼이 존재한다.", () => {
    render(
      <RecoilRoot>
        <QuizForm quiz={quiz} />
      </RecoilRoot>
    );

    screen.getByRole("button", { name: "submit!" });
    screen.getByRole("button", { name: "skip😅" });
  });

  it("보기를 선택하지 않으면 submit 버튼은 disabled 된다.", () => {
    render(
      <RecoilRoot>
        <QuizForm quiz={quiz} />
      </RecoilRoot>
    );

    const submitButton = screen.getByRole("button", { name: "submit!" });

    expect(submitButton.hasAttribute("disabled")).toBe(true);
  });

  it("보기를 선택하면 submit 버튼이 활성화된다.", () => {
    render(
      <RecoilRoot>
        <QuizForm quiz={quiz} />
      </RecoilRoot>
    );

    const answers = screen.getAllByDisplayValue(/^/);
    const submitButton = screen.getByRole("button", { name: "submit!" });

    expect(submitButton.hasAttribute("disabled")).toBe(true);

    for (let i = 0; i < answers.length; i++) {
      fireEvent.click(answers[i]);
      expect(submitButton.hasAttribute("disabled")).toBe(false);
      submitButton.removeAttribute("disabled");
    }
  });

  //   아래의 기능은
  //    <QuizPage /> 로부터
  //    skipQuiz(), submitQuiz()를 넘겨받아 실행
  //   아래는 단위 테스트 아님, 추후 통합 테스트에서 구현

  //   it("skip 버튼을 눌러 다음 문제를 불러올 수 있다.", () => {});

  //   it("submit 버튼을 눌러 문제를 풀고 다음 문제를 불러올 수 있다.", () => {});

  //   it("문항을 fetch 하는 동안에는 skeleton이 렌더링되고, 모든 버튼이 비활성화된다.", () => {});

  //   it("진행도가 10/10일 때 skip 또는 submit 버튼을 누르면 /result 페이지로 이동한다.", () => {});
});
