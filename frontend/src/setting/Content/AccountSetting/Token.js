import React, { useState } from "react"
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import EditIcon from '@mui/icons-material/Edit'

export const Token = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '')

    const generateToken = () => {
        const newToken = Math.random().toString(36).substr(2)  // Example token generation logic
        localStorage.setItem('token', newToken)
        setToken(newToken)
    }

    return (
        <ListItem button onClick={generateToken}>
            <ListItemAvatar sx={{ marginRight: '60px' }}>
                <ListItemText primary="Token" />
            </ListItemAvatar>
            <ListItemText primary={token ? token : "Click to generate a token"} />
            <EditIcon sx={{ right: 0 }} />
        </ListItem>
    )
}
