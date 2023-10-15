import styled from '@emotion/styled'
import React from "react"
import DataTable from './DataTable/DataTable'

const ContentContainer = styled('div')({
  width: '100%',
  height: '98%',
  margin: 10,
  borderRadius: '10px',
  overflow: 'auto',
  backgroundColor: '#ffffff',
})

export function RawData ({ data }) {
  return (
    <ContentContainer>
      <DataTable data={data} />
    </ContentContainer>
  )
}
