import React from 'react'
import BasicTable from './RawdataFile/test'
import styled from '@emotion/styled'

const ContentContainer = styled('div')({
  width: '100%',
  height: '98%',
  display: 'flex',
  margin: 10,
  borderRadius: '10px',
  overflow: 'auto',
})
export function RawData () {
  return (
    <ContentContainer>
      <BasicTable />
    </ContentContainer>

  )
}
