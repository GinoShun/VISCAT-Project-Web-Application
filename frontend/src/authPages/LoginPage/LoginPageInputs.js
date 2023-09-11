import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';
import '../authStyles.css';
import { TextField } from "@mui/material";

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
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
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </>
    );
};


export default LoginPageInputs;