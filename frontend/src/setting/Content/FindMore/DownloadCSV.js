import React, { useState } from "react"
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import axios from 'axios'
import DownloadIcon from '@mui/icons-material/Download'


const handleDownloadCSV = async () => {
    try {
        const response = await axios.get('http://34.129.48.12:5002/api/auth/exportCSV', { responseType: 'blob' })

        const blob = new Blob([response.data], { type: 'text/csv' })

        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'user.csv'
        a.click()

        window.URL.revokeObjectURL(url)
    } catch (error) {
        console.error('Error downloading data:', error)
    }
}



const DownloadCSV = () => {
    return (
        <>
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                    onClick={handleDownloadCSV}
                >
                    <Badge badgeContent={17} color="error">
                        <DownloadIcon
                            sx={{
                                width: 150,
                                height: 150,
                            }}
                        />
                    </Badge>
                </IconButton>
            </MenuItem>
        </>
    )
}

export default DownloadCSV