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
import moment from "moment";
import useLocalStorage from "../../utils/localstorage";

export default function ScreeningQuestions({ changeStep }) {
  const [applicationState, setApplicationState] = useLocalStorage("application_step_1", {});

  const [pronoun, setPronoun] = useState(applicationState.pronoun || "");
  const [name, setName] = useState(applicationState.name || "");
  const [dateOfBirth, setDateOfBirth] = useState(applicationState.dateOfBirth || "");
  const [email, setEmail] = useState(applicationState.email || "");
  const [nationality, setNationality] = useState(applicationState.nationality || "");
  const [secondNationality, setSecondNationality] = useState(applicationState.secondNationality || "");
  const [hasWorkPermit, setHasWorkPermit] = useState(applicationState.hasWorkPermit || "");
  const [isBerliner, setIsBerliner] = useState(applicationState.isBerliner || "");
  const [canRelocate, setCanRelocate] = useState(applicationState.canRelocate || "");
  const [error, setError] = useState(undefined);

  const yesNo = [
    {
      label: "Yes",
      value: "yes",
    },
    {
      label: "No",
      value: "no",
    },
  ];

  const pronouns = [
    {
      value: "She/Her",
      label: "She/Her",
    },
    {
      value: "He/Him",
      label: "He/Him",
    },
    {
      value: "They/Them",
      label: "They/Them",
    },
    {
      value: "Discreet",
      label: "Discreet",
    },
  ];

  const handleNext = (event) => {
    event.preventDefault();

    const err = validate();
    setError(err);
    
    if (err) {
      return
    }

    setApplicationState({pronoun, name, dateOfBirth, email, nationality, secondNationality, hasWorkPermit, isBerliner, canRelocate});
    changeStep(2);
  };

  const handlePronoun = (e) => setPronoun(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleDateOfBirth = (e) => setDateOfBirth(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleNationality = (e) => setNationality(e.target.value);
  const handleSecondNationality = (e) => setSecondNationality(e.target.value);
  const handleHasWorkPermit = (e) => setHasWorkPermit(e.target.value);
  const handleIsBerliner = (e) => setIsBerliner(e.target.value);
  const handleCanRelocate = (e) => setCanRelocate(e.target.value);

  const validate = () => {
    // console.log(pronoun, name, dateOfBirth, email, nationality, secondNationality, hasWorkPermit, isBerliner, canRelocate);

    if (pronoun === "") {
      return "Pronouns is required";
    }

    if (name === "") {
      return "Name is required";
    }

    if (dateOfBirth === "") {
      return "Date of Birth is required";
    }
    else if (!moment(dateOfBirth, 'YYYY-MM-DD',true).isValid()) {
      return "Invalid Date of Birth";
    }

    if (nationality === "") {
      return "Nationality is required";
    }

    if (hasWorkPermit === "") {
      return "Do you have work permit in Germany?"
    }

    if (isBerliner === "") {
      return "Are you located in Berlin?"
    }

    if (canRelocate === "") {
      return "Are you willing to relocate to Berlin?"
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
          Part 1
        </Typography>
        
        <Box component="form" onSubmit="" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {error && (
            <Grid item xs={12} sm={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
            )}
            <Grid item xs={6} sm={4}>
              <TextField
                id="pronouns"
                select
                required
                fullWidth
                label="Please select"
                value={pronoun}
                onChange={handlePronoun}
                helperText="Preferred pronouns"
              >
                {pronouns.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    selected={option.value === pronoun}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={8}>
              <TextField
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                type="text"
                value={name}
                onChange={handleName}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                required
                fullWidth
                name="Date of birth"
                // label="Date of birth"
                type="date"
                id="dob"
                value={dateOfBirth}
                onChange={handleDateOfBirth}
                helperText="Date of birth"
              />
            </Grid>
            <Grid item xs={6} sm={8}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="text"
                value={email}
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                required
                fullWidth
                id="nationality"
                label="Nationality"
                name="nationality"
                type="text"
                value={nationality}
                onChange={handleNationality}
                helperText="Country of your citizenship"
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                id="second-nationality"
                label="Second Nationality"
                name="second-nationality"
                type="text"
                value={secondNationality}
                onChange={handleSecondNationality}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                id="permit"
                select
                required
                fullWidth
                label="Please select"
                value={hasWorkPermit}
                onChange={handleHasWorkPermit}
                helperText="Do you have work permit in Germany?"
              >
                {yesNo.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    selected={option.value === hasWorkPermit}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                id="located"
                select
                required
                fullWidth
                label="Please select"
                value={isBerliner}
                onChange={handleIsBerliner}
                helperText="Are you located in Berlin?"
              >
                {yesNo.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    selected={option.value === isBerliner}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                id="located"
                select
                required
                fullWidth
                label="Please select"
                value={canRelocate}
                onChange={handleCanRelocate}
                helperText="Are you willing to relocate to Berlin?"
              >
                {yesNo.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    selected={option.value === canRelocate}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 2 }}
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
