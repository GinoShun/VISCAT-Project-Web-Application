import React, { useState, useEffect, useRef } from 'react'
import * as d3 from 'd3'

const BarGraph = ({ data }) => {
    const svgRef = useRef(null)
    const [testScores, setTestScores] = useState([])

    useEffect(() => {
        // 提取测试得分
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

        const width = 700
        const height = 400
        const margin = { top: 20, right: 20, bottom: 40, left: 40 }
        const innerWidth = width - margin.left - margin.right
        const innerHeight = height - margin.top - margin.bottom

        const xScale = d3.scaleBand()
            .domain(Object.keys(countMap))
            .range([0, innerWidth])
            .padding(0.1)

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(Object.values(countMap))])
            .range([innerHeight, 0])

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`)

        svg.selectAll('rect')
            .data(Object.entries(countMap))
            .enter()
            .append('rect')
            .attr('x', d => xScale(d[0]))
            .attr('y', d => yScale(d[1]))
            .attr('width', xScale.bandwidth())
            .attr('height', d => innerHeight - yScale(d[1]))
            .attr('fill', 'steelblue')

        svg.append('g')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale))

        svg.append('g')
            .call(d3.axisLeft(yScale))

    }, [testScores])

    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default BarGraph
