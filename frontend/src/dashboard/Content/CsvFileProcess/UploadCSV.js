import React from 'react'
import Button from '@mui/material/Button'
import CSVReader from 'react-csv-reader'
// this function use to connect with backend to get the processed data(as csv file)

function UploadCSV (props) {
    const handleOnDrop = (data) => {
        props.setCSVData(data)
        props.setFileBlobUrl('true')
    }

    const handleOnError = (err) => {
        console.error(err)
    }

    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header =>
            header
                .toLowerCase()
                .replace(/\W/g, '_')
    }

    return (
        <div>
            <CSVReader
                cssClass="csv-reader-input"
                label="Select CSV"
                onFileLoaded={handleOnDrop}
                onError={handleOnError}
                parserOptions={papaparseOptions}
                inputId="CSVUpload"
                inputName="CSVUpload"
                inputStyle={{ color: 'red' }}
            />
        </div>
    )
}

export default UploadCSV
