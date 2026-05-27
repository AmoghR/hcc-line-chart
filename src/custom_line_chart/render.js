import * as d3 from 'd3'
import rough from 'roughjs'
import { legend } from '@rawgraphs/rawgraphs-core'
import '../d3-styles.js'

export function render(
  node,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {
  const { 
    width, 
    height, 
    background, 
    dotsRadius, 
    showSketchy,
    showXAxis,
    showYAxis,
    gridMode,
    showAxisLines, 
    showTicks,     
    showLabels,
    roughness
  } = visualOptions

  const svg = d3.select(node)

  // Responsive SVG setup
  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('preserveAspectRatio', 'xMidYMid meet')

  // Background
  svg
    .append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', background)

  const sortedData = [...data].sort((a, b) => d3.ascending(a.x, b.x))

  const margin = { top: 50, right: 50, bottom: 50, left: 60 }

  let xScale = d3
    .scaleTime()
    .domain(d3.extent(sortedData, (d) => d.x))
    .rangeRound([margin.left, width - margin.right])

  let yScale = d3
    .scaleLinear()
    .domain(d3.extent(sortedData, (d) => d.y))
    .rangeRound([height - margin.bottom, margin.top])
    .nice()

  const gridColor = '#e0e0e0'
  
  if (gridMode === 'both' || gridMode === 'x') {
    svg
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(
        d3.axisBottom(xScale)
          .tickSize(-height + margin.top + margin.bottom)
          .tickFormat('')
      )
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').attr('stroke', gridColor).attr('stroke-opacity', 0.6))
  }

  if (gridMode === 'both' || gridMode === 'y') {
    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(
        d3.axisLeft(yScale)
          .tickSize(-width + margin.left + margin.right)
          .tickFormat('')
      )
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').attr('stroke', gridColor).attr('stroke-opacity', 0.6))
  }

  const lineGenerator = d3
    .line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y))

  const pathString = lineGenerator(sortedData)
  const defaultChartColor = 'steelblue'

  const rc = rough.svg(node)

  if (sortedData.length > 1 && pathString) {
    if (showSketchy) {
      const sketchyLineNode = rc.path(pathString, {
        stroke: defaultChartColor,
        strokeWidth: 2.5,
        roughness: roughness,
      })
      node.appendChild(sketchyLineNode)
    } else {
      svg
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', defaultChartColor)
        .attr('stroke-width', 2)
        .attr('d', pathString)
    }
  }

  sortedData.forEach((d) => {
    const cx = xScale(d.x)
    const cy = yScale(d.y)

    if (showSketchy) {
      const sketchyCircleNode = rc.circle(cx, cy, dotsRadius * 2, {
        stroke: defaultChartColor,
        strokeWidth: 1.5,
        roughness: roughness,
        fill: defaultChartColor,
        fillStyle: 'solid',
      })
      node.appendChild(sketchyCircleNode)
    } else {
      svg
        .append('circle')
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('r', dotsRadius)
        .attr('fill', defaultChartColor)
    }
  })

  if (showXAxis) {
    const xAxisG = svg
      .append('g')  
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickFormat(d3.format('d'))) 

    if (!showAxisLines) xAxisG.select('.domain').remove()
    if (!showTicks) xAxisG.selectAll('.tick line').remove()
    if (!showLabels) xAxisG.selectAll('.tick text').remove()
  }

  if (showYAxis) {
    const yAxisG = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale))

    if (!showAxisLines) yAxisG.select('.domain').remove()
    if (!showTicks) yAxisG.selectAll('.tick line').remove()
    if (!showLabels) yAxisG.selectAll('.tick text').remove()
  }

  // Title
  svg
    .append('text')
    .attr('x', 20)
    .attr('y', 30)
    .text('Vienna Population')
    .styles(styles.seriesLabel)
}