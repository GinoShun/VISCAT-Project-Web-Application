import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import SearchAppBar from './searchBar'
const pages = ['Data Visualization', 'Raw Data']
const settings = ['setting', 'manage-accounts', 'download', 'password', 'QrCode-management']

function ResponsiveAppBar ({ changeLayOut }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = ({ page }) => {
        if (page === 'Data Visualization') {
            changeLayOut('data-visualization')
        }
        else if (page === 'Raw Data') {
            changeLayOut('raw-data')
        }
        else if (page === 'setting') {
            changeLayOut('setting')
        }
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = ({ setting }) => {
        if (setting === 'setting') {
            changeLayOut('setting')
        }
        else {
            setAnchorElUser(null)
        }
    }

    return (
        <AppBar position="static" elevation={0} style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
        }}>
            <Container maxWidth="xl" style={{
                height: '100%',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Toolbar disableGutters style={{
                    height: '100%',
                    alignItems: 'center',
                    display: 'flex',
                }}>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu({ page })}
                                sx={{ my: 2, color: 'black', display: 'block', fontWeight: 800, fontSize: '1.5rem' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <SearchAppBar sx={{ height: 20 }} />
                        <Box sx={{ flexGrow: 0, alignItems: 'center' }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={() => handleCloseNavMenu({ page: 'setting' })} >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ width: 56, height: 56 }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}
export default ResponsiveAppBar