import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Alert, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import useLocalStorage from "../../utils/localstorage";

export default function Commitments({changeStep}) {
  const [applicationState, setApplicationState] = useLocalStorage("application_step_3", {});

  const [learningStyleThoughts, setLearningStyleThoughts] = useState(applicationState.learningStyleThoughts || "");
  const [lifestyle, setLifestyle] = useState(applicationState.lifestyle || "");
  const [personality, setPersonality] = useState(applicationState.personality || "");
  const [studyCommitment, setStudyCommitment] = useState(applicationState.studyCommitment || "");
  const [eventCommitment, setEventCommitment] = useState(applicationState.eventCommitment || "");
  const [error, setError] = useState(undefined);

  const selfLearningHours = [
    {
      value: "10-15",
      label: "10-15",
    },
    {
      value: "15-20",
      label: "15-20",
    },
    {
      value: "20-25",
      label: "20-25",
    },
    {
      value: "25-30",
      label: "25-30",
    },
    {
      value: "30+",
      label: "30+",
    },
  ];

  const attendEventsHours = [
    {
      value: "1-2",
      label: "1-2",
    },
    {
      value: "2-4",
      label: "2-4",
    },
    {
      value: "4+",
      label: "4+",
    },
  ];

  const handlePrev = (event) => {
    event.preventDefault();
    handleSave(2);
  };

  const handleNext = (event) => {
    event.preventDefault();

    const err = validate();
    setError(err);

    if (err) {
      return;
    }

    handleSave(4);
  };

  const handleSave = (step) => {
    setApplicationState({learningStyleThoughts, lifestyle, personality, studyCommitment, eventCommitment});    
    changeStep(step);
  };

  const handleLearningStyleThoughts = (e) => setLearningStyleThoughts(e.target.value);
  const handleLifestyle = (e) => setLifestyle(e.target.value);
  const handlePersonality = (e) => setPersonality(e.target.value);
  const handleStudyCommitment = (e) => setStudyCommitment(e.target.value);
  const handleEventCommitment = (e) => setEventCommitment(e.target.value);

  const validate  = () => {
    if (studyCommitment === "") {
      return "How many hours per week do you feel you could commit to attending courses and self-studying materials?";
    }

    if (eventCommitment === "") {
      return "How many hours per week do you feel you could commit to attending learning events?";
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
          Part 3
        </Typography>
        {/* First Screen */}
        <Box component="form" onSubmit="" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {error && (
              <Grid item xs={12} sm={12}>
                <Alert severity="error">{error}</Alert>
              </Grid>
            )}
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="What do you think about the learning style and environment at CODE University?"
                multiline
                rows={4}
                // defaultValue="Please let us know more about your motivation"
                style={{ width: "100%" }}
                value={learningStyleThoughts}
                onChange={handleLearningStyleThoughts}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="Please tell us what a typical week in your life looks like?"
                multiline
                rows={4}
                // defaultValue="Please let us know more about your motivation"
                style={{ width: "100%" }}
                value={lifestyle}
                onChange={handleLifestyle}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="What would your friends say best describes your personality?"
                multiline
                rows={4}
                // defaultValue="If we asked your friends, what would they say best describes your personality?"
                style={{ width: "100%" }}
                value={personality}
                onChange={handlePersonality}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                id="selfLearningHours"
                select
                required
                fullWidth
                label="Please select an option (hours)"
                value={studyCommitment}
                onChange={handleStudyCommitment}
                helperText="How many hours per week do you feel you could commit to attending courses and self-studying materials?"
              >
                {selfLearningHours.map((option) => (
                  <MenuItem key={option.value} value={option.value} selected={option.value === studyCommitment}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                id="attendEventsHours"
                select
                required
                fullWidth
                label="Please select an option (hours)"
                value={eventCommitment}
                onChange={handleEventCommitment}
                helperText="How many hours per week do you feel you could commit to attending learning events?"
              >
                {attendEventsHours.map((option) => (
                  <MenuItem key={option.value} value={option.value} selected={option.value === eventCommitment}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
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
                Review your application
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
