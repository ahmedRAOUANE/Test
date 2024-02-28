import React from 'react';
import { Button, Container, Input, Stack } from '@mui/joy';
import { Alert, Typography } from "@mui/material";
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setError, setUserCredencials } from '../features/authSlice';
import { setUser } from '../features/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const userCredencials = useSelector(state => state.authSlice.userCredencials);
    const error = useSelector(state => state.authSlice.error);

    const handleCredencials = (e) => {
        dispatch(setUserCredencials({ ...userCredencials, [e.target.id]: e.target.value }));
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser({ uid: user.uid, email: user.email }))
        } else {
            dispatch(setUser(null))
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setError(''));
        console.log("data from login: ", userCredencials);

        // make request
        signInWithEmailAndPassword(auth, userCredencials.email, userCredencials.password)
            .catch(err => {
                dispatch(setError(err.message));
            })
    }

    const resetPasswordHandler = () => {
        const email = prompt("enter your email");

        sendPasswordResetEmail(auth, email);
        alert("email sent!, chec your inbox for password reset instructions.")
    }

    return (
        <Container>
            <Typography variant='h4' gutterBottom>Login</Typography>
            <form onSubmit={handleSubmit}>
                <Stack mb={2}>
                    {error && <Alert severity="error">{error}</Alert>}
                </Stack>
                <Stack spacing={2}>
                    <Input id='email' autoComplete='off' onChange={(e) => handleCredencials(e)} type={'email'} placeholder="email" required />
                    <Input id='password' autoComplete='off' onChange={(e) => handleCredencials(e)} placeholder="password" required />
                    <Button type="submit">Submit</Button>
                    <Button variant='outlined' onClick={resetPasswordHandler}>fogot password?</Button>
                </Stack>
            </form>
        </Container>
    );
}

export default Login