import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Badge,
  ImageList,
  ImageListItem,
  MenuItem,
  styled,
  TextareaAutosize,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import BackspaceIcon from "@mui/icons-material/Backspace";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useReducer } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useLocalStorage from "../../utils/localstorage";

export default function ScreeningQuestions({nextStep}) {
  const [applicationStep, setApplicationStep] = useLocalStorage("application_step", 0);

  const [pronoun, setPronoun] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [secondNationality, setSecondNationality] = useState("");

  const navigate = useNavigate();

  const yesNo = [
    {
      value: "yes",
      label: "Yes",
    },
    {
      value: "no",
      label: "No",
    }
  ]

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
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("step 1 finished");
    // setApplicationStep(2);
    nextStep(2);

    // const requestBody = { email, password, name, role };

    // service.post('/auth/signup', requestBody)
    //     .then(response => {
    //         // redirect to login
    //         navigate('/login')
    //     })
    //     .catch(err => {
    //         const errorDescription = err.response.data.message
    //         setErrorMessage(errorDescription)
    //     });

    // setName('');
    // setEmail('');
    // setPassword('');
    // setRole('');
  };

  const handlePronoun = (e) => setPronoun(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleDateOfBirth = (e) => setDateOfBirth(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleNationality = (e) => setNationality(e.target.value);
  const handleSecondNationality = (e) => setSecondNationality(e.target.value);
  const [errorMessage, setErrorMessage] = useState(undefined);

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
          <LockOutlinedIcon sx={{ fontSize: 32 }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Part 1
        </Typography>
        {/* First Screen */}
        <Box component="form" onSubmit="" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
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
                  <MenuItem key={option.value} value={option.value}>
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
                // value={password}
                // onChange={handlePassword}
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
                value={yesNo}
                onChange=""
                helperText="Do you have work permit in Germany? "
              >
                {yesNo.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
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
                value={yesNo}
                onChange=""
                helperText="Are you located in Berlin? "
              >
                {yesNo.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
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
                value={yesNo}
                onChange=""
                helperText="Are you willing to relocate to Berlin? "
              >
                {yesNo.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
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
            onClick={handleSubmit}
          >
            Next
          </Button>
          {errorMessage && <h5>{errorMessage}</h5>}
        </Box>
      </Box>
    </Container>
  );
}
