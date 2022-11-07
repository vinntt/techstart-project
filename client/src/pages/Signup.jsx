import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const navigate = useNavigate();

    const roles = [
        {
            value: 'Admin',
            label: 'Admin',
        },
        {
            value: 'Viewer',
            label: 'Viewer',
        },
        {
            value: 'Student',
            label: 'Student',
        }
    ];


    const handleSubmit = (event) => {
        event.preventDefault();

        const requestBody = { email, password, name, role }

    };

    const handleEmail = e => setEmail(e.target.value)
    const handleName = e => setName(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleRole = e => setRole(e.target.value)
    const [errorMessage, setErrorMessage] = useState(undefined);

    return (
        <Container component="main" maxWidth="xs" style={{ padding: "1rem 0 4rem 0" }}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 7,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 50, height: 50 }}>
                    <LockOutlinedIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="role"
                                select
                                required
                                fullWidth
                                label="Role"
                                value={role}
                                onChange={handleRole}
                            helperText="Please select your role"
                            >
                                {roles.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, py: 2 }}>
                        Sign Up
                    </Button>

                    {errorMessage && <h5>{errorMessage}</h5>}

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login" variant="body2">
                                Already have an account? Log in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;