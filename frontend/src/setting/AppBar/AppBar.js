import React, { useState, useEffect } from 'react'
import { styled } from '@mui/system'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MoreIcon from '@mui/icons-material/MoreVert'
import HostPageButton from './HostPageButton'
import SearchBlank from './SearchBlank'
import Tooltip from '@mui/material/Tooltip'
import SettingsIcon from '@mui/icons-material/Settings'
import { useNavigate } from 'react-router-dom'

const LeftContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    width: '100%'
})

const RightContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
})


export default function PrimarySearchAppBar ({ flag }) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
    const [shouldDisplaySearch, setShouldDisplaySearch] = React.useState(true)
    const [temp, setTemp] = useState('80%')
    const open = Boolean(anchorEl)


    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleProfileMenuClose = () => {
        setAnchorEl(null)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const navigate = useNavigate()

    const handleSettingsClick = () => {
        navigate('/settings')
    }
    const handleResize = () => {
        if (window.innerWidth < 1040) {
            setTemp("100%")
            flag("0")
        }

    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    const handleClick = () => {
        if (temp === '80%') {
            setTemp("100%")
            flag("0")
        }
        else if (temp === '100%') {
            setTemp("80%")
            flag("1")
        }
        else {
            setTemp('80%')
            flag("1")
        }
    }

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    )

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle sx={{ color: '#696969' }} />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )

    return (
        <Box
            sx={{
                flexGrow: 1,
                position: "absolute",
                height: "90px",
                right: 0,
                width: temp,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: "8px",
            }}
        >
            <AppBar position="static" sx={{ backgroundColor: '#ffffff;', width: '100%', boxShadow: 'none', height: '100%' }}>
                <Toolbar sx={{ height: '100%', alignItems: 'center' }}>

                    <LeftContainer sx={{
                        display: { xs: 'flex', md: 'flex' },
                        width: '100%'

                    }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2, width: 50, height: 50 }}
                            onClick={handleClick}
                        >
                            <MenuIcon sx={{ width: '100%', height: '100%', color: '#696969' }} />
                        </IconButton>
                        <SearchBlank />
                    </LeftContainer>
                    <RightContainer sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <HostPageButton />
                        <Box sx={{ flexGrow: 0, alignItems: 'center', marginLeft: '10px' }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleSettingsClick} >
                                    <SettingsIcon alt="Remy Sharp" sx={{ width: 50, height: 50, color: '#696969' }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </RightContainer>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            sx={{ width: 30, height: 30 }}
                        >
                            <MoreIcon sx={{ width: '100%', height: '100%', color: '#696969' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    )
}
