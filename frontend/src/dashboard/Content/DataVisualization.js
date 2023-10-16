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



const GraphAreaUpper = styled('div')({
    display: 'flex',
    width: '100%',
    height: '50%',
    borderRadius: '10px',
    overflow: 'auto',
    alignContent: 'Space-between',
    justifyContent: 'Space-between',
})

const GraphContainer = styled('div')({
    borderRadius: '10px',
    overflow: 'auto',
    display: 'flex',           // Making this container a flex container
    justifyContent: 'center',  // Centering content horizontally
    alignItems: 'center',      // Centering content vertically
})

export function DataVisualization ({ data }) {
    return (
        <ContentContainer>
            <GraphAreaUpper>
                <GraphContainer style={{
                    width: '60%',
                    height: '90%',
                    backgroundColor: '#ffffff',
                    justifyContent: 'flex-start', // Override to align BarGraph to the left
                }}>
                    <BarGraph data={data} />
                </GraphContainer>
                <GraphContainer style={{
                    width: '35%',
                    height: '90%',
                    backgroundColor: '#ffffff',
                    // No need for alignContent and justifyContent here since they are set in the styled component
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
