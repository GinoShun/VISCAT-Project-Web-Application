import React, { useState } from "react"
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

export const EmailSetting = ({ initialEmail }) => {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState(initialEmail)

    return (
        <>
            <ListItem button onClick={() => setOpen(true)}>
                <ListItemAvatar sx={{ marginRight: '60px' }}>
                    <ListItemText primary="Email" />
                </ListItemAvatar>
                <ListItemText primary={email} />
                <EditIcon sx={{ right: 0 }} />
            </ListItem>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Edit Email</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter your new email.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        setOpen(false)
                        let userInfo = localStorage.getItem('user')
                        if (userInfo) {
                            userInfo = JSON.parse(userInfo)
                            userInfo.mail = email  // updating the email property
                            localStorage.setItem('user', JSON.stringify(userInfo))
                        } else {
                            const updatedUserInfo = { mail: email }
                            localStorage.setItem('user', JSON.stringify(updatedUserInfo))
                        }

                    }} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
