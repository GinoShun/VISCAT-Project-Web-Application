import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import * as XLSX from 'xlsx';
// import Papa from 'papaparse';


const DateRangeFilter = ({ csvData, onDataFiltered }) => {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  
  // check csv data
  console.log('CSV Data filter received:', csvData);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    filterData(date, endDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    filterData(startDate, date);
  };

  const filterData = (start, end) => {
    // filter data
    const filteredData = csvData.filter((item) => {
      const itemDate = new Date(item.date);  // TODO: need to adjust database format
      return itemDate >= start && itemDate <= end;
    });
    
    onDataFiltered(filteredData);
  };

  return (
    <>
      <Box sx={{ width: '100%', marginBottom: '3', marginLeft: 3, marginTop: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
          Filter
        </Typography>
      </Box>
      <Box sx={{ width: '60%', marginLeft: '-30%', marginTop: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ marginBottom: '2', width: 'auto' }}>
              <DatePicker
                label="From"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </Box>
            <Box sx={{ height: '8px' }} />
            <Box sx={{ width: 'auto' }}>
              <DatePicker
                label="To"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </Box>
          </Box>
        </LocalizationProvider>
      </Box>
    </>
  );
};

export default DateRangeFilter;

// const DateRangeFilter = () => {
//     const { onDataFiltered, csvData } = useContext(DataAndFunctionsContext) || {};
//     const [startDate, setStartDate] = React.useState(null);
//     const [endDate, setEndDate] = React.useState(null);
//     // check csv data
//     console.log('CSV Data filter received:', csvData);

//     const handleStartDateChange = (date) => {
//         setStartDate(date);
//         filterData(date, endDate);
//     };

//     const handleEndDateChange = (date) => {
//         setEndDate(date);
//         filterData(startDate, date);
//     };

//     const filterData = (start, end) => {
//         // filter data
//         const filteredData = csvData.filter((item) => {
//           const itemDate = new Date(item.date);
//           return itemDate >= start && itemDate <= end;
//         });
        
//         // console.log("Filtered Data:", filteredData);
//         onDataFiltered(filteredData);
//     };

//     // UI
//     return (
//         <>
//             <Box sx={{ width: '100%', marginBottom: '3', marginLeft: 3, marginTop: 2 }}>
//                 <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
//                     Filter
//                 </Typography>
//             </Box>
//             <Box sx={{ width: '60%', marginLeft: '-30%', marginTop: 2 }}>
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                         <Box sx={{ marginBottom: '2', width: 'auto' }}>
//                             <DatePicker
//                                 label="From"
//                                 value={startDate}
//                                 onChange={handleStartDateChange}
//                             />
//                         </Box>
//                         <Box sx={{ height: '8px' }} />
//                         <Box sx={{ width: 'auto' }}>
//                             <DatePicker
//                                 label="To"
//                                 value={endDate}
//                                 onChange={handleEndDateChange}
//                             />
//                         </Box>
//                     </Box>
//                 </LocalizationProvider>
//             </Box>
//         </>
//     );

//      // // only for test purpose, get actual data from backend
//     // const filterData = (start, end) => {
//     //     const filePath = '/Users/sunjinuo/Desktop/IT/Simulation Data for Software VisCAT.xlsv';
//     //     const file = new File([filePath], "Simulation Data for Software VisCAT.xlsv");
//     //     readExcel(file, start, end);
//     // };
    
//     // // read and extract filtered data
//     // const readExcel = (file, start, end) => {
//     //     const reader = new FileReader();
//     //     reader.onload = (e) => {
//     //         const data = e.target.result;
//     //         const workbook = XLSX.read(data, { type: 'binary' });
//     //         const sheet = workbook.Sheets[workbook.SheetNames[0]];
//     //         // convert to csv to ensure code reuse
//     //         const csvData = XLSX.utils.sheet_to_csv(sheet);
    
//     //         Papa.parse(csvData, {
//     //             header: true,
//     //             dynamicTyping: true,
//     //             complete: function (results) {
//     //                 const filteredData = results.data.filter((item) => {
//     //                     const itemDate = new Date(item.date);
//     //                     return itemDate >= start && itemDate <= end;
//     //                 });
//     //                 onDataFiltered(filteredData);
//     //                 // test print
//     //                 console.log('Filtered Data:', filteredData);
//     //             }
//     //         });
//     //     };
//     //     reader.readAsBinaryString(file);
//     // };
// };

// export default DateRangeFilter;

