import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import useLocalStorage from "../../utils/localstorage";
import moment from "moment";
import service from "../../api/service";

export default function ReviewApplication({changeStep}) {
  const [applicationStep1, setApplicationStep1] = useLocalStorage("application_step_1", {});
  const [applicationStep2, setApplicationStep2] = useLocalStorage("application_step_2", {});
  const [applicationStep3, setApplicationStep3] = useLocalStorage("application_step_3", {});
  const [,setApplicationSent] = useLocalStorage("application_sent", false);

  const [error, setError] = useState(undefined);

  const handlePrev = (event) => {
    event.preventDefault();
    changeStep(3);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const application = {
      pronoun: applicationStep1.pronoun,
      name: applicationStep1.name,
      dateOfBirth: applicationStep1.dateOfBirth,
      email: applicationStep1.email,
      nationality: applicationStep1.nationality,
      secondNationality: applicationStep1.secondNationality,
      applicationDetails: {
        workPermit: applicationStep1.hasWorkPermit,
        locatedInBerlin: applicationStep1.isBerliner,
        relocateToBerlin: applicationStep1.canRelocate,
        studyTrack: applicationStep2.studyTrack,
        reasonToChooseStudyTrack: applicationStep2.studyReason,
        industryExperience: applicationStep2.hasIndustryExperience === "yes" ? applicationStep2.industryExperience : '',
        goals: applicationStep2.goals,
        howToSupport: applicationStep2.programSupport,
        thinkAboutCODE: applicationStep3.learningStyleThoughts,
        typicalWeekActivities: applicationStep3.lifestyle,
        personalityDescribe: applicationStep3.personality,
        timeToAttendCourse: applicationStep3.studyCommitment,
        timeToAttendEvent: applicationStep3.eventCommitment,
      },
    };

    service
      .post(`/application`, application)
      .then(response => {
        setApplicationStep1({});
        setApplicationStep2({});
        setApplicationStep3({});
        setApplicationSent(true);
        changeStep(1);
      })
      .catch(err => {
          const {errorMessage} = err.response.data
          setError(errorMessage)
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 7,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main", width: 50, height: 50 }}>
          <FactCheckIcon sx={{ fontSize: 32 }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Review Your Application
        </Typography>
        {/* First Screen */}
        <Box component="form" onSubmit="" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {error && (
              <Grid item xs={12} sm={12}>
                <Alert severity="error">{error}</Alert>
              </Grid>
            )}
            <Grid item xs={4} sm={4}>
              <Typography align="left" fontWeight="bold">Pronouns</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography align="left">{applicationStep1.pronoun}</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography align="left" fontWeight="bold">Name</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography align="left">{applicationStep1.name}</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography align="left" fontWeight="bold">Date of Birth</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography align="left">{moment(applicationStep1.dateOfBirth, 'YYYY-MM-DD').format("DD.MM.YYYY")}</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography align="left" fontWeight="bold">Name</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography align="left">{applicationStep1.name}</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography align="left" fontWeight="bold">E-mail</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography align="left">{applicationStep1.email}</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography align="left" fontWeight="bold">Nationality</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography align="left">{applicationStep1.nationality}</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography align="left" fontWeight="bold">Second Nationality</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography align="left">{applicationStep1.secondNationality}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left" fontWeight="bold">Which study track are you most interested in taking?</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left">{applicationStep2.studyTrack}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left" fontWeight="bold">Why are you interested in this study track?</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left">{applicationStep2.studyReason}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              {(applicationStep2.hasIndustryExperience === "yes" && (
                <Typography align="left" fontWeight="bold">Your experience in this industry?</Typography>
              )) || (
              <Typography align="left" fontWeight="bold">Do you have experience in this industry?</Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={12}>
              {(applicationStep2.hasIndustryExperience === "yes" && (
                <Typography align="left">{applicationStep2.industryExperience}</Typography>
              )) || (
              <Typography align="left">No</Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left" fontWeight="bold">What is your goal after TECHSTART?</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              {(applicationStep2.goals !== "" && (
                <Typography align="left">{applicationStep2.goals}</Typography>
              )) || (<Typography align="left">n/a</Typography>)}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left" fontWeight="bold">How this program could support you to reach your goals?</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              {(applicationStep2.programSupport !== "" && (
                <Typography align="left">{applicationStep2.programSupport}</Typography>
              )) || (<Typography align="left">n/a</Typography>)}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left" fontWeight="bold">What do you think about the learning style and environment at CODE University?</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              {(applicationStep3.learningStyleThoughts !== "" && (
                <Typography align="left">{applicationStep3.learningStyleThoughts}</Typography>
              )) || (<Typography align="left">n/a</Typography>)}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left" fontWeight="bold">Please tell us what a typical week in your life looks like?</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              {(applicationStep3.lifestyle !== "" && (
                <Typography align="left">{applicationStep3.lifestyle}</Typography>
              )) || (<Typography align="left">n/a</Typography>)}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left" fontWeight="bold">What would your friends say best describes your personality?</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              {(applicationStep3.personality !== "" && (
                <Typography align="left">{applicationStep3.personality}</Typography>
              )) || (<Typography align="left">n/a</Typography>)}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left" fontWeight="bold">How many hours per week do you feel you could commit to attending courses and self-studying materials?</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left">{applicationStep3.studyCommitment}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left" fontWeight="bold">How many hours per week do you feel you could commit to attending learning events?</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography align="left">{applicationStep3.eventCommitment}</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={12}
            spacing={2}
            justifyContent="space-between"
          >
            <Grid item xs={6} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, py: 2 }}
                onClick={handlePrev}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 2 }}
                onClick={handleSubmit}
                color="success"
              >
                Submit your application
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
