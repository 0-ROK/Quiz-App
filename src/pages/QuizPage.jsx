import React from "react";
import useQuiz from "../hooks/useQuiz";
import Counter from "../modules/Counter";
import ProgressInfo from "../modules/ProgressInfo";
import QuizForm from "../modules/QuizForm";

const QuizPage = () => {
  const [quiz, skipQuiz, submitQuiz] = useQuiz();

  return (
    <div>
      <div className="App-header">
        <ProgressInfo />
        <Counter />
        <br />
        <div style={{ width: "80%", height: "40%" }}>
          <QuizForm
            quiz={quiz}
            skipQuiz={skipQuiz}
            submitQuiz={submitQuiz}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
