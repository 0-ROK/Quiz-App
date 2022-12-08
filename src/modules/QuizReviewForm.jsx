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

const QuizReviewForm = ({ quiz, count = 0, setCount, maxCount = 10 }) => {
  const [, setSelectedAnswer] = useState();

  return (
    <Card>
      <form>
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
                      control={<Radio />}
                      onChange={(e) => setSelectedAnswer(answer)}
                      label={`${answer}${
                        answer === quiz.selected_answer
                          ? " ❌ (your Answer)"
                          : answer === quiz.correct_answer
                          ? " ✅ (correct Answer)"
                          : ""
                      }`}
                    />
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
            type="button"
            disabled={!quiz || !count}
            onClick={() => {
              setCount((count) => count - 1);
            }}
          >
            이전
          </Button>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            disabled={!quiz || count + 1 >= maxCount}
            onClick={() => setCount((count) => count + 1)}
          >
            다음
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default QuizReviewForm;
