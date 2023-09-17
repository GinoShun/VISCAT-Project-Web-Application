import React from 'react'
import logo from './image/VisCatLogo.png'
import Button from '@mui/material/Button'
import { Avatar } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { lime, } from '@mui/material/colors'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import ResponsiveAppBar from './Appbar'
import { useEffect, useState } from 'react'
import { purple } from '@mui/material/colors'
const theme = createTheme({
    palette: {
        primary: {
            main: '#fffff',
        },
    },
})

export function DashboardHeader ({ changeLayOut }) {
    const [height, setHeight] = useState('auto')

    useEffect(() => {
        // 获取窗口高度
        const windowHeight = window.innerHeight
        // 设置元素高度为窗口高度的50%
        setHeight(`${windowHeight * 0.1}px`)

        // 监听窗口大小变化
        window.addEventListener('resize', () => {
            const newWindowHeight = window.innerHeight
            setHeight(`${newWindowHeight * 0.1}px`)
        })

        // 清除事件监听器
        return () => window.removeEventListener('resize', () => { })

    }, [])
    const styles = {
        headerstyle: {
            display: 'flex',
            justifyContent: 'space-between',
            height: height,

        },
        headerRight: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            flex: 0.7,
            backgroundColor: '#ffffff',
        },
        headerLeft: {
            display: 'flex',
            alignItems: 'center',
            flex: 0.3,
            backgroundColor: '#dadada',

        },
        title: {
            fontSize: '50px',
            fontWeight: 'bold',
            marginLeft: '10px',
            letterSpacing: '1px'
        },
        catIcon: {
            marginLeft: '20px',
            width: '80px',
            height: '90px'
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
        appbar: {
            height: '50px',
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
                <h1 style={styles.title} className='mainContent' >Viscat</h1>
            </div>
            <div style={styles.headerRight}>
                <ThemeProvider theme={theme}>
                    <ResponsiveAppBar changeLayOut={changeLayOut} />
                </ThemeProvider>
            </div>
        </div>
    )
}
const defaultProps = [
    { label: 'Sunshine school', year: 1994 },
]
