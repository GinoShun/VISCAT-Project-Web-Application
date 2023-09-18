import React, { useState, useRef, useEffect } from 'react'
import * as d3 from "d3"

const FigureOne = () => {
    const [data] = useState([25, 30, 35, 70, 10, 88])
    const reg = useRef()
    useEffect(() => {
        const w = 740
        const h = 360
        const svg = d3.select(reg.current)
            .attr('width', w)
            .attr('height', h)
            .style('background', 'white')
            .style('margin-top', '10')
            .style('overflow', 'visible')
            .attr('transform', 'translate(10, 0)')

        //setting scale
        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, w])
        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0])
        const generageScaledLined = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal)

        // Generate grid lines
        const gridLines = svg.append('g')
            .attr('class', 'grid-lines')
        const gridX = d3.range(0, w, 20) // 20是方格宽度
        const gridY = d3.range(0, h, 20) // 20是方格高度
        gridLines.selectAll('.grid-line-x')
            .data(gridX)
            .enter().append('line')
            .attr('class', 'grid-line-x')
            .attr('x1', d => d)
            .attr('y1', 0)
            .attr('x2', d => d)
            .attr('y2', h)
            .style('stroke', '#ccc') // 方格线的颜色

        gridLines.selectAll('.grid-line-y')
            .data(gridY)
            .enter().append('line')
            .attr('class', 'grid-line-y')
            .attr('x1', 0)
            .attr('y1', d => d)
            .attr('x2', w)
            .attr('y2', d => d)
            .style('stroke', '#ccc') // 方格线的颜色

        // setting axes
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(i => i + 1)
            .tickSize(0) // 隐藏刻度线
            .tickPadding(10) // 调整刻度文本与轴之间的距离

        const yAxis = d3.axisLeft(yScale)
            .ticks(5)
            .tickSize(0) // 隐藏刻度线
            .tickPadding(10) // 调整刻度文本与轴之间的距离

        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${h})`)
            .selectAll('text') // 选择所有文本元素
            .style('fill', '#013923') // 更改文本颜色为白色

        svg.append('g')
            .call(yAxis)
            .selectAll('text') // 选择所有文本元素
            .style('fill', '#013923') // 更改文本颜色为白色



        //setting data
        svg.selectAll('.line')
            .data([data])
            .join('path')
            .attr('d', d => generageScaledLined(d))
            .attr('fill', 'none')
            .attr('stroke', 'black')
    }, [data])
    return (
        <div>
            <svg ref={reg}></svg>
        </div>
    )
}

export default FigureOne