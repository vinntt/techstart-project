import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Container } from "@mui/material";

const steps = [
  {
    label: "Written application",
    description: `In the written application you must send us your CV and answer a short questionnaire about your
    motivation, background, and expectations`,
  },
  {
    label: "Challenge",
    description:
      "We invite you to campus for an admission day where you will join in some practical team challenges. In the event that Corona does not allow us to meet in person, we will send you a virtual challenge that you must complete",
  },
  {
    label: "Interview",
    description: `In the online interview we want to get to know you better, but this is also your chance to get to know us.`,
  },
  {
    label: "Confirmation",
    description: `After admission day, you will receive your confirmation within two weeks.`,
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container
      maxWidth="xl"
      style={{ padding: "2rem", backgroundColor: "#F8F9FF" }}
    >
      <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: "bold", padding: "4rem 0" }}
      >
        Application Process
      </Typography>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}

        <Button
          href="/"
          type="submit"
          variant="button"
          sx={{ mt: 3, mb: 2, py: 1 }}
          endIcon={""}
          style={{
            backgroundColor: "#F1005F",
            border: "2px solid black",
            color: "#FFFFFF",
            fontWeight: "bold",
            boxShadow: "0px 2px 0px #000000",
            borderRadius: "12px",
            whiteSpace: "nowrap",
            minWidth: "auto",
          }}
        >
          Apply now
        </Button>
      </Box>
    </Container>
  );
}
