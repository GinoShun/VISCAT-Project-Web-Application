import React from "react"
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

function DataTable ({ data }) {
    if (!data || data.length === 0) return null

    const headers = Object.keys(data[0])

    const removeQuotes = (str) => {
        return str.replace(/"/g, '')
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {headers.map(header => (
                        <TableCell key={header}>
                            {removeQuotes(header)}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {headers.map(header => (
                            <TableCell key={header}>
                                {removeQuotes(row[header])}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DataTable
