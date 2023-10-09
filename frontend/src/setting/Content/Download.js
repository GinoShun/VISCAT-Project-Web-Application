import React from "react"
import DownloadCSV from "./FindMore/DownloadCSV"
import Box from "@mui/material/Box"

export const Download = () => {
    return (
        <Box display="flex" alignItems="flex-start" justifyContent="flex-start" p={2}>
            <DownloadCSV />
        </Box>
    )
}
