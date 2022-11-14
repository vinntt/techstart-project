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
import useLocalStorage from "../../utils/localstorage";

export default function Commitments() {
    const [applicationStep] = useLocalStorage("application_step", 0);

    useEffect(() => {
      console.log(applicationStep)
    }, [applicationStep])

    const [pronoun, setPronoun] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [secondNationality, setSecondNationality] = useState('');

    const navigate = useNavigate();

    const selfLearningHours = [
        {
            value: '10-15',
            label: '10-15',
        },
        {
            value: '15-20',
            label: '15-20',
        },
        {
            value: '20-25',
            label: '20-25',
        },
        {
            value: '25-30',
            label: '25-30',
        },
        {
            value: '30+',
            label: '30+',
        }
    ];

    const attendEventsHours = [
        {
            value: '1-2',
            label: '1-2',
        },
        {
            value: '2-4',
            label: '2-4',
        },
        {
            value: '4+',
            label: '4+',
        }
    ]

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
          Part 3
        </Typography>
        {/* First Screen */}
        <Box component="form" onSubmit='' sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="What do you think about the learning style and environment at CODE University?"
                multiline
                rows={4}
                // defaultValue="Please let us know more about your motivation"
                style={{ width: "100%" }}
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
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                id="selfLearningHours"
                select
                required
                fullWidth
                label="Please select an option (hours)"
                value={selfLearningHours}
                // onChange={handleSelfLearningHours}
                helperText="How many hours per week do you feel you could commit to attending courses and self-studying materials?"
              >
                {selfLearningHours.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
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
                value={attendEventsHours}
                // onChange={handleAttendEventsHours}
                helperText="How many hours per week do you feel you could commit to attending learning events?"
              >
                {attendEventsHours.map((option) => (
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
          >
            Submit
          </Button>
          {errorMessage && <h5>{errorMessage}</h5>}
        </Box>
      </Box>
    </Container>
  );
}
