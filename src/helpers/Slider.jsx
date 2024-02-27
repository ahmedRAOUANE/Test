import React from "react";
import { Box } from "@mui/material";
const Slider = ({ children, fontSize, transition, visible }) => {
    return (
        <Box sx={{ fontSize, transition, display: visible ? "block" : "none" }}>
            {children}
        </Box>
    );
};

export default Slider;