import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const QuizReviewForm = ({ quiz }) => {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>오답노트</h2>
        <span>{`틀린 문제 : ${quiz.length}개`}</span>
      </div>
      <Divider />
      {quiz.map((content) => (
        <>
          <CardHeader
            title={
              <div dangerouslySetInnerHTML={{ __html: content?.question }} />
            }
            subheader={content?.difficulty}
          />
          <CardContent>
            <div>
              <fieldset>
                <legend>Check the answers!</legend>

                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="answer"
                >
                  {content?.answers?.map((answer, key) => (
                    <FormControlLabel
                      disabled={answer !== content?.correct_answer}
                      checked={answer === content?.correct_answer}
                      key={key}
                      value={answer}
                      control={<Radio />}
                      label={
                        <div
                          style={{
                            color:
                              answer === content?.correct_answer
                                ? "blue"
                                : answer === content?.selected_answer && "red",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: `${answer}${
                              answer === content.selected_answer
                                ? " ❌"
                                : answer === content.correct_answer
                                ? " ✅"
                                : ""
                            }`,
                          }}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </fieldset>
            </div>
          </CardContent>
          <Divider />
        </>
      ))}
    </Card>
  );
};

export default QuizReviewForm;
