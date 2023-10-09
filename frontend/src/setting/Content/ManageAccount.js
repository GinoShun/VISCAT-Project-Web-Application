import React from "react"
import ResetPass from "./FindMore/ResetPass"
import Box from "@mui/material/Box"
import Avatar from '@mui/material/Avatar'
import { deepOrange, deepPurple } from '@mui/material/colors'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import { AccountSetting } from "./AccountSetting/AccountSetting"
function InsetDividers ({ userInfo }) {
    return (
        <List
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
                borderRadius: '10px',
                height: '98%',
            }}
        ><ListItem button>
                <ListItemAvatar sx={{ marginRight: '50px' }}>
                    <ListItemText primary="Photo" />
                </ListItemAvatar>
                <IconButton>
                    <Avatar sx={{ bgcolor: deepOrange[500], width: '55px', height: '55px' }}>OP</Avatar>
                </IconButton>
                <ListItemText primary="" secondary="Change your personal picture" />
                <EditIcon sx={{ right: 0 }} />
            </ListItem>
            <Divider sx={{ marginLeft: '20px', marginRight: '20px' }} />
            <AccountSetting initialUsername={userInfo ? userInfo.username : ''}
                initialEmail={userInfo ? userInfo.mail : ''} />
            {/*<ResetPass />*/}

        </List>
    )
}


export const ManageAccounts = () => {
    const userInfoStr = localStorage.getItem('user')
    const userInfo = userInfoStr ? JSON.parse(userInfoStr) : null

    return (
        <Box alignItems="flex-start" justifyContent="flex-start" p={2} width="100%" >
            <InsetDividers userInfo={userInfo} />
        </Box>
    )
}
