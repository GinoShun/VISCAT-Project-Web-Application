import * as React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TableLogo from '@mui/icons-material/BackupTable'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import QrCodeIcon from '@mui/icons-material/QrCode'
import DownloadIcon from '@mui/icons-material/Download'

export default function FunctionSelect ({ onContentChange }) {
    const [selectedButton, setSelectedButton] = React.useState('one')

    const buttonStyle = (key) => ({
        textTransform: 'none',
        fontWeight: 'bold',
        width: '100%',
        height: '40px',
        textAlign: 'left',
        justifyContent: 'flex-start',
        backgroundColor: key === selectedButton ? '#c7c7c7' : 'transparent',  // 设置颜色
        color: 'black'
    })
    const handleContentChange = (content, key) => {
        onContentChange(content)
        setSelectedButton(key)
    }

    return (
        <>
            <Box sx={{ width: '100%', marginBottom: '3', marginLeft: 3, marginTop: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                    Settings
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginBottom: '10px',
                    marginTop: '10px',
                    width: '90%',
                }}
            >
                <Button key="one" style={buttonStyle('one')} onClick={() => handleContentChange('manageAccounts', 'one')}>
                    <AccountCircleIcon style={{ marginRight: '8px' }} />
                    Manage Accounts
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginBottom: '10px',
                    width: '90%',
                }}
            >
                <Button key="two" style={buttonStyle('two')} onClick={() => handleContentChange('download', 'two')}>
                    <DownloadIcon style={{ marginRight: '8px' }} />
                    Download
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginBottom: '10px',
                    width: '90%',
                }}
            >
                <Button key="three" style={buttonStyle('three')} onClick={() => handleContentChange('qrCodeManagement', 'three')}>
                    <QrCodeIcon style={{ marginRight: '8px' }} />
                    QrCode management
                </Button>
            </Box>
            <Box sx={{ width: '100%', marginBottom: '10px' }}>
                <Divider sx={{ borderTopWidth: '1px', marginLeft: 3, marginRight: 3 }} />
            </Box>
        </>
    )
}
