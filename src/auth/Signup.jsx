import React from 'react';
import { Button, Container, Input, Stack } from '@mui/joy';
import { Alert, Typography } from '@mui/material';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch, useSelector } from 'react-redux';
import { setError, setUserCredencials } from '../features/authSlice';
import { setUser } from '../features/userSlice';

const Signup = () => {
    const dispatch = useDispatch();
    const userCredencials = useSelector(state => state.authSlice.userCredencials);
    const error = useSelector(state => state.authSlice.error);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser({ uid: user.uid, email: user.email }));
        } else {
            dispatch(setUser(null))
        }
    })

    const handleCredencials = (e) => {
        dispatch(setUserCredencials({ ...userCredencials, [e.target.id]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setError(''));

        // make request
        createUserWithEmailAndPassword(auth, userCredencials.email, userCredencials.password)
            .catch(err => {
                console.log("ERROR message: ", err.message);
                dispatch(setError(err.message));
            })
    }

    return (
        <Container>
            <Typography variant='h4' gutterBottom>Signup</Typography>

            <form onSubmit={handleSubmit}>
                <Stack mb={2}>
                    {error && <Alert severity="error">{error}</Alert>}
                </Stack>
                <Stack spacing={2}>
                    <Input id='email' autoComplete='off' onChange={(e) => handleCredencials(e)} type={'email'} placeholder="email" required />
                    <Input id='username' autoComplete='off' onChange={(e) => handleCredencials(e)} type={'username'} placeholder="email" required />
                    <Input id='password' autoComplete='off' onChange={(e) => handleCredencials(e)} type={'password'} placeholder="password" required />
                    <Input id='confirmPassword' autoComplete='off' onChange={(e) => handleCredencials(e)} type={'password'} placeholder="confirm password" required />
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </Container>
    );
}

export default Signup