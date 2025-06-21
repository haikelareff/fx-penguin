"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Calendar, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"

// Sample data for download trends
const generateData = (days: number, baseValue: number, volatility: number) => {
  const data = []
  const now = new Date()

  for (let i = days; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    // Generate a somewhat realistic trend with some randomness
    const value = Math.max(
      0,
      baseValue + Math.sin(i / (days / 6)) * baseValue * 0.3 + (Math.random() - 0.5) * volatility,
    )

    data.push({
      date: date.toISOString().split("T")[0],
      downloads: Math.round(value),
    })
  }

  return data
}

// Generate data for different time periods
const weekData = generateData(7, 50000, 10000).map((item, index, arr) => {
  // Add hourly breakdown for weekly data
  const prevDay = index > 0 ? arr[index - 1].downloads : item.downloads
  const change = ((item.downloads - prevDay) / prevDay) * 100

  return {
    ...item,
    morning: Math.round(item.downloads * 0.2),
    afternoon: Math.round(item.downloads * 0.3),
    evening: Math.round(item.downloads * 0.35),
    night: Math.round(item.downloads * 0.15),
    // Add day-over-day change
    change,
    // Add peak time
    peakHour: 14 + Math.floor(Math.random() * 6),
    // Add day type
    isWeekend: new Date(item.date).getDay() === 0 || new Date(item.date).getDay() === 6,
  }
})

const monthData = generateData(30, 45000, 15000).map((item, index, arr) => {
  // Add previous period comparison for monthly data
  const prevPeriodFactor = 0.85 + Math.random() * 0.3 // 0.85 to 1.15
  const weekOfMonth = Math.floor(index / 7) + 1
  const prevDay = index > 0 ? arr[index - 1].downloads : item.downloads
  const change = ((item.downloads - prevDay) / prevDay) * 100

  // Determine if this is a version release day
  const isVersionRelease = Math.random() > 0.9
  const versionType = isVersionRelease
    ? Math.random() > 0.7
      ? "major"
      : Math.random() > 0.5
        ? "minor"
        : "patch"
    : null

  // Generate version number
  let versionRelease = null
  if (isVersionRelease) {
    if (versionType === "major") {
      versionRelease = `v${Math.floor(Math.random() * 5)}.0.0`
    } else if (versionType === "minor") {
      versionRelease = `v${Math.floor(Math.random() * 3)}.${Math.floor(Math.random() * 10)}.0`
    } else {
      versionRelease = `v${Math.floor(Math.random() * 3)}.${Math.floor(Math.random() * 5)}.${Math.floor(Math.random() * 10)}`
    }
  }

  return {
    ...item,
    previousPeriod: Math.round(item.downloads * prevPeriodFactor),
    weekOfMonth,
    change,
    versionRelease,
    versionType,
    // Add day type
    isWeekend: new Date(item.date).getDay() === 0 || new Date(item.date).getDay() === 6,
  }
})

const yearData = (() => {
  const data = generateData(365, 40000, 20000)
  const monthlyData = []

  // Group by month for yearly data
  const months = {}
  data.forEach((item) => {
    const month = item.date.substring(0, 7) // YYYY-MM
    if (!months[month]) {
      months[month] = { downloads: 0, count: 0 }
    }
    months[month].downloads += item.downloads
    months[month].count += 1
  })

  // Calculate monthly averages and add year-over-year comparison
  Object.entries(months).forEach(([month, data], index) => {
    const monthObj = data as { downloads: number; count: number }
    const avgDownloads = Math.round(monthObj.downloads / monthObj.count)
    const prevYearDownloads = avgDownloads * (0.7 + Math.random() * 0.4) // 0.7 to 1.1

    // Determine if this is a major release month
    const isMajorRelease = index === 3 || index === 9
    const isMinorRelease = !isMajorRelease && (index === 1 || index === 5 || index === 7)

    monthlyData.push({
      date: month + "-01", // First day of month
      downloads: avgDownloads,
      previousYear: Math.round(prevYearDownloads),
      growth: Math.round(((avgDownloads - prevYearDownloads) / prevYearDownloads) * 100),
      majorRelease: isMajorRelease,
      minorRelease: isMinorRelease,
      releaseVersion: isMajorRelease
        ? `v${Math.floor(index / 3)}.0.0`
        : isMinorRelease
          ? `v${Math.floor(index / 3)}.${(index % 3) + 1}.0`
          : null,
    })
  })

  return monthlyData
})()

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

const formatDate = (dateStr: string, period: string) => {
  const date = new Date(dateStr)

  if (period === "year") {
    return new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)
  }

  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date)
}

export function PackageTrends() {
  const [selectedPackage, setSelectedPackage] = useState("ai")
  const [period, setPeriod] = useState("week")
  const [showVersions, setShowVersions] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Add useEffect to handle client-side rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // Select the appropriate data based on the period
  const data = period === "week" ? weekData : period === "month" ? monthData : yearData

  // Calculate total downloads and growth
  const calculateTotals = () => {
    if (period === "week") {
      const totalDownloads = weekData.reduce((sum, item) => sum + item.downloads, 0)
      const firstValue = weekData[0]?.downloads || 0
      const lastValue = weekData[weekData.length - 1]?.downloads || 0
      const growthRate = firstValue > 0 ? ((lastValue - firstValue) / firstValue) * 100 : 0
      return { totalDownloads, growthRate }
    } else if (period === "month") {
      const totalDownloads = monthData.reduce((sum, item) => sum + item.downloads, 0)
      const totalPrevious = monthData.reduce((sum, item) => sum + (item.previousPeriod || 0), 0)
      const growthRate = totalPrevious > 0 ? ((totalDownloads - totalPrevious) / totalPrevious) * 100 : 0
      return { totalDownloads, growthRate }
    } else {
      const totalDownloads = yearData.reduce((sum, item) => sum + item.downloads * 30, 0) // Approximate monthly data to yearly
      const totalPrevious = yearData.reduce((sum, item) => sum + (item.previousYear || 0) * 30, 0)
      const growthRate = totalPrevious > 0 ? ((totalDownloads - totalPrevious) / totalPrevious) * 100 : 0
      return { totalDownloads, growthRate }
    }
  }

  const { totalDownloads, growthRate } = calculateTotals()

  // Calculate peak day/month
  const getPeakPeriod = () => {
    if (period === "week" || period === "month") {
      const peak = [...data].sort((a, b) => b.downloads - a.downloads)[0]
      if (peak) {
        const date = new Date(peak.date)
        return date.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        })
      }
    } else {
      const peak = [...data].sort((a, b) => b.downloads - a.downloads)[0]
      if (peak) {
        const date = new Date(peak.date)
        return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
      }
    }
    return "N/A"
  }

  // Show loading state while client-side rendering is happening
  if (!mounted) {
    return (
      <Card className="npm-card w-full">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Download Trends</CardTitle>
              <CardDescription>Package download statistics over time</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Skeleton cards */}
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="npm-stat-card">
                  <CardContent className="p-4">
                    <div className="h-4 w-24 bg-muted rounded shimmer mb-2"></div>
                    <div className="h-6 w-16 bg-muted rounded shimmer"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="h-[300px] w-full bg-muted/20 rounded-lg shimmer"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="npm-card w-full">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle>Download Trends</CardTitle>
            <CardDescription>Package download statistics over time</CardDescription>
          </div>
          <div></div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="npm-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">Total Downloads</div>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="text-2xl font-semibold mt-1">{formatNumber(totalDownloads)}</div>
              </CardContent>
            </Card>
            <Card className="npm-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">Growth Rate</div>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </div>
                <div
                  className={`text-2xl font-semibold mt-1 flex items-center ${growthRate >= 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {growthRate >= 0 ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  {Math.abs(growthRate).toFixed(1)}%
                </div>
              </CardContent>
            </Card>
            <Card className="npm-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">
                    {period === "year" ? "Monthly Average" : "Daily Average"}
                  </div>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="text-2xl font-semibold mt-1">
                  {formatNumber(Math.round(totalDownloads / data.length))}
                </div>
              </CardContent>
            </Card>
            <Card className="npm-stat-card">
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Peak Period</div>
                <div className="text-sm font-semibold mt-1 line-clamp-2">{getPeakPeriod()}</div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={period} onValueChange={setPeriod} className="w-full">
            <TabsList className="w-full justify-start mb-6 bg-transparent p-0 h-auto border-b">
              <TabsTrigger
                value="week"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-npm-red data-[state=active]:text-npm-red data-[state=active]:bg-transparent px-4 py-2"
              >
                7 Days
              </TabsTrigger>
              <TabsTrigger
                value="month"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-npm-red data-[state=active]:text-npm-red data-[state=active]:bg-transparent px-4 py-2"
              >
                30 Days
              </TabsTrigger>
              <TabsTrigger
                value="year"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-npm-red data-[state=active]:text-npm-red data-[state=active]:bg-transparent px-4 py-2"
              >
                1 Year
              </TabsTrigger>
            </TabsList>

            {/* Weekly Chart - Bar Chart with Average Line */}
            <TabsContent value="week" className="mt-0">
              <div className="h-[300px] w-full border rounded-lg p-4 bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-npm-red mr-2"></div>
                        <span className="text-xs">Current Period</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[hsl(var(--muted-foreground))] mr-2"></div>
                        <span className="text-xs">Previous Day</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 relative">
                    {/* Reference line for average */}
                    <div
                      className="absolute w-full border-t border-dashed border-npm-red/50"
                      style={{
                        top: `${100 - (weekData.reduce((sum, item) => sum + item.downloads, 0) / weekData.length / Math.max(...weekData.map((d) => d.downloads))) * 100}%`,
                      }}
                    >
                      <span className="absolute right-0 -top-3 text-[10px] text-npm-red">Avg</span>
                    </div>

                    <div className="w-full h-full flex items-end">
                      <div className="w-full flex items-end justify-between h-[220px]">
                        {weekData.map((day, i) => {
                          const date = new Date(day.date)
                          const dayName = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date)
                          const maxValue = Math.max(...weekData.map((d) => d.downloads))
                          const height = (day.downloads / maxValue) * 200
                          const prevDay = i > 0 ? weekData[i - 1].downloads : 0
                          const prevHeight = (prevDay / maxValue) * 200

                          return (
                            <div
                              key={i}
                              className="flex flex-col items-center group relative"
                              style={{ width: `${100 / weekData.length}%` }}
                            >
                              <div className="w-full px-1 flex justify-center">
                                <div className="relative w-1/2 flex flex-col-reverse">
                                  <div
                                    className="w-full bg-npm-red rounded-t-sm"
                                    style={{ height: `${height}px` }}
                                  ></div>
                                </div>
                                <div className="relative w-1/2 flex flex-col-reverse">
                                  <div
                                    className="w-full bg-[hsl(var(--muted-foreground))] opacity-50 rounded-t-sm"
                                    style={{ height: `${prevHeight}px` }}
                                  ></div>
                                </div>
                              </div>
                              <div className="mt-2 text-xs">{dayName}</div>

                              {/* Tooltip on hover */}
                              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                <div className="bg-background border rounded-md shadow-md p-2 w-48 text-xs">
                                  <div className="font-medium">
                                    {new Date(day.date).toLocaleDateString("en-US", {
                                      weekday: "long",
                                      month: "short",
                                      day: "numeric",
                                    })}
                                  </div>
                                  <div className="mt-1">{formatNumber(day.downloads)} total downloads</div>
                                  <div
                                    className={`text-xs mt-1 ${day.change >= 0 ? "text-green-500" : "text-red-500"}`}
                                  >
                                    {day.change >= 0 ? "+" : ""}
                                    {day.change.toFixed(1)}% from previous day
                                  </div>
                                  <div className="mt-1">Previous day: {formatNumber(prevDay)}</div>
                                  <div className="mt-2 space-y-1">
                                    <div className="flex justify-between">
                                      <span>Morning:</span>
                                      <span>{formatNumber(day.morning)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Afternoon:</span>
                                      <span>{formatNumber(day.afternoon)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Evening:</span>
                                      <span>{formatNumber(day.evening)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Night:</span>
                                      <span>{formatNumber(day.night)}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Monthly Chart - Line Chart with Previous Period Comparison */}
            <TabsContent value="month" className="mt-0">
              <div className="h-[300px] w-full border rounded-lg p-4 bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-npm-red mr-2"></div>
                        <span className="text-xs">Current Period</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[hsl(var(--muted-foreground))] mr-2"></div>
                        <span className="text-xs">Previous Period</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 relative">
                    {/* Reference line for average */}
                    <div
                      className="absolute w-full border-t border-dashed border-npm-red/50"
                      style={{
                        top: `${100 - (monthData.reduce((sum, item) => sum + item.downloads, 0) / monthData.length / Math.max(...monthData.map((d) => d.downloads))) * 100}%`,
                      }}
                    >
                      <span className="absolute right-0 -top-3 text-[10px] text-npm-red">Avg</span>
                    </div>

                    <div className="w-full h-full flex items-end">
                      <div className="w-full flex items-end justify-between h-[220px]">
                        {monthData
                          .filter((_, i) => i % 3 === 0)
                          .map((day, i) => {
                            const date = new Date(day.date)
                            const dayNum = date.getDate()
                            const maxValue = Math.max(...monthData.map((d) => d.downloads))
                            const height = (day.downloads / maxValue) * 200
                            const prevHeight = (day.previousPeriod / maxValue) * 200

                            return (
                              <div
                                key={i}
                                className="flex flex-col items-center group relative"
                                style={{ width: `${100 / (monthData.length / 3)}%` }}
                              >
                                <div className="w-full px-1 flex justify-center">
                                  <div className="relative w-1/2 flex flex-col-reverse">
                                    <div
                                      className="w-full bg-npm-red rounded-t-sm"
                                      style={{ height: `${height}px` }}
                                    ></div>
                                  </div>
                                  <div className="relative w-1/2 flex flex-col-reverse">
                                    <div
                                      className="w-full bg-[hsl(var(--muted-foreground))] opacity-50 rounded-t-sm"
                                      style={{ height: `${prevHeight}px` }}
                                    ></div>
                                  </div>
                                </div>
                                <div className="mt-2 text-xs">{dayNum}</div>

                                {/* Tooltip on hover */}
                                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                  <div className="bg-background border rounded-md shadow-md p-2 w-48 text-xs">
                                    <div className="font-medium">
                                      {new Date(day.date).toLocaleDateString("en-US", {
                                        weekday: "long",
                                        month: "short",
                                        day: "numeric",
                                      })}
                                    </div>
                                    <div className="mt-1">{formatNumber(day.downloads)} downloads</div>
                                    {day.versionRelease && showVersions && (
                                      <div
                                        className={`mt-1 font-semibold ${
                                          day.versionType === "major"
                                            ? "text-npm-red"
                                            : day.versionType === "minor"
                                              ? "text-amber-500"
                                              : "text-green-500"
                                        }`}
                                      >
                                        {day.versionType === "major"
                                          ? "Major"
                                          : day.versionType === "minor"
                                            ? "Minor"
                                            : "Patch"}{" "}
                                        version {day.versionRelease} released
                                      </div>
                                    )}
                                    <div className="mt-1">Previous: {formatNumber(day.previousPeriod)}</div>
                                    <div className={`${day.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                                      {day.change >= 0 ? "+" : ""}
                                      {day.change.toFixed(1)}% change
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Yearly Chart - Composed Chart with Growth Rate */}
            <TabsContent value="year" className="mt-0">
              <div className="h-[300px] w-full border rounded-lg p-4 bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-npm-red mr-2"></div>
                        <span className="text-xs">Current Year</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[hsl(var(--muted-foreground))] mr-2"></div>
                        <span className="text-xs">Previous Year</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#82ca9d] mr-2"></div>
                        <span className="text-xs">Growth Rate</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex items-end">
                    <div className="w-full flex items-end justify-between h-[220px]">
                      {yearData.map((month, i) => {
                        const date = new Date(month.date)
                        const monthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)
                        const maxValue = Math.max(...yearData.map((d) => d.downloads))
                        const height = (month.downloads / maxValue) * 180
                        const prevHeight = (month.previousYear / maxValue) * 180

                        // Calculate growth line position (from 0-100%)
                        const growthMin = Math.min(...yearData.map((d) => d.growth))
                        const growthMax = Math.max(...yearData.map((d) => d.growth))
                        const growthRange = growthMax - growthMin
                        const growthPercent = growthRange > 0 ? ((month.growth - growthMin) / growthRange) * 100 : 50

                        return (
                          <div
                            key={i}
                            className="flex flex-col items-center group relative"
                            style={{ width: `${100 / yearData.length}%` }}
                          >
                            <div className="w-full px-1 flex justify-center">
                              <div className="relative w-1/2 flex flex-col-reverse">
                                <div
                                  className={`w-full rounded-t-sm ${month.majorRelease ? "bg-npm-red" : month.minorRelease ? "bg-npm-red/70" : "bg-npm-red/50"}`}
                                  style={{ height: `${height}px` }}
                                ></div>
                              </div>
                              <div className="relative w-1/2 flex flex-col-reverse">
                                <div
                                  className="w-full bg-[hsl(var(--muted-foreground))] opacity-50 rounded-t-sm"
                                  style={{ height: `${prevHeight}px` }}
                                ></div>
                              </div>
                            </div>

                            {/* Growth indicator dot */}
                            <div
                              className="absolute w-2 h-2 rounded-full bg-[#82ca9d] border border-background"
                              style={{
                                bottom: `${growthPercent}%`,
                                left: `calc(50% + 8px)`,
                              }}
                            ></div>

                            {/* Version release marker */}
                            {month.majorRelease && showVersions && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1">
                                <div className="text-[10px] text-npm-red font-medium">{month.releaseVersion}</div>
                              </div>
                            )}

                            <div className="mt-2 text-xs">{monthName}</div>

                            {/* Tooltip on hover */}
                            <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                              <div className="bg-background border rounded-md shadow-md p-2 w-48 text-xs">
                                <div className="font-medium">
                                  {new Date(month.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                                </div>
                                <div className="mt-1">{formatNumber(month.downloads)} avg. daily downloads</div>
                                {(month.majorRelease || month.minorRelease) && month.releaseVersion && showVersions && (
                                  <div
                                    className={`mt-1 font-semibold ${month.majorRelease ? "text-npm-red" : "text-amber-500"}`}
                                  >
                                    {month.majorRelease ? "Major" : "Minor"} version {month.releaseVersion} released
                                  </div>
                                )}
                                <div className="mt-1">Previous year: {formatNumber(month.previousYear)}</div>
                                <div className={`${month.growth >= 0 ? "text-green-500" : "text-red-500"}`}>
                                  {month.growth >= 0 ? "+" : ""}
                                  {month.growth}% year-over-year
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}
