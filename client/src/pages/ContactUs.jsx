import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = { email, message, name };
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);
  const [errorMessage, setErrorMessage] = useState(undefined);

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ padding: "1rem 0 4rem 0" }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 7,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "black",
            color: "white",
            border: "3px solid #FFFFFF",
            width: 90,
            height: 90,
          }}
        >
          <EmailIcon fontSize="large" />
        </Avatar>
        <Typography variant="h4" style={{ paddingTop: "4rem" }}>
          CONTACT US
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                value={email}
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                value={message}
                onChange={handleMessage}
                rows={10}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Button
            href="/application"
            type="submit"
            variant="button"
            sx={{ mt: 3, mb: 2, py: 1 }}
            style={{
              backgroundColor: "#F1005F",
              border: "2px solid black",
              color: "#FFFFFF",
              fontWeight: "bold",
              boxShadow: "0px 2px 0px #000000",
              borderRadius: "12px",
            }}
            onClick=""
          >
            Submit
          </Button>
          {errorMessage && <h5>{errorMessage}</h5>}
        </Box>
      </Box>
    </Container>
  );
}
