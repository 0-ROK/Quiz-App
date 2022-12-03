import { atom, selector } from "recoil";

export const resolvedQuizState = atom({
  key: "resolvedQuiz",
  default: [],
});

export const correctRatioState = selector({
  key: "correctRatio",
  get: ({ get }) => {
    const quizzes = get(resolvedQuizState);
    // const list = get(todoListState);

    return [
      { 정답: quizzes.filter((quiz) => quiz.result).length },
      { 오답: quizzes.filter((quiz) => !quiz.result).length },
    ];

    // switch (filter) {
    //   case "Show Completed":
    //     return list.filter((item) => item.isComplete);
    // //   case "Show Uncompleted":
    // //     return list.filter((item) => !item.isComplete);
    //   default:
    //     return filter;
    // }
  },
});
