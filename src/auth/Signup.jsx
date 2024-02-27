import React, { useRef } from 'react';
import { Button, Container, Input } from '@mui/joy';
import { Typography } from '@mui/material';

const Signup = () => {
    const email = useRef();
    const username = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email: email.current.value,
            username: username.current.value,
            password: password.current.value,
        }

        // make request
        console.log("data from signup: ", payload);
    }

    return (
        <Container>
            <Typography variant='h4' gutterBottom>Signup</Typography>
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
                    inputRef={username}
                    slotProps={{
                        input: { placeholder: "username", type: "text" },
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
                <Button type='submit'>signup</Button>
            </form>
        </Container>
    );
}

export default Signup