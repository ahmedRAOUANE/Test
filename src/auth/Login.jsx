import React, { useRef } from 'react'
import { Button, Container, Input } from '@mui/joy';
import { Typography } from '@mui/material';

const Login = () => {
    const email = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email: email.current.value,
            password: password.current.value,
        }

        // make request
        console.log("data from login: ", payload);
    }

    return (
        <Container>
            <Typography variant='h4' gutterBottom>Login</Typography>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <Input
                    inputRef={email}
                    slotProps={{
                        input: { placeholder: "email", type: "email" },
                    }}
                    sx={{
                        "--Input-minHeight": "56px",
                        "--Input-radius": "6px",
                        marginBottom: "10px",
                    }}
                />
                <Input
                    inputRef={password}
                    slotProps={{
                        input: { placeholder: "password", type: "text" },
                    }}
                    sx={{
                        "--Input-minHeight": "56px",
                        "--Input-radius": "6px",
                        marginBottom: "10px",
                    }}
                />
                <Button type='submit'>login</Button>
            </form>
        </Container>
    );
}

export default Login