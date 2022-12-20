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
import React from "react";

const QuizReviewForm = ({ quiz, count = 0, setCount, maxCount = 10 }) => {
  return (
    <Card>
      <form>
        <CardHeader
          title={
            quiz ? (
              <div dangerouslySetInnerHTML={{ __html: quiz?.question }} />
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
                      disabled={answer !== quiz?.correct_answer}
                      checked={answer === quiz?.correct_answer}
                      key={key}
                      value={answer}
                      control={<Radio />}
                      label={
                        <div
                          style={{
                            color:
                              answer === quiz?.correct_answer
                                ? "blue"
                                : answer === quiz?.selected_answer && "red",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: `${answer}${
                              answer === quiz.selected_answer
                                ? " ❌"
                                : answer === quiz.correct_answer
                                ? " ✅"
                                : ""
                            }`,
                          }}
                        />
                      }
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
