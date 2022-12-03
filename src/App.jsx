import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import { RecoilRoot } from "recoil";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="start_page">
              <Route path="" element={<StartPage />} />
              <Route path="*" element={<Navigate to="" replace />} />
            </Route>
            <Route path="quiz" element={<QuizPage />} />
            <Route path="result" element={<ResultPage />} />
            <Route path="" element={<Navigate to="start_page" replace />} />
            <Route path="*" element={<Navigate to="start_page" replace />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
