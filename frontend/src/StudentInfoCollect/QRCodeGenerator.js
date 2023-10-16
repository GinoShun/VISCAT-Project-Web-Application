import React from 'react'
import QRCode from 'qrcode.react'
import { Box } from '@mui/material'

const QRCodeGenerator = ({ text }) => {
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',  // This assumes you want to center it in the entire viewport height
    }}>
      <QRCode value={text} />
    </Box>
  )
}

export default QRCodeGenerator
