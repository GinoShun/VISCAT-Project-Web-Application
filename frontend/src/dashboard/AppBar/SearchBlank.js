import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#A9A9A9', 0.1),
    '&:hover': {
        backgroundColor: alpha('#A9A9A9', 0.2),
    },
    marginLeft: 0,
    width: '30%',
    border: '1px solid black',
}))


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#696969', // 深灰色
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}))

export default function SearchBlank () {
    return (
        <Box sx={{ flexGrow: 1, alignItems: 'bottom' }}>
            <Toolbar>
                <Search sx={{
                    display: 'flex', alignItems: 'center', overflow: 'auto',
                }}>
                    <SearchIconWrapper sx={{ marginRight: 20, alignItems: 'center' }}>
                        <SearchIcon fontSize='large' sx={{ color: '#696969' }} /> {/* 深灰色 */}
                    </SearchIconWrapper>
                    <StyledInputBase
                        sx={{ marginLeft: '15px', fontSize: '1.15rem', alignItems: 'center' }}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Toolbar>
        </Box>
    )
}
