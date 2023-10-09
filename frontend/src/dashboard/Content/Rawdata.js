import styled from '@emotion/styled'
import React, { useState, useEffect } from "react"
import axios from 'axios'
import CsvFileProcess from './CsvFileProcess/CsvFileProcess'

const ContentContainer = styled('div')({
  width: '100%',
  height: '98%',
  margin: 10,
  borderRadius: '10px',
  overflow: 'auto',
  backgroundColor: '#ffffff',
})
export function RawData () {
  return (<ContentContainer>
    <CsvFileProcess />
  </ContentContainer>
  )
}
