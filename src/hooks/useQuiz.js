import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { resolvedQuizState } from "../states/recoilResolvedQuizState";

const axios = require("axios").default;

/**
 *
 * @param {object} params
 * @param {number} params.maxCount
 * @param {string} params.type
 * @returns
 */
export default function useQuiz(params = { maxCount: 10, type: "multiple" }) {
  const navigate = useNavigate();
  const [resolvedQuiz, setResolvedQuiz] = useRecoilState(resolvedQuizState);
  const [quiz, setQuiz] = useState();
  const [count, setCount] = useState(0);

  const fetchQuiz = async () => {
    setQuiz(null);
    const response = await axios.get("", {
      params: { ...params, amount: 1 },
    });

    const freshQuiz = response.data.results[0];
    freshQuiz.answers = [...response.data.results[0].incorrect_answers];
    freshQuiz.answers.push(response.data.results[0].correct_answer);
    freshQuiz.answers.sort();

    setQuiz(freshQuiz);
    setCount(count + 1);
    return freshQuiz;
  };

  async function submitQuiz(answer) {
    try {
      console.log(count);
      if (count >= params.maxCount) {
        navigate("/result");
      } else {
        setResolvedQuiz([
          ...resolvedQuiz,
          {
            ...quiz,
            result: answer === quiz.correct_answer,
            selected_answer: answer,
          },
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function skipQuiz(answer) {
    try {
      console.log(count);
      if (count >= params.maxCount) {
        navigate("/result");
      } else {
        setResolvedQuiz([
          ...resolvedQuiz,
          {
            ...quiz,
            result: false,
            selected_answer: null,
          },
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function effect() {
      fetchQuiz();
    }
    effect();
    console.log(resolvedQuiz);
  }, [resolvedQuiz.length]);

  return [quiz, skipQuiz, submitQuiz];
}
