import React from "react";
import { Typography, Box } from "@mui/material";
import logo from '../../static/VisCatLogo.png'

const FriendsTitle = ({ title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Image" width="40" height="40" style={{ marginTop: '3px' }} />
      <Typography
        sx={{
          textTransform: "uppercase",
          color: "#8e9297",
          fontSize: "2em",
          marginTop: "10px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default FriendsTitle;
