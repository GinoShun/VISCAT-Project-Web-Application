import React from 'react'
import { useState } from 'react'
import logo from './image/VisCatLogo.png'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button, Toolbar } from '@mui/material'
import { StudentInforUploadPage } from './studentInfroUploadPage'
import Container from '@mui/material/Container'
import { useMediaQuery } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { blue } from '@mui/material/colors'

export function TeacherDataUploadPage ({ changePage }) {
    const isMobile = useMediaQuery('(max-width:600px)')
    const styles = {
        mainPage: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
        },
        uploadArea: {
            justifyContent: 'center',
            height: isMobile ? '90vh' : '70vh',
            width: isMobile ? '80vw' : '30vw',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            overflow: 'auto',
            padding: '20px',
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
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [schoolName, setSchoolName] = useState("")
    const [schoolPosition, setSchoolPosition] = useState("")
    const [classGrade, setClassGrade] = useState("")
    const [classNumber, setClassNumber] = useState("")

    const handleSubmit = () => {
        const currentData = {
            firstName,
            lastName,
            schoolName,
            schoolPosition,
            classGrade,
            classNumber
        }
        // Here obtain the final data.
        console.log(currentData)

        // Optional: Clear input fields after submitting
        setFirstName("")
        setLastName("")
        setSchoolName("")
        setSchoolPosition("")
        setClassGrade("")
        setClassNumber("")

        changePage('studentInfo')
    }
    return (
        <Container style={styles.mainPage}>
            <Container fixed maxWidth="sm" style={styles.uploadArea}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <img src={logo} alt="Cat Icon" style={{ width: '100px', height: '110px', margin: '10px', alignItems: 'Center', }} />
                </div>
                <div style={styles.headerFont}>Hi, Welcome to VisCat</div>
                <div style={styles.contentFont}>Please enter the following Information</div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '30px',
                        marginTop: '40px',
                    }}
                >
                    <TextField
                        variant="standard"
                        label="Your FirstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)} // 4. 使用onChange事件处理程序来更新每个输入框的状态
                    />
                    <TextField
                        variant="standard"
                        label="Your LastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />          </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '30px',
                    }}
                ><TextField
                        variant="standard"
                        label="School Name"
                        value={schoolName}
                        onChange={e => setSchoolName(e.target.value)}
                    />
                    <TextField
                        variant="standard"
                        label="School Position"
                        value={schoolPosition}
                        onChange={e => setSchoolPosition(e.target.value)}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '30px',
                    }}
                >
                    <TextField
                        variant="standard"
                        label="Class's grade"
                        value={classGrade}
                        onChange={e => setClassGrade(e.target.value)}
                    />
                    <TextField
                        variant="standard"
                        label="Class number"
                        value={classNumber}
                        onChange={e => setClassNumber(e.target.value)}
                    />
                </Box>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '40px',
                }}>
                    <Tooltip title="Click to go next">
                        <IconButton onClick={handleSubmit}>
                            <ArrowForwardIosIcon
                                sx={{ fontSize: 40, color: blue[500] }}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            />
                        </IconButton>
                    </Tooltip>
                </div>
            </Container>
        </Container>
    )
}