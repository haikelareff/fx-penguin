"use client"

import * as React from "react"
import {
  Area as RechartsArea,
  AreaChart as RechartsAreaChart,
  Bar as RechartsBar,
  BarChart as RechartsBarChart,
  CartesianGrid as RechartsCartesianGrid,
  Cell as RechartsCell,
  ComposedChart as RechartsComposedChart,
  Legend as RechartsLegend,
  Line as RechartsLine,
  LineChart as RechartsLineChart,
  Pie as RechartsPie,
  PieChart as RechartsPieChart,
  PolarAngleAxis as RechartsPolarAngleAxis,
  PolarGrid as RechartsPolarGrid,
  PolarRadiusAxis as RechartsPolarRadiusAxis,
  Radar as RechartsRadar,
  RadarChart as RechartsRadarChart,
  RadialBar as RechartsRadialBar,
  RadialBarChart as RechartsRadialBarChart,
  Rectangle as RechartsRectangle,
  ReferenceDot as RechartsReferenceDot,
  ReferenceLine as RechartsReferenceLine,
  ReferenceArea as RechartsReferenceArea,
  ResponsiveContainer as RechartsResponsiveContainer,
  Scatter as RechartsScatter,
  ScatterChart as RechartsScatterChart,
  Sector as RechartsSector,
  Tooltip as RechartsTooltip,
  Treemap as RechartsTreemap,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  ZAxis as RechartsZAxis,
} from "recharts"

import { cn } from "@/lib/utils"

// At the top of the file, after imports
const isBrowser = typeof window !== "undefined"

// Common chart components
export const ResponsiveContainer = React.forwardRef<
  React.ElementRef<typeof RechartsResponsiveContainer>,
  React.ComponentPropsWithoutRef<typeof RechartsResponsiveContainer>
>(({ className, height = 350, ...props }, ref) => {
  if (!isBrowser) {
    return <div className="h-full w-full" />
  }

  return <RechartsResponsiveContainer width="100%" height={height} {...props} ref={ref} className={cn("", className)} />
})
ResponsiveContainer.displayName = "ResponsiveContainer"

export const ChartTooltip = React.forwardRef<
  React.ElementRef<typeof RechartsTooltip>,
  React.ComponentPropsWithoutRef<typeof RechartsTooltip>
>(({ className, cursor = { fill: "hsl(var(--muted))", opacity: 0.15 }, ...props }, ref) => (
  <RechartsTooltip
    cursor={cursor}
    wrapperStyle={{ outline: "none" }}
    {...props}
    ref={ref}
    className={cn("", className)}
  />
))
ChartTooltip.displayName = "ChartTooltip"

export const XAxis = React.forwardRef<
  React.ElementRef<typeof RechartsXAxis>,
  React.ComponentPropsWithoutRef<typeof RechartsXAxis>
>(({ className, tickLine = false, axisLine = false, ...props }, ref) => (
  <RechartsXAxis
    tickLine={tickLine}
    axisLine={axisLine}
    tick={{ transform: "translate(0, 6)" }}
    {...props}
    ref={ref}
    className={cn("", className)}
  />
))
XAxis.displayName = "XAxis"

export const YAxis = React.forwardRef<
  React.ElementRef<typeof RechartsYAxis>,
  React.ComponentPropsWithoutRef<typeof RechartsYAxis>
>(({ className, tickLine = false, axisLine = false, ...props }, ref) => (
  <RechartsYAxis
    tickLine={tickLine}
    axisLine={axisLine}
    tick={{ transform: "translate(-3, 0)" }}
    {...props}
    ref={ref}
    className={cn("", className)}
  />
))
YAxis.displayName = "YAxis"

export const ZAxis = React.forwardRef<
  React.ElementRef<typeof RechartsZAxis>,
  React.ComponentPropsWithoutRef<typeof RechartsZAxis>
>(({ className, ...props }, ref) => <RechartsZAxis {...props} ref={ref} className={cn("", className)} />)
ZAxis.displayName = "ZAxis"

export const CartesianGrid = React.forwardRef<
  React.ElementRef<typeof RechartsCartesianGrid>,
  React.ComponentPropsWithoutRef<typeof RechartsCartesianGrid>
>(({ className, horizontal = true, vertical = false, ...props }, ref) => (
  <RechartsCartesianGrid
    horizontal={horizontal}
    vertical={vertical}
    strokeDasharray="3 3"
    stroke="hsl(var(--border))"
    {...props}
    ref={ref}
    className={cn("", className)}
  />
))
CartesianGrid.displayName = "CartesianGrid"

export const Legend = React.forwardRef<
  React.ElementRef<typeof RechartsLegend>,
  React.ComponentPropsWithoutRef<typeof RechartsLegend>
>(({ className, verticalAlign = "middle", align = "right", layout = "vertical", ...props }, ref) => (
  <RechartsLegend
    verticalAlign={verticalAlign}
    align={align}
    layout={layout}
    {...props}
    ref={ref}
    className={cn("", className)}
  />
))
Legend.displayName = "Legend"

export const Tooltip = React.forwardRef<
  React.ElementRef<typeof RechartsTooltip>,
  React.ComponentPropsWithoutRef<typeof RechartsTooltip>
>(({ className, cursor = { fill: "hsl(var(--muted))", opacity: 0.15 }, ...props }, ref) => (
  <RechartsTooltip
    cursor={cursor}
    wrapperStyle={{ outline: "none" }}
    {...props}
    ref={ref}
    className={cn("", className)}
  />
))
Tooltip.displayName = "Tooltip"

export const ReferenceLine = React.forwardRef<
  React.ElementRef<typeof RechartsReferenceLine>,
  React.ComponentPropsWithoutRef<typeof RechartsReferenceLine>
>(({ className, stroke = "hsl(var(--border))", ...props }, ref) => (
  <RechartsReferenceLine stroke={stroke} {...props} ref={ref} className={cn("", className)} />
))
ReferenceLine.displayName = "ReferenceLine"

export const ReferenceArea = React.forwardRef<
  React.ElementRef<typeof RechartsReferenceArea>,
  React.ComponentPropsWithoutRef<typeof RechartsReferenceArea>
>(({ className, fill = "hsl(var(--muted))", fillOpacity = 0.15, ...props }, ref) => (
  <RechartsReferenceArea fill={fill} fillOpacity={fillOpacity} {...props} ref={ref} className={cn("", className)} />
))
ReferenceArea.displayName = "ReferenceArea"

export const ReferenceDot = React.forwardRef<
  React.ElementRef<typeof RechartsReferenceDot>,
  React.ComponentPropsWithoutRef<typeof RechartsReferenceDot>
>(({ className, fill = "hsl(var(--primary))", stroke = "hsl(var(--background))", ...props }, ref) => (
  <RechartsReferenceDot fill={fill} stroke={stroke} {...props} ref={ref} className={cn("", className)} />
))
ReferenceDot.displayName = "ReferenceDot"

// Line chart components
export const LineChart = React.forwardRef<
  React.ElementRef<typeof RechartsLineChart>,
  React.ComponentPropsWithoutRef<typeof RechartsLineChart>
>(({ className, ...props }, ref) => <RechartsLineChart {...props} ref={ref} className={cn("", className)} />)
LineChart.displayName = "LineChart"

export const Line = React.forwardRef<
  React.ElementRef<typeof RechartsLine>,
  React.ComponentPropsWithoutRef<typeof RechartsLine>
>(({ className, stroke = "hsl(var(--primary))", activeDot = { r: 8 }, ...props }, ref) => (
  <RechartsLine stroke={stroke} activeDot={activeDot} {...props} ref={ref} className={cn("", className)} />
))
Line.displayName = "Line"

// Area chart components
export const AreaChart = React.forwardRef<
  React.ElementRef<typeof RechartsAreaChart>,
  React.ComponentPropsWithoutRef<typeof RechartsAreaChart>
>(({ className, ...props }, ref) => <RechartsAreaChart {...props} ref={ref} className={cn("", className)} />)
AreaChart.displayName = "AreaChart"

export const Area = React.forwardRef<
  React.ElementRef<typeof RechartsArea>,
  React.ComponentPropsWithoutRef<typeof RechartsArea>
>(({ className, stroke = "hsl(var(--primary))", fill = "hsl(var(--primary))", fillOpacity = 0.2, ...props }, ref) => (
  <RechartsArea
    stroke={stroke}
    fill={fill}
    fillOpacity={fillOpacity}
    {...props}
    ref={ref}
    className={cn("", className)}
  />
))
Area.displayName = "Area"

// Bar chart components
export const BarChart = React.forwardRef<
  React.ElementRef<typeof RechartsBarChart>,
  React.ComponentPropsWithoutRef<typeof RechartsBarChart>
>(({ className, ...props }, ref) => <RechartsBarChart {...props} ref={ref} className={cn("", className)} />)
BarChart.displayName = "BarChart"

export const Bar = React.forwardRef<
  React.ElementRef<typeof RechartsBar>,
  React.ComponentPropsWithoutRef<typeof RechartsBar>
>(({ className, fill = "hsl(var(--primary))", radius = [4, 4, 0, 0], ...props }, ref) => (
  <RechartsBar fill={fill} radius={radius} {...props} ref={ref} className={cn("", className)} />
))
Bar.displayName = "Bar"

// Composed chart components
export const ComposedChart = React.forwardRef<
  React.ElementRef<typeof RechartsComposedChart>,
  React.ComponentPropsWithoutRef<typeof RechartsComposedChart>
>(({ className, ...props }, ref) => <RechartsComposedChart {...props} ref={ref} className={cn("", className)} />)
ComposedChart.displayName = "ComposedChart"

// Scatter chart components
export const ScatterChart = React.forwardRef<
  React.ElementRef<typeof RechartsScatterChart>,
  React.ComponentPropsWithoutRef<typeof RechartsScatterChart>
>(({ className, ...props }, ref) => <RechartsScatterChart {...props} ref={ref} className={cn("", className)} />)
ScatterChart.displayName = "ScatterChart"

export const Scatter = React.forwardRef<
  React.ElementRef<typeof RechartsScatter>,
  React.ComponentPropsWithoutRef<typeof RechartsScatter>
>(({ className, fill = "hsl(var(--primary))", ...props }, ref) => (
  <RechartsScatter fill={fill} {...props} ref={ref} className={cn("", className)} />
))
Scatter.displayName = "Scatter"

// Pie chart components
export const PieChart = React.forwardRef<
  React.ElementRef<typeof RechartsPieChart>,
  React.ComponentPropsWithoutRef<typeof RechartsPieChart>
>(({ className, ...props }, ref) => <RechartsPieChart {...props} ref={ref} className={cn("", className)} />)
PieChart.displayName = "PieChart"

export const Pie = React.forwardRef<
  React.ElementRef<typeof RechartsPie>,
  React.ComponentPropsWithoutRef<typeof RechartsPie>
>(({ className, ...props }, ref) => <RechartsPie {...props} ref={ref} className={cn("", className)} />)
Pie.displayName = "Pie"

// Radar chart components
export const RadarChart = React.forwardRef<
  React.ElementRef<typeof RechartsRadarChart>,
  React.ComponentPropsWithoutRef<typeof RechartsRadarChart>
>(({ className, ...props }, ref) => <RechartsRadarChart {...props} ref={ref} className={cn("", className)} />)
RadarChart.displayName = "RadarChart"

export const Radar = React.forwardRef<
  React.ElementRef<typeof RechartsRadar>,
  React.ComponentPropsWithoutRef<typeof RechartsRadar>
>(({ className, ...props }, ref) => <RechartsRadar {...props} ref={ref} className={cn("", className)} />)
Radar.displayName = "Radar"

export const PolarGrid = React.forwardRef<
  React.ElementRef<typeof RechartsPolarGrid>,
  React.ComponentPropsWithoutRef<typeof RechartsPolarGrid>
>(({ className, ...props }, ref) => <RechartsPolarGrid {...props} ref={ref} className={cn("", className)} />)
PolarGrid.displayName = "PolarGrid"

export const PolarAngleAxis = React.forwardRef<
  React.ElementRef<typeof RechartsPolarAngleAxis>,
  React.ComponentPropsWithoutRef<typeof RechartsPolarAngleAxis>
>(({ className, ...props }, ref) => <RechartsPolarAngleAxis {...props} ref={ref} className={cn("", className)} />)
PolarAngleAxis.displayName = "PolarAngleAxis"

export const PolarRadiusAxis = React.forwardRef<
  React.ElementRef<typeof RechartsPolarRadiusAxis>,
  React.ComponentPropsWithoutRef<typeof RechartsPolarRadiusAxis>
>(({ className, ...props }, ref) => <RechartsPolarRadiusAxis {...props} ref={ref} className={cn("", className)} />)
PolarRadiusAxis.displayName = "PolarRadiusAxis"

// Radial bar chart components
export const RadialBarChart = React.forwardRef<
  React.ElementRef<typeof RechartsRadialBarChart>,
  React.ComponentPropsWithoutRef<typeof RechartsRadialBarChart>
>(({ className, ...props }, ref) => <RechartsRadialBarChart {...props} ref={ref} className={cn("", className)} />)
RadialBarChart.displayName = "RadialBarChart"

export const RadialBar = React.forwardRef<
  React.ElementRef<typeof RechartsRadialBar>,
  React.ComponentPropsWithoutRef<typeof RechartsRadialBar>
>(({ className, ...props }, ref) => <RechartsRadialBar {...props} ref={ref} className={cn("", className)} />)
RadialBar.displayName = "RadialBar"

// Treemap components
export const Treemap = React.forwardRef<
  React.ElementRef<typeof RechartsTreemap>,
  React.ComponentPropsWithoutRef<typeof RechartsTreemap>
>(({ className, ...props }, ref) => <RechartsTreemap {...props} ref={ref} className={cn("", className)} />)
Treemap.displayName = "Treemap"

// Other components
export const Cell = React.forwardRef<
  React.ElementRef<typeof RechartsCell>,
  React.ComponentPropsWithoutRef<typeof RechartsCell>
>(({ className, ...props }, ref) => <RechartsCell {...props} ref={ref} className={cn("", className)} />)
Cell.displayName = "Cell"

export const Sector = React.forwardRef<
  React.ElementRef<typeof RechartsSector>,
  React.ComponentPropsWithoutRef<typeof RechartsSector>
>(({ className, ...props }, ref) => <RechartsSector {...props} ref={ref} className={cn("", className)} />)
Sector.displayName = "Sector"

export const Rectangle = React.forwardRef<
  React.ElementRef<typeof RechartsRectangle>,
  React.ComponentPropsWithoutRef<typeof RechartsRectangle>
>(({ className, ...props }, ref) => <RechartsRectangle {...props} ref={ref} className={cn("", className)} />)
Rectangle.displayName = "Rectangle"
