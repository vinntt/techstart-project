import { Button, Grid, Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { useReducer } from "react";
import Commitments from "../components/Form/Commitments";
import MotivationQuestions from "../components/Form/MotivationQuestions";
import ScreeningQuestions from "../components/Form/ScreeningQuestions";
import useLocalStorage from "../utils/localstorage";

export default function ApplicationForm() {
  const [_, refresh] = useReducer(x => x + 1, 0);
  const [applicationStep, setApplicationStep] = useLocalStorage("application_step", 1);

  const nextStep = (step) => {
    console.log("called");
    setApplicationStep(step);
    refresh();
  }

  return (
    <Box sx={{ flexGrow: 1 }} style={{paddingBottom: "15rem" }}>
      <Container
        maxWidth="xl"
      >
        <Paper
          sx={{
            position: "relative",
            mb: 4,
            height: "85vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(https://res.cloudinary.com/dymdurqej/image/upload/v1668114184/techstart/student-ts22/IMG_0520_ol19xw.jpg)`,
            filter: "grayscale(10%) brightness(85%) sepia(60%) opacity(95%)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.4)",
            }}
          />
          <Grid container spacing={2} style={{ height:"100vh", justifyContent: "center", alignContent: "center"}}>
            <Grid
              item
              md={8}
              xs={4}
            >
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <Typography
                  component="h1"
                  variant="h3"
                  color="white"
                  gutterBottom
                  fontWeight={600}
                >
                  APPLY NOW FOR THE TECHSTART DIGITAL SHAPER PROGRAM 2023
                </Typography>
                <Typography variant="h4" color="white" fontWeight={400}>
                  Deadline 06/2023
                </Typography>
                <Button
                  href="/application"
                  type="submit"
                  variant="h3"
                  sx={{ mt: 3, mb: 2, py: 1 }}
                  style={{
                    backgroundColor: "#F1005F",
                    border: "2px solid black",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    boxShadow: "0px 2px 0px #000000",
                    borderRadius: "12px",
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        {applicationStep === 1 && (<ScreeningQuestions nextStep={nextStep} />)}
        {applicationStep === 2 && (<MotivationQuestions />)}
        {applicationStep === 3 && (<Commitments />)}
      </Container>
    </Box>
  );
}
