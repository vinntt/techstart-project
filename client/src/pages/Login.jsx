import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import service from "../api/service";
import { AuthContext } from "../context/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { isLoggedIn, storeToken, verifyStoredToken } = useContext(AuthContext);



  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

        const requestBody = { email, password };

        setLoading(true);

        service
            .post("/auth/login", requestBody)
            .then((response) => {
                const token = response.data.authToken;

                storeToken(token);
                // verifyStoredToken return a promise now we can chain a .then and wait for the response
                verifyStoredToken().then(() => {
                    navigate("/");
                });
            })
            .catch((err) => {
                console.log(err);
                const errorDescription = err.response.data.message;
                setErrorMessage(errorDescription);
            })
            .finally(() => setLoading(false));
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  if (!loading && isLoggedIn) {
    navigate("/");
}

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ padding: "1rem 0 5rem 0" }}
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main", width: 50, height: 50 }}>
          <LockOutlinedIcon sx={{ fontSize: 32 }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={handlePassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 2 }}
            style={{
                  backgroundColor: "#F1005F",
                  border: "2px solid black",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  boxShadow: "0px 2px 0px #000000",
                  borderRadius: "12px",
                }}
          > Login</Button>

          {errorMessage && <h5>{errorMessage}</h5>}

          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
