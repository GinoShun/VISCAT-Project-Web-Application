import React from 'react'
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
const Content = ({ type }) => {
  let content

  switch (type) {
    case 'rawData':
      content = <RawData />
      break
    case 'dataVisualization':
      content = <DataVisualization />
      break
    default:
      content = <div>Welcome! Please select content from the sidebar.</div>
      break
  }

  return <MainContainer>
    {content}
  </MainContainer>
}

export default Content