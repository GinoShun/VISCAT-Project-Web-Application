import React from 'react';
import { Typography, Button } from '@mui/material';
import '../authStyles.css';

const LoginPageHeader = ({ setType }) => {
    return (
        <div className="App">
            <Typography variant="h4" className="login-header">Log in</Typography>
            <Typography variant="subtitle1">Welcome to Vis-CAT</Typography>
        </div>
    );
};

export default LoginPageHeader;