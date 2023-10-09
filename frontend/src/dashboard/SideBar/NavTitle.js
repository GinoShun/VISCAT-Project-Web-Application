import React from "react"
import { Typography, Box } from "@mui/material"
import logo from '../../Static/VisCatLogo.png'

const FriendsTitle = ({ title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1.2 }}>
      <img src={logo} alt="Image" width="60" height="60" style={{ marginTop: '8px' }} />
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#000000",
          fontSize: "2.3em",
          marginTop: 2,
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default FriendsTitle
