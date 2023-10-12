import React, { useState } from 'react'
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





export function StudentInforUploadPage ({ changePage }) {
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
        { field: 'studentid', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
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
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 140,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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
                    onClick={() => handleDeleteRow(params.id)}
                >
                    Delete
                </Button>
            )
        },
    ]
    const rows = [

    ]
    const [tableRows, setTableRows] = useState(rows)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")

    const handleAddRow = () => {
        const newRow = {
            id: tableRows.length + 1,
            firstName: firstName,
            lastName: lastName,
            age: parseInt(age),
        }

        setTableRows([...tableRows, newRow])

        setFirstName("")
        setLastName("")
        setAge("")
    }
    const handleDeleteRow = (id) => {
        const newRows = tableRows.filter(row => row.id !== id)
        setTableRows(newRows)
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
                            label="First Name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <TextField
                            label="Last Name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <TextField
                            label="Age"
                            type="number"
                            value={age}
                            onChange={e => setAge(e.target.value)}
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