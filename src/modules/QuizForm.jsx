import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
} from "@mui/material";
import React, { useState } from "react";

const QuizForm = ({ quiz, skipQuiz, submitQuiz }) => {
  const [selectedAnswer, setSelectedAnswer] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    submitQuiz(e.target.answer.value);

    setSelectedAnswer(false);
  };

  const handleSkip = (e) => {
    e.preventDefault();

    skipQuiz();

    setSelectedAnswer(false);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader
          title={
            quiz ? (
              quiz?.question
            ) : (
              <Skeleton
                animation="wave"
                width="80%"
                height="10"
                style={{ marginBottom: 6 }}
              />
            )
          }
          subheader={
            quiz ? (
              quiz?.difficulty
            ) : (
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={10}
                width="2%"
              />
            )
          }
        />
        <CardContent>
          <div>
            <fieldset>
              {quiz ? (
                <legend>Select a answer!</legend>
              ) : (
                <legend>loading...</legend>
              )}
              {quiz ? (
                quiz?.answers?.map((answer, key) => (
                  <div key={key} style={{ cursor: "pointer" }}>
                    <label htmlFor={`answer${key}`}>
                      <input
                        type="radio"
                        name="answer"
                        value={answer}
                        onChange={(e) => setSelectedAnswer(answer)}
                      />
                      {answer}
                    </label>

                    <br />
                  </div>
                ))
              ) : (
                <>
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="20%"
                    style={{ marginBottom: 6 }}
                  />

                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="20%"
                    style={{ marginBottom: 6 }}
                  />

                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="20%"
                    style={{ marginBottom: 6 }}
                  />

                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="20%"
                    style={{ marginBottom: 6 }}
                  />
                </>
              )}
            </fieldset>
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            type="submit"
            disabled={!quiz || !selectedAnswer}
          >
            submit!
          </Button>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            disabled={!quiz}
            onClick={(e) => handleSkip(e)}
          >
            skip😅
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default QuizForm;
