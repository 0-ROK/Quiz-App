import React from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

const StartPage = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <p>즐거운 퀴즈!!</p>
        <Button variant="contained" onClick={() => navigate("/quiz")}>
          퀴즈 시작해볼까요?
        </Button>
      </header>
    </div>
  );
};

export default StartPage;
