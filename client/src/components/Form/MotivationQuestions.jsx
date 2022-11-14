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



export default function MotivationQuestions() {
    const [pronoun, setPronoun] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [secondNationality, setSecondNationality] = useState('');

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

    const studyTracks = [
        {
            value: 'UX/UI - Interaction Design',
            label: 'UX/UI - Interaction Design',
        },
        {
            value: 'AI & Data Science',
            label: 'AI & Data Science',
        },
        {
            value: 'Product Management',
            label: 'Product Management',
        },
        {
            value: 'Software Engineering',
            label: 'Software Engineering',
        }
    ];


    const handleSubmit = (event) => {
        event.preventDefault();

        // const requestBody = { email, password, name, role }

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
    
    const handlePronoun = e => setPronoun(e.target.value)
    const handleName = e => setName(e.target.value)
    const handleDateOfBirth = e => setDateOfBirth(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleNationality = e => setNationality(e.target.value)
    const handleSecondNationality = e => setSecondNationality(e.target.value)
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
          Part 2
        </Typography>
        {/* First Screen */}
        <Box component="form" onSubmit='' sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Grid item xs={8} sm={8}>
              <TextField
                id="studyTracks"
                select
                required
                fullWidth
                label="Which study track are you most interested in taking?"
                value={studyTracks}
                // onChange={handleStudyTracks}
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
              />
            </Grid>
            <Grid item xs={8} sm={8}>
              <TextField
                id="experience"
                select
                required
                fullWidth
                label="Please select"
                value={yesNo}
                onChange=""
                helperText="Do you have experience in this industry "
              >
                {yesNo.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="If yes, please describe more about your experience"
                multiline
                rows={4}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="What is your goal after TECHSTART?"
                multiline
                rows={4}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="How this program could support you to reach your goals?"
                multiline
                rows={4}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 2 }}
          >
            Next
          </Button>
          {errorMessage && <h5>{errorMessage}</h5>}
        </Box>
      </Box>
    </Container>
  );
}
