import * as React from 'react'
import logo from './image/VisCatLogo.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'

export function SuccessPage ({ changePage }) {
    const styles = {
        mainPage: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
        },
        uploadArea: {
            justifyContent: 'center',
            height: '70vh',
            width: '30vw',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        },
        headerFont: {
            fontSize: '2rem',
            fontWeight: 'bold',
            margin: '10px',
            marginLeft: '20px',
            marginRight: '20px',
            color: '#000000',
            textAlign: 'Center',
        },
        contentFont: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            margin: '10px',
            color: '#222222',
            marginLeft: '20px',
            marginRight: '20px',
            textAlign: 'Center',
        },
        inputBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }

    return (
        <div style={styles.mainPage}>
            <div style={styles.uploadArea}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <img src={logo} alt="Cat Icon" style={{ width: '100px', height: '110px', margin: '10px', alignItems: 'Center', }} />
                </div>
                <div style={styles.headerFont}>Submit Success</div>
                <Button
                    component="form"
                    noValidate
                    autoComplete="off"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '30px',
                        marginTop: '50px',
                        marginLeft: '150px',
                        marginRight: '150px',
                    }}
                ><DoneIcon sx={{ fontSize: 60 }} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} /></Button>
            </div>
        </div>
    )
}