import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const RedirectText = styled("span")({
    color:"#ffd6ff",
    fontWeight: 500,
    cursor: "pointer",
})

const RedirectInfo = ({
    text,
    redirectText,
    additionalStyles,
    redirectHandler,
}) => {
    return <Typography
    sx={{ color: "#e7c6ff"}}
    style={additionalStyles ? additionalStyles : {}}
    variant='subtitle2'
    >
        {text}
        <RedirectText onClick={redirectHandler}>
            {redirectText}
        </RedirectText>
    </Typography>
};

export default RedirectInfo;