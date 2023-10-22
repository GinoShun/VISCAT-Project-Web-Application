import React, { useState, useEffect } from 'react'
import AppBar from './AppBar/AppBar'
import { styled } from "@mui/system"
import SideBar from './SideBar/SideBar'
import Content from './Content/Content'


const Wrapper = styled("div")({
    width: "100%",
    overflow: "auto",
    height: "100vh",
    display: "flex",
  })

export function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedContent, setSelectedContent] = useState('rawData')
  const [csvData, setCSVData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Fetch CSV Data from backend
  const handleGetCSV = () => {
    fetch('http://localhost:5002/api/auth/exportCSV')
      .then(response => response.text())
      .then(data => {
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        const items = lines.slice(1).map(line => {
          const rowData = line.split(',');
          let obj = {};
          headers.forEach((header, index) => {
            obj[header] = rowData[index];
          })
          return obj;
        })
        setCSVData(items);
      })
      .catch(error => {
        console.error("Error fetching CSV data:", error);
      })
  }

  const onDataFiltered = (data) => {
    setFilteredData(data);
  };

  useEffect(() => {
    handleGetCSV();
  }, []);

  useEffect(() => {
    if (csvData.length > 0) {
      setFilteredData(csvData);
    }
  }, [csvData]);

  const handleContentChange = (content) => {
    setSelectedContent(content)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Wrapper>
      {isSidebarOpen && <SideBar onContentChange={handleContentChange} isSidebarOpen={isSidebarOpen} csvData={csvData} onDataFiltered={onDataFiltered} />}
      <Content type={selectedContent} filteredData={filteredData} />
      <AppBar flag={toggleSidebar} />
    </Wrapper>
  )
}

// export function Dashboard () {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true)
//     const [selectedContent, setSelectedContent] = useState('rawData')

//     const handleContentChange = (content) => {
//         setSelectedContent(content)
//     }



//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen)
//     }

//     return (
//         <Wrapper>
//             {isSidebarOpen && <SideBar onContentChange={handleContentChange} isSidebarOpen={isSidebarOpen} />}
//             <Content type={selectedContent} />
//             <AppBar flag={toggleSidebar} />

//         </Wrapper>
//     )
// }