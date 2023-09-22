import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Badge from '@mui/material/Badge'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { Box, Button } from '@mui/material'

import QRCodeGenerator from "./FindMore/QRCodeGenerator"

export const QrCodeManagement = () => {
    const [openQRCode, setOpenQRCode] = useState(false)

    const handleQrCodeIconClick = () => {
        setOpenQRCode(true)
    }

    const handleCloseQRCode = () => {
        setOpenQRCode(false)
    }
    return <Box>
        <MenuItem>
            <IconButton
                size="large"
                color="inherit"
                onClick={handleQrCodeIconClick}
            >
                <Badge badgeContent={''} color="error">
                    <QrCode2Icon
                        sx={{
                            width: 150,
                            height: 150,
                        }}
                    />
                </Badge>
            </IconButton>
        </MenuItem>

        <Dialog open={openQRCode} onClose={handleCloseQRCode}>
            <DialogTitle>QR Code</DialogTitle>
            <DialogContent>
                <QRCodeGenerator text="Bob,12345" />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseQRCode}>Close</Button>
            </DialogActions>
        </Dialog>
    </Box>
}