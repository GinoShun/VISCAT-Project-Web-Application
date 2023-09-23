import React from "react"
import { Typography, Box } from "@mui/material"
import ReplyIcon from '@mui/icons-material/Reply'
const FriendsTitle = ({ title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1.2 }}>
      <ReplyIcon style={{ marginTop: '8px', width: '50px', height: "50px" }} />
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#000000",
          fontSize: "2.1em",
          marginTop: 2,
          marginRight: '15px'
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default FriendsTitle
