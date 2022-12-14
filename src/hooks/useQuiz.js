import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageState } from "../states/recoilPageState";
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
  const setPage = useSetRecoilState(pageState);

  const fetchQuiz = async () => {
    setQuiz(null); // UI 스켈레톤 표시를 위한 null 처리
    try {
      const response = await axios.get("https://opentdb.com/api.php", {
        params: { ...params, amount: 1 },
      });

      const freshQuiz = response.data.results[0];
      freshQuiz.answers = [...response.data.results[0].incorrect_answers];
      freshQuiz.answers.push(response.data.results[0].correct_answer);
      freshQuiz.answers.sort();
      freshQuiz.question = `${resolvedQuiz.length + 1}. ${freshQuiz.question}`;

      setQuiz(freshQuiz);
      setCount(count + 1);
      return freshQuiz;
    } catch (error) {
      console.log(error);
    }
  };

  async function submitQuiz(answer) {
    try {
      if (count <= params.maxCount)
        setResolvedQuiz([
          ...resolvedQuiz,
          {
            ...quiz,
            result: answer === quiz.correct_answer,
            selected_answer: answer,
          },
        ]);
      if (count >= params.maxCount) {
        setPage((page) => page + 1, navigate("/result"));
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function skipQuiz() {
    try {
      if (count <= params.maxCount)
        setResolvedQuiz([
          ...resolvedQuiz,
          {
            ...quiz,
            result: false,
            selected_answer: null,
          },
        ]);
      if (count >= params.maxCount) {
        setPage((page) => page + 1, navigate("/result"));
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
  }, [resolvedQuiz.length]);
  useEffect(() => {}, [quiz]);

  return [quiz, skipQuiz, submitQuiz];
}
