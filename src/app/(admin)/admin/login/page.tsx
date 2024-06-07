'use client'
import { useState } from 'react';
import http from '@/lib/axios';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    // 既存のテーマプロパティを定義する
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
  });

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        const res = await http.get('/sanctum/csrf-cookie');
        console.log(res);

        const loginResponse = await http.post('/api/login', data);
        console.log(loginResponse);
    }

    return (
        <ThemeProvider theme={theme}>
        <div className='w-screen h-screen flex justify-center items-center'>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                ログイン
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    variant='standard'
                    required
                    fullWidth
                    value={email}
                    color='secondary'
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    variant='standard'
                    required
                    fullWidth
                    color='secondary'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    color='secondary'
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    ログイン
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
        </ThemeProvider>
      );
}

export default Login
