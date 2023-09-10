import React from 'react'
import logo from './image/VisCatLogo.png'
import Button from '@mui/material/Button'
import { Avatar } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { lime, } from '@mui/material/colors'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const theme = createTheme({
    palette: {
        primary: lime,
    },
})

export function DashboardHeader ({ changeLayOut }) {
    const styles = {
        headerstyle: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        headerRight: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 0.7,
            marginLeft: '10px',
            backgroundColor: '#c0d6df',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        },
        headerLeft: {
            display: 'flex',
            alignItems: 'center',
            flex: 0.3,
            backgroundColor: '#c0d6df',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            paddingRight: '10px',
            marginRight: '10px'
        },
        title: {
            fontSize: '40px',
            fontWeight: 'bold',
            marginLeft: '20px'
        },
        catIcon: {
            marginLeft: '20px',
            width: '84px',
            height: '94px'
        },
        headerRightRight: {
            display: 'flex',
            alignItems: 'center'
        },
        pageSelect: {
            alignItems: 'center'
        },
        pageOption: {
            marginLeft: '30px',
            padding: '7px',
            fontSize: '25px',
            fontWeight: 'bold',
            cursor: 'pointer',
            backgroundColor: '#b2cad3',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        },
        circle: {
            marginRight: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
        },
        searchBox: {
            display: 'flex',
            alignItems: 'center',
            borderRadius: '4px',
            backgroundColor: '#ffffff',
            marginRight: '20px'
        },
        searchIcon: {
            marginRight: '10px'
        },
        searchInput: {
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '5px 10px',
            width: '200px',
            fontSize: '18px',
            height: '30px'
        }

    }
    return (
        <div style={styles.headerstyle}>
            <div style={styles.headerLeft}>
                <img src={logo} alt="Cat Icon" style={styles.catIcon} />
                <h1 style={styles.title} className='mainContent' >Dashboard</h1>
            </div>
            <div style={styles.headerRight}>
                <ThemeProvider theme={theme}>
                    <div style={styles.pageSelect} >
                        <Button variant="contained" style={styles.pageOption} data-value="data-visualization"
                            onClick={() => changeLayOut('data-visualization')}>Data Visualization</Button>
                        <Button variant="contained" style={styles.pageOption} data-value="raw-data"
                            onClick={() => changeLayOut('raw-data')}>Raw Data</Button>
                        <Button variant="contained" style={styles.pageOption} data-value="setting"
                            onClick={() => changeLayOut('setting')}>Setting</Button>
                    </div>
                </ThemeProvider>
                <div style={styles.headerRightRight}>
                    <div style={styles.searchBox}>
                        <Autocomplete
                            disablePortal
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            options={defaultProps}
                            sx={{ width: 250 }}
                            renderInput={(params) => <TextField {...params} label="Search" />}
                        />
                    </div>
                    <Avatar style={styles.circle} >G</Avatar>
                </div>
            </div>
        </div>
    )
}
const defaultProps = [
    { label: 'Sunshine school', year: 1994 },
]
