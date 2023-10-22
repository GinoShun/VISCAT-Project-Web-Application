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

// move csv and filter function to dashboard
function Content({ type, filteredData }) { // filteredData as props

  let content;
  switch (type) {
    case 'rawData':
      content = (
        <>
          <RawData data={filteredData} />
        </>
      ); 
      break;
    case 'dataVisualization':
      content = (
        <>
          <DataVisualization data={filteredData} />
        </>
      ); 
      break;
    default:
      content = <div>Welcome! Please select content from the sidebar.</div>;
      break;
  }

  return (
    <MainContainer>{content}</MainContainer>
  );
}

export default Content;


// function Content ({ type }) {
//   const [csvData, setCSVData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   const handleGetCSV = () => {
//     fetch('http://localhost:5002/api/auth/exportCSV')
//       .then(response => response.text())
//       .then(data => {
//         const lines = data.trim().split('\n');
//         const headers = lines[0].split(',');
//         const items = lines.slice(1).map(line => {
//           const rowData = line.split(',');
//           let obj = {};
//           headers.forEach((header, index) => {
//             obj[header] = rowData[index];
//           })
//           return obj;
//         })
//         setCSVData(items);
//       })
//       .catch(error => {
//         console.error("Error fetching CSV data:", error);
//       })
//   }

//   const onDataFiltered = (data) => {
//     setFilteredData(data);
//   };

//   useEffect(() => {
//     handleGetCSV()
//     // check csv data
//     console.log('CSV Data:', csvData);
//     console.log('Filtered Data:', filteredData);
//   }, [])

//   useEffect(() => {
//     if (csvData.length > 0) {
//       setFilteredData(csvData);
//     }
//   }, [csvData]);

//   let content;
//   switch (type) {
//     case 'rawData':
//       content = (
//         <>
//           <RawData data={filteredData} />
//         </>
//       ); 
//       break;
//     case 'dataVisualization':
//       content = (
//         <>
//           <DataVisualization data={filteredData} />
//         </>
//       ); 
//       break;
//     default:
//       content = <div>Welcome! Please select content from the sidebar.</div>;
//       break;
//   }

//   return (
//     <DataAndFunctionsContext.Provider value={{ onDataFiltered, csvData }}>
//       <MainContainer>{content}</MainContainer>
//     </DataAndFunctionsContext.Provider>
//   );
// }

// export default Content;
