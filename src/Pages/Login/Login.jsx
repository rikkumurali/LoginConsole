import React, { useEffect, useState } from 'react'
import useStyles from './LoginStyle';
import { Box, Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useDispatch, useSelector } from "react-redux";
import { allowBackNav, closeComingSoon, loginAct, openComingSoon, resetAllStates } from '../../slice/login';
import { useNavigate } from 'react-router-dom';
import LoadingModal from '../../Components/LoadingModal';
import ComingSoonModal from '../../Components/ComingSoonModal';

const initialValues = {
    email: "",
    password: ""
}

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const { isLoading, comingSoon, isLoggedIn, backNavigator, errorMsg, role } = useSelector(store => store.login)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    useEffect(() => {
        if (isLoggedIn && role && backNavigator) {
            navigate('/home');
            dispatch(allowBackNav())
        }
        if (errorMsg) {
            setValues(initialValues)
            setTimeout(() => {
                dispatch(resetAllStates())
            }, 3000);
        }
    }, [isLoggedIn, role, errorMsg, backNavigator])

    const validate = () => {
        let temp = { ...errors };

        temp.email = (values.email ? "" : "This field is required.")
        temp.password = (values.password ? "" : "This field is required.")

        setErrors({ ...temp });

        if (Object.values(temp).every((x) => x == "")) {
            return true
        } else {
            return false
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            dispatch(loginAct(values))
        } else {
            setTimeout(() => {
                setErrors({})
            }, 3000);
        }
    }

    const handleComingSoon = () => {
        dispatch(openComingSoon())
    }

    return (
        <>
            <Box className={classes.pageBackground}>
                <Paper
                    variant="outlined"
                    elevation={6}
                    className={classes.loginParent}
                >
                    <Paper elevation={6} className={classes.loginForm}>
                        <Box>
                            <Typography variant="h5" fontWeight={700} color={'#893dff'}>
                                Login
                            </Typography>
                            <Typography variant="caption" display="block" fontWeight={600} color={'#b3b3b3'}>
                                Don't have an account yet? <span className={classes.signupText} onClick={handleComingSoon}>Sign Up</span>
                            </Typography>
                        </Box>

                        {
                            errorMsg && <Typography variant="body2" fontWeight={500} color={'#ff0000'}>{errorMsg}</Typography>
                        }

                        <Box>
                            <TextField
                                name="email"
                                label="Email Address"
                                value={values.email}
                                onChange={handleInputChange}
                                variant="outlined"
                                error={errors.email ? true : false}
                                helperText={errors.email ? errors.email : ''}
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <TextField
                                name="password"
                                label="Password"
                                value={values.password}
                                onChange={handleInputChange}
                                type="password"
                                variant="outlined"
                                error={errors.password ? true : false}
                                helperText={errors.password ? errors.password : ''}
                                fullWidth
                                gutterBottom
                            />
                            <Typography
                                variant="caption"
                                sx={{ mt: 1, textDecoration: 'underline' }}
                                display="block"
                                fontWeight={700}
                                color={'#8e6ed5'}
                                textAlign={'right'}
                            >
                                <span onClick={handleComingSoon} style={{ cursor: 'pointer' }}>Forgot Password?</span>
                            </Typography>
                        </Box>
                        <Box>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                        </Box>
                        <Box>
                            <Button
                                onClick={handleSubmit}
                                variant="contained"
                                size="large"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Box>
                        <Box>
                            <hr />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                size="large"
                                startIcon={<GoogleIcon />}
                                onClick={handleComingSoon}
                            >
                                Google
                            </Button>
                            <Button
                                variant="outlined"
                                color="info"
                                size="large"
                                startIcon={<FacebookIcon />}
                                onClick={handleComingSoon}
                            >
                                Facebook
                            </Button>
                        </Box>
                    </Paper>

                    <Box className={classes.bannerImageParent}>
                        <Box className={classes.bannerImage} />
                    </Box>
                </Paper>
            </Box>
            {
                isLoading ? <LoadingModal open={isLoading} modalText="Logging in..." /> : ''
            }
            {
                comingSoon ? <ComingSoonModal open={comingSoon} modalText="This feature is coming soon" handleClose={() => dispatch(closeComingSoon())} /> : ''
            }
        </>
    )
}

export default Login