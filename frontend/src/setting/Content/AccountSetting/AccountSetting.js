// AccountSetting.js
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
import Divider from '@mui/material/Divider'
import { NameSetting } from "./NameSettinig"
import { EmailSetting } from "./EmailSetting"
import { ResetPass } from "./ResetPass"
import { Token } from "./Token"
import ChangeP from '../ChangeP/ChangeP'

export const AccountSetting = ({ initialUsername, initialEmail }) => {
    return (
        <>
            <NameSetting initialUsername={initialUsername} />
            <Divider sx={{ marginLeft: '20px', marginRight: '20px' }} />
            <EmailSetting initialEmail={initialEmail} />
            <Divider sx={{ marginLeft: '20px', marginRight: '20px' }} />
            <ResetPass />
            <Divider sx={{ marginLeft: '20px', marginRight: '20px' }} />
            <Token />
        </>
    )
}
