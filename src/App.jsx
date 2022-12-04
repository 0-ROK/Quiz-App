import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import { useRecoilState } from "recoil";
import ReviewPage from "./pages/ReviewPage";
import { pageState } from "./states/recoilPageState";
import { PageNumber } from "./enum/PageNumber";

function App() {
  const [step, setStep] = useRecoilState(pageState);

  return (
    <BrowserRouter>
      <Routes>
        {step >= PageNumber.START_PAGE && (
          <Route path="start_page" element={<StartPage />} />
        )}
        {step === PageNumber.QUIZ_PAGE && (
          <Route path="quiz" element={<QuizPage />} />
        )}
        {step === PageNumber.RESULT_PAGE && (
          <Route path="result" element={<ResultPage />} />
        )}
        {step === PageNumber.REVIEW_PAGE && (
          <Route path="review" element={<ReviewPage />} />
        )}
        <Route path="" element={<Navigate to="start_page" replace />} />
        <Route path="*" element={<Navigate to="start_page" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
