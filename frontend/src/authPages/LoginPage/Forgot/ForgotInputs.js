import React from 'react';
import { TextField } from "@mui/material";

const ForgotInputs = ({ mail, setMail}) => {
    return (
        <>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
            />
        </>
    );
};


export default ForgotInputs;