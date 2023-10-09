import React, { useState } from 'react'
import axios from 'axios'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import EditIcon from '@mui/icons-material/Edit'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const ResetPass = () => {
    const [open, setOpen] = useState(false)
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleChangePassword = async () => {
        try {
            await axios.post('/api/auth/change-password', {
                currentPassword,
                newPassword,
            })
            alert('Password changed successfully')
            setOpen(false)
        } catch (error) {
            alert('Failed to change password')
        }
    }

    return (
        <>
            <ListItem alignItems="center" button onClick={() => setOpen(true)}>
                <ListItemAvatar sx={{ marginRight: '45px' }}>
                    <ListItemText primary="Password" />
                </ListItemAvatar>
                <ListItemText primary="Click to change password" /> {/* Assuming you want to display a placeholder for password */}
                <EditIcon sx={{ right: 0 }} />
            </ListItem>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Edit Password</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter your current password and new password.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Current Password"
                        type="password"
                        fullWidth
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="New Password"
                        type="password"
                        fullWidth
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleChangePassword} color="primary">
                        Change Password
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

