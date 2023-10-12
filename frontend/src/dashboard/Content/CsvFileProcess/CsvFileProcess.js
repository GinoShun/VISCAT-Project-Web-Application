import React, { useState, useEffect } from "react"
import UploadCSV from "./UploadCSV"
import DataTable from "./DataTable"
import DownloadIcon from '@mui/icons-material/Download'
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material'
import axios from 'axios'
import Papa from 'papaparse'

const blobToText = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
            resolve(reader.result)
        }
        reader.onerror = reject
        reader.readAsText(blob)
    })
}


function CsvFileProcess () {
    const [csvData, setCSVData] = useState([])
    const handleGetCSV = async () => {
        fetch('http://localhost:5002/api/auth/exportCSV')
            .then(response => response.text())
            .then(csvData => {
                const lines = csvData.trim().split('\n')
                const headers = lines[0].split(',')
                const items = lines.slice(1).map(line => {
                    const data = line.split(',')
                    let obj = {}
                    headers.forEach((header, index) => {
                        obj[header] = data[index]
                    })
                    return obj
                })
                setCSVData(items) // 这里设置状态为转换后的对象数组
            })
            .catch(error => {
                console.error("Error fetching CSV data:", error)
            })
    }


    useEffect(() => {
        handleGetCSV()
    }, [])
    return <>

        <DataTable data={csvData} />

    </>
}
export default CsvFileProcess