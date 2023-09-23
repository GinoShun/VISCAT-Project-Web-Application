import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import InboxIcon from '@mui/icons-material/Inbox'
import SettingsIcon from '@mui/icons-material/Settings'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import DownloadIcon from '@mui/icons-material/Download'
import KeyIcon from '@mui/icons-material/Key'
import QrCodeIcon from '@mui/icons-material/QrCode'
import { Avatar } from '@mui/material'


export function Setting ({ Settingtype }) {
    const styles = {

        oneRow: {
            display: 'flex',
            margin: '10px',
            padding: '5px',
        },
        headImage: {
            marginRight: '15px'
        },
        accountName: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#000000',
            textAlign: 'Left',
            marginTop: '5px'
        },
        accountNumber: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#939393',
            textAlign: 'Left',
            marginTop: '-2px'
        }
    }

    console.log(Settingtype)
    const windowsSwitch = (Settingtype) => {
        if (Settingtype === 'manage-accounts') {
            return (
                <div className="preview-window-content">
                    <div style={styles.oneRow}>
                        <Avatar sx={{ width: 56, height: 56 }} style={styles.headImage}>G</Avatar>
                        <div>
                            <div style={styles.accountName}>Account Name</div>
                            <div style={styles.accountNumber}>Email number</div>
                        </div>
                    </div>

                </div>
            )
        }
        else if (Settingtype === 'download') {
            return (
                <div className="preview-window-content">
                    <h3 className="contextData">Downloard</h3>
                </div>
            )
        }
        else if (Settingtype === 'password') {
            return (
                <div className="preview-window-content">
                    <h3 className="contextData">Password</h3>
                </div>
            )
        }
        else if (Settingtype === 'QrCode-management') {
            return (
                <div className="preview-window-content">
                    <h3 className="contextData">QrCode management</h3>
                </div>
            )
        }
    }
    return (<div className="preview-window">{windowsSwitch(Settingtype)}</div>)
}

export function SettingFilter ({ changeSettingType, settingType }) {
    const headerFont = {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'Left',
        marginBottom: '10px',
        marginLeft: '25px',
    }

    const settingArea = {
        margin: '10px',
        padding: '5px',
        backgroundcolor: '#909090',
    }

    const settingSelectionArea = {
        margin: '10px',
        padding: '5px',
    }
    return (
        <div className="file-database" style={{ height: '100vh' }}>
            <div style={headerFont}>Setting</div>
            <div style={settingArea}>
                <Box sx={{ width: '100%', maxWidth: 600 }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding onClick={() => changeSettingType('manage-accounts')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ManageAccountsIcon color={settingType === 'manage-accounts' ? 'primary' : ''} />
                                    </ListItemIcon>
                                    <ListItemText primary="Manage Accounts" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding onClick={() => changeSettingType('download')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DownloadIcon color={settingType === 'download' ? 'primary' : ''} />
                                    </ListItemIcon>
                                    <ListItemText primary="Downloard" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding onClick={() => changeSettingType('password')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <KeyIcon color={settingType === 'password' ? 'primary' : ''} />
                                    </ListItemIcon>
                                    <ListItemText primary="Password" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding onClick={() => changeSettingType('QrCode-management')}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <QrCodeIcon color={settingType === 'QrCode-management' ? 'primary' : ''} />
                                    </ListItemIcon>
                                    <ListItemText primary="QrCode management" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Box>
            </div>
        </div>
    )
}