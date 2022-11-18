import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Alert, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState} from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import useLocalStorage from "../../utils/localstorage";

export default function MotivationQuestions({ changeStep }) {
  const [applicationState, setApplicationState] = useLocalStorage("application_step_2", {});

  const [studyTrack, setStudyTrack] = useState(applicationState.studyTrack || "");
  const [studyReason, setStudyReason] = useState(applicationState.studyReason || "");
  const [hasIndustryExperience, setHasIndustryExperience] = useState(applicationState.hasIndustryExperience || "");
  const [industryExperience, setIndustryExperience] = useState(applicationState.industryExperience || "");
  const [goals, setGoals] = useState(applicationState.goals || "");
  const [programSupport, setProgramSupport] = useState(applicationState.programSupport || "");
  const [error, setError] = useState(undefined);

  const yesNo = [
    {
      value: "yes",
      label: "Yes",
    },
    {
      value: "no",
      label: "No",
    },
  ];

  const studyTracks = [
    {
      value: "UX/UI - Interaction Design",
      label: "UX/UI - Interaction Design",
    },
    {
      value: "AI & Data Science",
      label: "AI & Data Science",
    },
    {
      value: "Product Management",
      label: "Product Management",
    },
    {
      value: "Software Engineering",
      label: "Software Engineering",
    },
  ];

  const handlePrev = (event) => {
    event.preventDefault();
    handleSave(1);
  };

  const handleNext = (event) => {
    event.preventDefault();

    const err = validate();
    setError(err);

    if (err) {
      return;
    }

    handleSave(3);
  };

  const handleSave = (step) => {
    setApplicationState({studyTrack, studyReason, hasIndustryExperience, industryExperience, goals, programSupport});    
    changeStep(step);
  };

  const handleStudyTrack = (e) => setStudyTrack(e.target.value);
  const handleStudyReason = (e) => setStudyReason(e.target.value);
  const handleHasIndustryExperience = (e) => setHasIndustryExperience(e.target.value);
  const handleIndustryExperience = (e) => setIndustryExperience(e.target.value);
  const handleGoals = (e) => setGoals(e.target.value);
  const handleProgramSupport = (e) => setProgramSupport(e.target.value);

  const validate  = () => {
    if (studyTrack === "") {
      return "Study Track is required";
    }

    if (hasIndustryExperience === "") {
      return "Do you have experience in this industry?";
    } else if (hasIndustryExperience === "yes" && industryExperience === "") {
      return "Please describe more about your experience";
    }
  }

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
          <AssignmentIcon sx={{ fontSize: 32 }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Part 2
        </Typography>
        {/* First Screen */}
        <Box component="form" onSubmit="" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {error && (
              <Grid item xs={12} sm={12}>
                <Alert severity="error">{error}</Alert>
              </Grid>
            )}
            <Grid item xs={8} sm={8}>
              <TextField
                id="studyTrack"
                select
                required
                fullWidth
                label="Which study track are you most interested in taking?"
                value={studyTrack}
                onChange={handleStudyTrack}
              >
                {studyTracks.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="Why are you interested in this study track?"
                multiline
                rows={4}
                // defaultValue="Please let us know more about your motivation"
                style={{ width: "100%" }}
                value={studyReason}
                onChange={handleStudyReason}
              />
            </Grid>
            <Grid item xs={8} sm={8}>
              <TextField
                id="experience"
                select
                required
                fullWidth
                label="Please select"
                value={hasIndustryExperience}
                onChange={handleHasIndustryExperience}
                helperText="Do you have experience in this industry?"
              >
                {yesNo.map((option) => (
                  <MenuItem key={option.value} value={option.value} selected={option.value === hasIndustryExperience}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            {hasIndustryExperience === "yes" && (<Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="If yes, please describe more about your experience"
                multiline
                rows={4}
                style={{ width: "100%" }}
                value={industryExperience}
                onChange={handleIndustryExperience}
              />
            </Grid>)}
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="What is your goal after TECHSTART?"
                multiline
                rows={4}
                style={{ width: "100%" }}
                value={goals}
                onChange={handleGoals}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="How this program could support you to reach your goals?"
                multiline
                rows={4}
                style={{ width: "100%" }}
                value={programSupport}
                onChange={handleProgramSupport}
              />
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
                onClick={handleNext}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
