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
import ChangeP from '../ChangeP/ChangeP'
import { useNavigate } from 'react-router-dom'

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

    const navigate = useNavigate()

    const handleSettingsClick = () => {
        navigate('/changeP')
    }
    return (
        <>
            <ListItem alignItems="center" button onClick={() => handleSettingsClick()}>
                <ListItemAvatar sx={{ marginRight: '45px' }}>
                    <ListItemText primary="Password" />
                </ListItemAvatar>
                <ListItemText primary="Click to change password" /> {/* Assuming you want to display a placeholder for password */}
                <EditIcon sx={{ right: 0 }} />
            </ListItem>
        </>
    )
}

