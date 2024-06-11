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
import { Alert, CircularProgress, Snackbar, ThemeProvider, createTheme } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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
    // formの状態
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // API通信の状態
    const [isProceeding, setIsProceeding] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setIsProceeding(true);

        const data = { email, password };
        // nextauthのauthorize関数を呼び出しています
        const result = await signIn('credentials', { ...data, redirect: false });

        if (result?.error) throw new Error(result.error);

        router.push('/admin/dashboard');
      } catch (error) {
        console.error('error', error);
        setError(true);
      } finally {
        setIsProceeding(false);
      }
    };

    const handleClose = () => {
      setError(false);
    };
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
                    disabled={isProceeding}
                >
                {/* 通信中はローディングUI表示＆ボタン非活性化 */}
                  {isProceeding && (
                      <CircularProgress
                          sx={{ mr: 2 }}
                          color="secondary"
                          size={20}
                      />
                    )
                  }
                    ログイン
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
        {/* エラーはスナックバーで知らせる 余力があればもう少し細かいエラー内容を */}
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: '100%' }}
          >
            通信に失敗しました。時間をおいてもう一度お試しください。
          </Alert>
        </Snackbar>
        </ThemeProvider>
      );
}

export default Login
