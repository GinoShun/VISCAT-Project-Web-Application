import React, { useState, useEffect } from "react"

import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

function DataTable ({ data }) {
    if (!data || data.length === 0) return null

    const headers = Object.keys(data[0])

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {headers.map(header => (
                        <TableCell key={header}>
                            {header}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {headers.map(header => (
                            <TableCell key={header}>
                                {row[header]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DataTable