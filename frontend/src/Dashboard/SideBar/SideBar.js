import React from "react"
import { styled } from "@mui/system"
import Title from "./NavTitle"
import { useNavigate } from 'react-router-dom'
import { Box } from "@mui/material"
import FunctionSelect from "./FunctionSelect"
import Filter from "./Filter"

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
  const handleDateFilter = (date) => {
    // Handle the date filtering logic here
    console.log(date) // For debugging purposes
  }

  return (
    <MainContainer>
      <Box
        onClick={handleDashboardClick}
        sx={{ width: '100%', textAlign: 'left', paddingLeft: '1rem' }}
      >
        <Title title="Viscat" />
      </Box>

      <FunctionSelect onContentChange={onContentChange} />
      <Filter onDateChange={handleDateFilter} />

    </MainContainer>
  )
}

export default SideBar
