import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import background from '../../assets/login-background.jpg'
import { useEffect } from 'react'
import { useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const defaultTheme = createTheme()

const Login = () => {
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['user'])
    const baseUrl = `https://recipe-organizer-api.azurewebsites.net/api/UserAccounts/CheckLoginEmail`

    const handleCredentialResponse = async (response) => {
        // console.log('Encoded JWT ID token: ' + response.credential)
        var decoded = jwt_decode(response.credential)
        var email = decoded.email
        var ggToken = decoded.sub
        var image = decoded.picture
        var fullname = decoded.name
        // console.log(decoded)
        document.getElementById('buttonDiv').hidden = true

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, ggToken, image, fullname }),
            })
            console.log(response)
            if (response.ok) {
                const responseData = await response.json()
                setCookie('user', JSON.stringify(decoded))
                setCookie('userInfor', { role: responseData.role, token: responseData.token })
                navigate('/')
                console.log('login successful', responseData.role)
            } else {
                console.log('login failed')
            }
        } catch (error) {
            console.error('Error calling API:', error)
        }
    }

    useEffect(() => {
        /* global google*/
        window.onload = function () {
            google.accounts.id.initialize({
                client_id:
                    '299260202858-s0i6pho8rn8cikahgp5vpc5gp7kb9ma7.apps.googleusercontent.com',
                callback: handleCredentialResponse,
            })
            google.accounts.id.renderButton(
                document.getElementById('buttonDiv'),
                { theme: 'outline', size: 'large' } // customization attributes
            )
            google.accounts.id.prompt() // also display the One Tap dialog
        }
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // })
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <div id="buttonDiv"></div>

                            {/* <Button
                                id="googleSignInButton"  // This ID is used to target the button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign in with Google
                            </Button> */}

                            <Grid container>
                                <Grid item xs>
                                    <Link to="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/register" variant="body2">
                                        Don't have an account? Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Login
