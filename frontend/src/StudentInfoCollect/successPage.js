import React, {useEffect, useState, useRef} from 'react'
import logo from './image/VisCatLogo.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import { useMediaQuery } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import SettingsIcon from '@mui/icons-material/Settings'
import { green } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import QRCodeGenerator from './QRCodeGenerator'
import axios from 'axios'

export function SuccessPage ({ changePage }) {
    const [studentIds, setStudentIds] = useState([]);
    const [testScores, setTestScores] = useState([]);
    const [nameArray, setNameArray] = useState([]);
    const [combinedData, setCombinedData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5002/api/auth/getScore')
            .then((res) => {
                if (res.data && res.data.scores) {
                    const receivedData = res.data.scores;

                    // 获取 studentId 和 testScore 分别存储在数组中
                    const studentIdArray = receivedData.map((score) => score.studentId);
                    const testScoreArray = receivedData.map((score) => score.testScore);

                    setStudentIds(studentIdArray);
                    setTestScores(testScoreArray);
                }
            })
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        axios
            .get('http://localhost:5002/api/auth/getStudentInfo')
            .then((res) => {
                if (res.data && res.data.students) {
                    const receivedData = res.data.students;

                    // 获取名字存储在数组中
                    const nameArray = receivedData.map((student) => student.name);

                    setNameArray(nameArray);
                }
            })
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        // 当 studentIds、testScores 和 nameArray 改变时，计算 combinedData
        if (studentIds.length > 0 && testScores.length > 0 && nameArray.length > 0) {
            const combined = studentIds.map((studentId, index) => `${nameArray[index]}:${testScores[index]}`);
            setCombinedData(combined);
        }
    }, [studentIds, testScores, nameArray]);
    


    const isMobile = useMediaQuery('(max-width:600px)')
    const navigate = useNavigate()
    const handleBackToLogin = () => {
        navigate('/login')
    }

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
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px',
                }}>
                    <Tooltip title="Click to return Login page">
                        <IconButton onClick={handleBackToLogin}>
                            <DoneIcon sx={{ fontSize: 70 }} style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: green[500],
                            }} />
                        </IconButton>
                    </Tooltip>
                </div>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <QRCodeGenerator text={combinedData.join(',')}/>
                </Box>

            </div>
        </div>
    )
}