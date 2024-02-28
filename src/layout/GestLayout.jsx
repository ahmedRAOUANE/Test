import React, { useState } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Login from '../auth/Login';
import Signup from '../auth/Signup';

const GestLayout = () => {
    const [currentPage, setCurrentPage] = useState('login');

    const pageHandler = (page) => {
        setCurrentPage(page);
    };

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" align="left" gutterBottom>
                            Welcome to My App
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => pageHandler("login")}
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => pageHandler("Signup")}
                        >
                            Signup
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    {currentPage === "login" ? (<Login />) : (<Signup />)}
                </Grid>
            </Grid>
        </Container>
    )
}

export default GestLayout