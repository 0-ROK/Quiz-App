import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControlLabel,
  Radio,
  RadioGroup,
  Skeleton,
} from "@mui/material";
import React, { useState } from "react";

const QuizForm = ({ quiz, skipQuiz, submitQuiz }) => {
  console.log(quiz);
  const [selectedAnswer, setSelectedAnswer] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    submitQuiz && submitQuiz(e.target.answer.value);

    setSelectedAnswer(false);
  };

  const handleSkip = (e) => {
    e.preventDefault();

    skipQuiz && skipQuiz();

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
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="answer"
              >
                {quiz ? (
                  quiz?.answers?.map((answer, key) => (
                    <FormControlLabel
                      key={key}
                      value={answer}
                      checked={selectedAnswer === answer}
                      control={<Radio />}
                      onChange={(e) => setSelectedAnswer(answer)}
                      label={answer}
                    >
                      {/* {answer} */}
                    </FormControlLabel>
                  ))
                ) : (
                  <>
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width="20%"
                      style={{ marginBottom: 10 }}
                    />

                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width="20%"
                      style={{ marginBottom: 10 }}
                    />

                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width="20%"
                      style={{ marginBottom: 10 }}
                    />

                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width="20%"
                      style={{ marginBottom: 10 }}
                    />
                  </>
                )}
              </RadioGroup>
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
