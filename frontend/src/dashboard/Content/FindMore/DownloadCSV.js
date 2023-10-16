import React, { useState } from "react"
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import axios from 'axios'
import DownloadIcon from '@mui/icons-material/Download'
import { Box } from "@mui/material"

const handleDownloadCSV = async () => {
    try {
        const response = await axios.get('http://viscat.shop:5002/api/auth/exportCSV', { responseType: 'blob' })

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
            <Box sx={{ flexGrow: 0, alignItems: 'center', marginRight: '13px' }}>
                <IconButton
                    onClick={handleDownloadCSV}
                >
                    <DownloadIcon
                        alt="Remy Sharp"
                        sx={{
                            width: 50,
                            height: 50,
                            color: '#696969'
                        }}
                    />
                </IconButton>
            </Box>
        </>
    )
}


export default DownloadCSV