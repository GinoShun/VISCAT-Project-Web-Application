import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
const Filter = () => {


    return (
        <>
            <Box sx={{ width: '100%', marginBottom: '3', marginLeft: 3, marginTop: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                    Filter
                </Typography>
            </Box>
            <Box sx={{ width: '100%', marginBottom: '3', marginLeft: 3, marginTop: 2 }}>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker sx={{ left: 0 }} />
                </LocalizationProvider>
            </Box>

        </>
    )
}

export default Filter
