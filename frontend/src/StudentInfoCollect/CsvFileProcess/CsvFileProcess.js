import React, { useState, useEffect } from "react"
import UploadCSV from "./UploadCSV"
import DataTable from "./DataTable"
import DownloadIcon from '@mui/icons-material/Download'
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material'

function CsvFileProcess () {
    const [csvData, setCSVData] = useState([])
    const [fileBlobUrl, setFileBlobUrl] = useState("")  // store the blob URL of the uploaded file

    return <>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <UploadCSV setCSVData={setCSVData} setFileBlobUrl={setFileBlobUrl} />
            {fileBlobUrl &&
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                    href={fileBlobUrl}
                    download="data.csv"
                    style={{ margin: '5px' }}
                >
                </Button>}
        </div>

        <DataTable data={csvData} />

    </>
}
export default CsvFileProcess