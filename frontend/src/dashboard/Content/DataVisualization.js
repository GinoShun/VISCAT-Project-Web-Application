import React from 'react'
import BasicTable from "./RawdataFile/test"
import FigureOne from "./VisualizationGraphs/FigureOne"
import styled from '@emotion/styled'
const ContentContainer = styled('div')({
    width: '100%',
    height: '98%',
    borderRadius: '10px',
    overflow: 'auto',
    margin: 20,

})

const GraphContainer = styled('div')({
    borderRadius: '10px',
    overflow: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
})

const GraphAreaUpper = styled('div')({
    display: 'flex',
    width: '100%',
    height: '50%',
    borderRadius: '10px',
    overflow: 'auto',
    alignContent: 'Space-between',
    justifyContent: 'Space-between',
})

export function DataVisualization () {
    return (
        <ContentContainer>
            <GraphAreaUpper>
                <GraphContainer style={{
                    width: '60%',
                    height: '90%',
                    backgroundColor: '#ffffff',

                }}>
                    <FigureOne />
                </GraphContainer>
                <GraphContainer style={{
                    width: '35%',
                    height: '90%',
                    backgroundColor: '#ffffff',
                }}>
                    <BasicTable />
                </GraphContainer>
            </GraphAreaUpper>
            <GraphContainer style={{
                width: '100%',
                height: '48%',
                backgroundColor: '#ffffff',
            }}>
                <BasicTable />
            </GraphContainer>
        </ContentContainer>

    )
}