import React from 'react'
import { styled } from "@mui/system"
import FindMore from '../../dashboard/Content/FindMore/FindMore'
import { ManageAccounts } from './ManageAccount'
import { Download } from './Download'
import { QrCodeManagement } from './QrCodeManagement'

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "white",
  marginTop: "105px",
  display: "flex",
  backgroundColor: "#dadada",
  borderRadius: "10px",
  width: "80%",
  right: 0,
  overflow: "auto",
})
const Content = ({ type }) => {
  let content

  switch (type) {
    case 'manageAccounts':
      content = <ManageAccounts />
      break
    case 'download':
      content = <Download />
      break
    case 'qrCodeManagement':
      content = <QrCodeManagement />
      break
    default:
      content = <ManageAccounts />
      break
  }

  return <MainContainer>
    {content}
  </MainContainer>
}

export default Content