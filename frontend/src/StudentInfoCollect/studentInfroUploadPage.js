import React, { useState, useEffect } from 'react'
import logo from './image/VisCatLogo.png'
import TextField from '@mui/material/TextField'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import { useMediaQuery } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { blue } from '@mui/material/colors'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




export function StudentInforUploadPage ({ changePage }) {
    const history = useNavigate()
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
            height: isMobile ? '90vh' : '90vh',
            width: isMobile ? '80vw' : '50vw',
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
    const columns = [
        {
            field: 'studentId',
            headerName: 'ID',
            width: 90,
        },
        {
            field: 'name',
            headerName: 'Full name',
            width: 150,
            editable: true,
        },
        {
            field: 'dob',
            headerName: 'DOB',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },

        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => handleDeleteRow(params.row.studentId)}
                >
                    Delete
                </Button>
            )
        },
    ]
    const rows = []
    const [tableRows, setTableRows] = useState(rows)

    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [age, setAge] = useState("")
    const [studentId, setStudentId] = useState("")

    const calculateAge = (dateOfBirth) => {
        const dobDate = new Date(dateOfBirth)
        const currentDate = new Date()
        const age = currentDate.getFullYear() - dobDate.getFullYear() -
            (currentDate.getMonth() < dobDate.getMonth() ||
                (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate()) ? 1 : 0)
        return age
    }
    const handleAddRow = () => {
        const age = calculateAge(dob)

        const newRow = {
            id: studentId,
            name: name,
            dob: dob,
            age: age,
            studentId: studentId
        }
        axios.post('http://viscat.shop:5002/api/auth/studentInfo', newRow, { withCredentials: true })
            .then((res) => {
                if (res.data.Status === 'Success') {
                    history('/success')
                }
            })
            .catch((err) => console.log(err))
        setTableRows([...tableRows, newRow])
        setName("")
        setDob("")
        setAge("")
        setStudentId("")
    }

    const handleDeleteRow = (studentId) => {
        axios.delete(`http://viscat.shop:5002/api/auth/deleteStudentInfo/${studentId}`, { withCredentials: true })

        const updatedRows = tableRows.filter(row => row.studentId !== studentId)
        setTableRows(updatedRows)

    }


    const handleNextClick = () => {
        // here to send the data to backend
        console.log(tableRows)
        changePage('success')
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
                <div style={styles.headerFont}>Please enter all students' infromation in your class</div>
                <Box sx={{ height: 600, width: '100%' }}>
                    <div style={styles.inputBox}>
                        <TextField
                            label="Full Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <TextField
                            type="date"
                            value={dob}
                            onChange={e => setDob(e.target.value)}
                        />
                        <TextField
                            label="studentId"
                            type="number"
                            value={studentId}
                            onChange={e => setStudentId(e.target.value)}
                        />
                        <Button onClick={handleAddRow}>Add Row</Button>
                    </div>

                    <Box sx={{ height: 600, width: '100%' }}>
                        <DataGrid
                            rows={tableRows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 20,
                                    },
                                },
                            }}
                            style={{
                                marginLeft: '50px', marginRight: '50px', marginTop: '30px'
                            }}
                            pageSizeOptions={[20]}
                            disableRowSelectionOnClick
                        />
                    </Box>
                </Box>

                <Box style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '40px',
                }}>
                    <Tooltip title="Click to go next">
                        <IconButton onClick={handleNextClick}>
                            <ArrowForwardIosIcon sx={{ fontSize: 40, color: blue[500] }} style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </div>
        </div>
    )
}