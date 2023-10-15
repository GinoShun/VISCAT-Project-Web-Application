import React from 'react'
import BasicTable from "./RawdataFile/test"
import PieGraph from "./VisualizationGraphs/PieGraph"
import styled from '@emotion/styled'
import DataTable from './DataTable/DataTable'
import BarGraph from './VisualizationGraphs/BarGrph'

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

export function DataVisualization ({ data }) {
    return (
        <ContentContainer>
            <GraphAreaUpper>
                <GraphContainer style={{
                    display: 'flex',
                    width: '60%',
                    height: '90%',
                    backgroundColor: '#ffffff',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}>
                    <BarGraph data={data} />

                </GraphContainer>
                <GraphContainer style={{
                    display: 'flex',

                    width: '35%',
                    height: '90%',
                    backgroundColor: '#ffffff',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}>
                    <PieGraph data={data} />
                </GraphContainer>
            </GraphAreaUpper>
            <GraphContainer style={{
                width: '100%',
                height: '48%',
                backgroundColor: '#ffffff',
            }}>
                <DataTable data={data} />
            </GraphContainer>
        </ContentContainer>

    )
}