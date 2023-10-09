import * as React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TableLogo from '@mui/icons-material/BackupTable'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

export default function FunctionSelect ({ onContentChange }) {
    const [selectedButton, setSelectedButton] = React.useState('one')

    const buttonStyle = (key) => ({
        textTransform: 'none',
        fontWeight: 'bold',
        width: '100%',
        height: '40px',
        textAlign: 'left',
        justifyContent: 'flex-start',
        backgroundColor: key === selectedButton ? '#c7c7c7' : 'transparent',
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
                    Function select
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
                <Button key="one" style={buttonStyle('one')} onClick={() => handleContentChange('rawData', 'one')}>
                    <TableLogo style={{ marginRight: '8px' }} />
                    Raw data
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
                <Button key="two" style={buttonStyle('two')} onClick={() => handleContentChange('dataVisualization', 'two')}>
                    <EqualizerIcon style={{ marginRight: '8px' }} />
                    Data Visualization
                </Button>
            </Box>
            <Box sx={{ width: '100%', marginBottom: '10px' }}>
                <Divider sx={{ borderTopWidth: '1px', marginLeft: 3, marginRight: 3 }} />
            </Box>
        </>
    )
}
