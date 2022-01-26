import React, { ReactElement, useRef, useEffect } from 'react'
import h337 from 'heatmap.js'

interface Props {
  imgUrl?: string
  width: number
  height: number
  dataPoints: h337.HeatmapData<h337.DataPoint>
  config?: h337.HeatmapConfiguration | {}
}

export default function HeatmapComponent({
  imgUrl = '',
  width,
  height,
  dataPoints,
  config = {},
}: Props): ReactElement {
  const ref = useRef<HTMLDivElement>(null)

  let heatmapInstance: h337.Heatmap<'x', 'y', 'value'> | undefined = undefined
  useEffect(() => {
    if (ref.current) {
      heatmapInstance = h337.create({
        container: ref.current,
        ...config,
      })
    }
    if (heatmapInstance) {
      heatmapInstance.repaint()
    }
  }, [])

  useEffect(() => {
    heatmapInstance?.setData(dataPoints)
  }, [dataPoints])

  return (
    <div
      ref={ref}
      style={{
        background: `url(${imgUrl}) no-repeat center center`,
        backgroundSize: 'cover',
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  )
}
