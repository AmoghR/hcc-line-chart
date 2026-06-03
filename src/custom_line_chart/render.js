import * as d3 from 'd3'
import rough from 'roughjs'
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
    showXAxisLine,
    showYAxisLine,
    showXTicks,
    showYTicks,
    showLabels,
    roughness,
    titleText,
    titlePosition,
    chartType,
    yAxisStart,
    yAxisEnd,
    yAxisStep,
    padYScale,
    gridX,
    gridY,
    gridColor,
    gridOpacity
  } = visualOptions

  const svg = d3.select(node)

  // Responsive SVG setup
  svg.attr('viewBox', `0 0 ${width} ${height}`)

  if (data.length === 0) return

  // Group data by series and lines using d3.rollups
  const nestedData = d3.rollups(
    data,
    (v) => v.sort((a, b) => d3.ascending(a.x, b.x)),
    (d) => d.series,
    (d) => d.lines
  )

  // Layout series in a grid (similar to d3-gridding but without external dependency)
  const columnsNumber = mapping.series && mapping.series.value ? 2 : 1
  const cellWidth = width / columnsNumber
  const rowsNumber = Math.ceil(nestedData.length / columnsNumber)
  const cellHeight = height / rowsNumber

  const griddingData = nestedData.map((d, i) => {
    const col = i % columnsNumber
    const row = Math.floor(i / columnsNumber)
    return {
      data: d, // [seriesKey, linesArray]
      x: col * cellWidth,
      y: row * cellHeight,
      width: cellWidth,
      height: cellHeight
    }
  })

  // Color scale
  const lineKeys = Array.from(new Set(data.map(d => d.color)))
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(lineKeys)

  const rc = rough.svg(node)

  // Render each series cell
  griddingData.forEach((cell, cellIndex) => {
    const margin = { top: 60, right: 50, bottom: 50, left: 60 }
    const serieWidth = cell.width - margin.left - margin.right
    const serieHeight = cell.height - margin.top - margin.bottom

    const selection = svg
      .append('g')
      .attr('id', `series-${cellIndex}`)
      .attr('transform', `translate(${cell.x + margin.left}, ${cell.y + margin.top})`)

    const seriesData = cell.data[1].flatMap(line => line[1])

    // Detect X scale type
    const firstX = seriesData[0]?.x
    let xScaleType = 'number'
    if (firstX instanceof Date) {
      xScaleType = 'date'
    } else if (typeof firstX === 'string') {
      xScaleType = 'string'
    }

    let xScale
    if (xScaleType === 'date') {
      xScale = d3.scaleTime()
        .domain(d3.extent(seriesData, d => d.x))
        .range([0, serieWidth])
    } else if (xScaleType === 'number') {
      xScale = d3.scaleLinear()
        .domain(d3.extent(seriesData, d => d.x))
        .range([0, serieWidth])
    } else {
      const uniqueX = Array.from(new Set(seriesData.map(d => d.x)))
      xScale = d3.scalePoint()
        .domain(uniqueX)
        .range([0, serieWidth])
        .padding(0.5)
    }

    // Y scale
    let [yMinVal, yMaxVal] = d3.extent(seriesData, d => d.y)
    if (padYScale) {
      const diff = yMaxVal - yMinVal
      if (diff === 0) {
        yMinVal = yMinVal - 1
        yMaxVal = yMaxVal + 1
      } else {
        yMinVal = yMinVal - 0.1 * diff
        yMaxVal = yMaxVal + 0.1 * diff
      }
    }

    if (yAxisStart !== undefined && yAxisStart !== null && !isNaN(yAxisStart)) {
      yMinVal = yAxisStart
    }
    if (yAxisEnd !== undefined && yAxisEnd !== null && !isNaN(yAxisEnd)) {
      yMaxVal = yAxisEnd
    }

    const yScale = d3.scaleLinear()
      .domain([yMinVal, yMaxVal])
      .range([serieHeight, 0])

    let yTickValues
    if (yAxisStep && yAxisStep > 0) {
      yTickValues = []
      for (let val = yMinVal; val <= yMaxVal; val += yAxisStep) {
        yTickValues.push(val)
      }
    }

    // Grid lines
    if (gridX) {
      selection
        .append('g')
        .attr('transform', `translate(0, ${serieHeight})`)
        .call(
          d3.axisBottom(xScale)
            .tickSize(-serieHeight)
            .tickFormat('')
        )
        .call(g => g.select('.domain').remove())
        .call(g => g.selectAll('.tick line').attr('stroke', gridColor).attr('stroke-opacity', gridOpacity))
    }

    if (gridY) {
      const yGridAxis = d3.axisLeft(yScale)
        .tickSize(-serieWidth)
        .tickFormat('')
      if (yTickValues) {
        yGridAxis.tickValues(yTickValues)
      }
      selection
        .append('g')
        .call(yGridAxis)
        .call(g => g.select('.domain').remove())
        .call(g => g.selectAll('.tick line').attr('stroke', gridColor).attr('stroke-opacity', gridOpacity))
    }

    // Lines generator
    let curveInterpolator = d3.curveLinear
    if (chartType === 'step') {
      curveInterpolator = d3.curveStep
    } else if (chartType === 'bump') {
      curveInterpolator = d3.curveBumpX
    }

    const lineGenerator = d3
      .line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(curveInterpolator)

    // Render lines/dots
    cell.data[1].forEach(([lineKey, linePoints]) => {
      const groupColor = colorScale(linePoints[0]?.color)
      const pathString = lineGenerator(linePoints)

      if (linePoints.length > 1 && pathString) {
        if (showSketchy) {
          const sketchyLineNode = rc.path(pathString, {
            stroke: groupColor,
            strokeWidth: 2.5,
            roughness: roughness,
          })
          selection.node().appendChild(sketchyLineNode)
        } else {
          selection
            .append('path')
            .attr('fill', 'none')
            .attr('stroke', groupColor)
            .attr('stroke-width', 2)
            .attr('d', pathString)
        }
      }

      linePoints.forEach((d) => {
        const cx = xScale(d.x)
        const cy = yScale(d.y)

        if (showSketchy) {
          const sketchyCircleNode = rc.circle(cx, cy, dotsRadius * 2, {
            stroke: groupColor,
            strokeWidth: 1.5,
            roughness: roughness,
            fill: groupColor,
            fillStyle: 'solid',
          })
          selection.node().appendChild(sketchyCircleNode)
        } else {
          selection
            .append('circle')
            .attr('cx', cx)
            .attr('cy', cy)
            .attr('r', dotsRadius)
            .attr('fill', groupColor)
        }
      })
    })

    // Axes
    if (showXAxis) {
      const xAxisGenerator = d3.axisBottom(xScale)
      if (xScaleType === 'number') {
        xAxisGenerator.tickFormat(d3.format('d'))
      }

      const xAxisG = selection
        .append('g')
        .attr('transform', `translate(0, ${serieHeight})`)
        .call(xAxisGenerator)

      if (!showXAxisLine) xAxisG.select('.domain').remove()
      if (!showXTicks) xAxisG.selectAll('.tick line').remove()
      if (!showLabels) xAxisG.selectAll('.tick text').remove()
    }

    if (showYAxis) {
      const yAxisGenerator = d3.axisLeft(yScale)
      if (yTickValues) {
        yAxisGenerator.tickValues(yTickValues)
      }

      const yAxisG = selection
        .append('g')
        .call(yAxisGenerator)

      if (!showYAxisLine) yAxisG.select('.domain').remove()
      if (!showYTicks) yAxisG.selectAll('.tick line').remove()
      if (!showLabels) yAxisG.selectAll('.tick text').remove()
    }

    // Series title if multiple series exist
    if (mapping.series && mapping.series.value && cell.data[0]) {
      selection
        .append('text')
        .attr('x', 10)
        .attr('y', -10)
        .text(cell.data[0])
        .styles(styles.seriesLabel)
    }
  })

  // Title rendering
  if (titleText) {
    let titleX = 60
    let textAnchor = 'start'
    if (titlePosition === 'center') {
      titleX = width / 2
      textAnchor = 'middle'
    } else if (titlePosition === 'right') {
      titleX = width - 50
      textAnchor = 'end'
    }

    svg
      .append('text')
      .attr('x', titleX)
      .attr('y', 30)
      .attr('text-anchor', textAnchor)
      .text(titleText)
      .styles(styles.seriesLabel)
  }
}