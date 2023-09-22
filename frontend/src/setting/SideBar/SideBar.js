import React from "react"
import { styled } from "@mui/system"
import Title from "./NavTitle"
import { useNavigate } from 'react-router-dom'
import { Box } from "@mui/material"
import FunctionSelect from "./FunctionSelect"

const MainContainer = styled("div")({
  width: "20%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: " #ffffff;",
})

const SideBar = ({ onContentChange }) => {
  const navigate = useNavigate()

  const handleDashboardClick = () => {
    navigate('/dashboard')
  }

  return (
    <MainContainer>
      <Box
        onClick={handleDashboardClick}
        sx={{ width: '100%', textAlign: 'left', paddingLeft: '1rem' }}
      >
        <Title title="Go back" />
      </Box>
      <FunctionSelect onContentChange={onContentChange} />

    </MainContainer>
  )
}

export default SideBar
