import React, { useState, useEffect } from 'react'
import { styled } from "@mui/system"
import { RawData } from './Rawdata'
import { DataVisualization } from './DataVisualization'

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "white",
  marginTop: "105px",
  display: "flex",
  backgroundColor: "#dadada",
  borderRadius: "10px",
  right: 0,
  width: "80%",
  overflow: "auto",
})

function Content ({ type }) {
  const [csvData, setCSVData] = useState([])

  const handleGetCSV = () => {
    fetch('http://viscat.shop:5002/api/auth/exportCSV')
      .then(response => response.text())
      .then(data => {
        const lines = data.trim().split('\n')
        const headers = lines[0].split(',')
        const items = lines.slice(1).map(line => {
          const rowData = line.split(',')
          let obj = {}
          headers.forEach((header, index) => {
            obj[header] = rowData[index]
          })
          return obj
        })
        setCSVData(items)
      })
      .catch(error => {
        console.error("Error fetching CSV data:", error)
      })
  }

  useEffect(() => {
    handleGetCSV()
    
  }, [])

  let content
  switch (type) {
    case 'rawData':
      content = <RawData data={csvData} />
      break
    case 'dataVisualization':
      content = <DataVisualization data={csvData} />
      break
    default:
      content = <div>Welcome! Please select content from the sidebar.</div>
      break
  }

  return <MainContainer>{content}</MainContainer>
}

export default Content
