import React from 'react';
import { Typography, Button } from '@mui/material';
import '../authStyles.css';


const LoginPageHeader = ({ setType }) => {
    return (
        <>
            <Typography variant="h4">Log in</Typography>
            <Typography variant="subtitle1">Welcome to Vis-CAT</Typography>
        </>
    );
};

export default LoginPageHeader;