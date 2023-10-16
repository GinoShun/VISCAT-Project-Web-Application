import React, { useState, useEffect, useRef } from 'react'
import * as d3 from 'd3'

const PieGraph = ({ data }) => {
    const svgRef = useRef(null)
    const [testScores, setTestScores] = useState([])

    useEffect(() => {
        const scores = data.map(item => item["\"testScore\""].replace(/"/g, ''))
        setTestScores(scores)
    }, [data])

    useEffect(() => {
        if (testScores.length === 0) {
            return
        }

        const countMap = {}

        testScores.forEach(item => {
            if (countMap[item]) {
                countMap[item] += 1
            } else {
                countMap[item] = 1
            }
        })

        const sortedCount = {}
        Object.keys(countMap).sort().forEach(key => {
            sortedCount[key] = countMap[key]
        })

        const pie = d3.pie().value(d => sortedCount[d])
        const color = d3.scaleOrdinal(d3.schemeCategory10)

        const scaleFactor = 1.2 // New scale factor
        const width = 400 * scaleFactor
        const height = 400 * scaleFactor

        const svg = d3
            .select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`)

        const arcs = pie(Object.keys(sortedCount))

        svg
            .selectAll('path')
            .data(arcs)
            .enter()
            .append('path')
            .attr('d', d3.arc().innerRadius(0).outerRadius(100 * scaleFactor)) // Adjust outerRadius
            .attr('fill', (d, i) => color(i))

        svg
            .selectAll('text')
            .data(arcs)
            .enter()
            .append('text')
            .attr('transform', d => `translate(${d3.arc().innerRadius(0).outerRadius(100 * scaleFactor).centroid(d)})`) // Adjust outerRadius
            .attr('text-anchor', 'middle')
            .text(d => d.data)

    }, [testScores])

    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default PieGraph
