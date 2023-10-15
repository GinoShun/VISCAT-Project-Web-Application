import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { getActions } from '../store/actions/alertActions';
import axios from 'axios';

const TeacherDataUploadPage = ({ changePage}) => {
    const history = useNavigate()
    const [fullName, setFullName] = useState('');
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState('');
    const [classnum, setClassnum] = useState('');


    const handleTeacher = () => {
        const teacherInfo = {
            fullName, 
            school,  
            grade,     
            classnum 
        };
    
        // 执行提交操作
        axios.post('http://localhost:5002/api/auth/teacherInfo', teacherInfo, { withCredentials: true })
            .then((res) => {
                if (res.data.Status === 'Success') {
                    history('/success');
                }
            })
            .catch((err) => console.log(err));
    };


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
                        id="standard-basic"
                        label="Your Full Name"
                        variant="standard"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                    <TextField
                        id="standard-basic"
                        label="School"
                        variant="standard"
                        value={school}
                        onChange={(event) => setSchool(event.target.value)}
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
                        id="standard-basic"
                        label="Grade"
                        variant="standard"
                        value={grade}
                        onChange={(event) => setGrade(event.target.value)}
                    />
                    <TextField
                        id="standard-basic"
                        label="Class"
                        variant="standard"
                        value={classnum}
                        onChange={(event) => setClassnum(event.target.value)}
                    />

                </Box>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '40px',
                }}>
                    <Tooltip title="Click to go next">
                        <IconButton onClick={() => {
                            changePage('studentInfo');
                            handleTeacher();
                        }}>
                            <ArrowForwardIosIcon sx={{ fontSize: 40, color: blue[500] }} style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} />
                        </IconButton>

                    </Tooltip>
                </div>

            </Container>
        </Container>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}
export default connect(null, mapActionsToProps)(TeacherDataUploadPage);