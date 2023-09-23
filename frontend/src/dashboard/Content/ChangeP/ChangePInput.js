import React from 'react';

import { TextField } from "@mui/material";

const ChangePageInputs = ({ mail, setMail, oldPassword,setOldPassword, newPassword, setNewPassword }) => {
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
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
        </>
    );
};

export default ChangePageInputs;