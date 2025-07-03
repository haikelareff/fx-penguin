"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from "lucide-react"

// Sample market data
const generateMarketData = (days: number, baseValue: number, volatility: number) => {
  const data = []
  const now = new Date()

  for (let i = days; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    const value = Math.max(
      0,
      baseValue + Math.sin(i / (days / 6)) * baseValue * 0.02 + (Math.random() - 0.5) * volatility,
    )

    data.push({
      date: date.toISOString().split("T")[0],
      price: Number.parseFloat(value.toFixed(5)),
    })
  }

  return data
}

const eurUsdData = generateMarketData(30, 1.0845, 0.005)
const gbpUsdData = generateMarketData(30, 1.2634, 0.008)
const usdJpyData = generateMarketData(30, 149.85, 0.5)

const formatPrice = (price: number, pair: string) => {
  if (pair === "USD/JPY") {
    return price.toFixed(2)
  }
  return price.toFixed(5)
}

export function MarketTrends() {
  const [selectedPair, setSelectedPair] = useState("EURUSD")
  const [period, setPeriod] = useState("1D")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getCurrentData = () => {
    switch (selectedPair) {
      case "EURUSD":
        return eurUsdData
      case "GBPUSD":
        return gbpUsdData
      case "USDJPY":
        return usdJpyData
      default:
        return eurUsdData
    }
  }

  const data = getCurrentData()
  const currentPrice = data[data.length - 1]?.price || 0
  const previousPrice = data[data.length - 2]?.price || 0
  const change = currentPrice - previousPrice
  const changePercent = (change / previousPrice) * 100

  if (!mounted) {
    return (
      <Card className="forex-card w-full">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Market Trends</CardTitle>
              <CardDescription>Real-time forex market data and analysis</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="forex-stat-card">
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
    <Card className="forex-card w-full">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle>Market Trends</CardTitle>
            <CardDescription>Real-time forex market data and analysis</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="forex-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">Current Price</div>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="text-2xl font-semibold mt-1">{formatPrice(currentPrice, selectedPair)}</div>
              </CardContent>
            </Card>
            <Card className="forex-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">Change</div>
                  {change >= 0 ? (
                    <TrendingUp className="h-4 w-4 text-forex-green" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-forex-red" />
                  )}
                </div>
                <div className={`text-2xl font-semibold mt-1 ${change >= 0 ? "text-forex-green" : "text-forex-red"}`}>
                  {change >= 0 ? "+" : ""}
                  {change.toFixed(5)}
                </div>
              </CardContent>
            </Card>
            <Card className="forex-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">Change %</div>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </div>
                <div
                  className={`text-2xl font-semibold mt-1 ${changePercent >= 0 ? "text-forex-green" : "text-forex-red"}`}
                >
                  {changePercent >= 0 ? "+" : ""}
                  {changePercent.toFixed(2)}%
                </div>
              </CardContent>
            </Card>
            <Card className="forex-stat-card">
              <CardContent className="p-4">
                <div className="text-sm font-medium text-muted-foreground">Volatility</div>
                <div className="text-sm font-semibold mt-1">{selectedPair === "USDJPY" ? "Medium" : "Low"}</div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={selectedPair} onValueChange={setSelectedPair} className="w-full">
            <TabsList className="w-full justify-start mb-6 bg-transparent p-0 h-auto border-b">
              <TabsTrigger
                value="EURUSD"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-forex-green data-[state=active]:text-forex-green data-[state=active]:bg-transparent px-4 py-2"
              >
                EUR/USD
              </TabsTrigger>
              <TabsTrigger
                value="GBPUSD"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-forex-green data-[state=active]:text-forex-green data-[state=active]:bg-transparent px-4 py-2"
              >
                GBP/USD
              </TabsTrigger>
              <TabsTrigger
                value="USDJPY"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-forex-green data-[state=active]:text-forex-green data-[state=active]:bg-transparent px-4 py-2"
              >
                USD/JPY
              </TabsTrigger>
            </TabsList>

            <TabsContent value="EURUSD" className="mt-0">
              <div className="h-[300px] w-full border rounded-lg p-4 bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">EUR/USD Price Chart</h3>
                    <div className="text-sm text-muted-foreground">Last 30 days</div>
                  </div>
                  <div className="flex-1 flex items-end">
                    <div className="w-full flex items-end justify-between h-[220px]">
                      {eurUsdData
                        .filter((_, i) => i % 3 === 0)
                        .map((day, i) => {
                          const maxValue = Math.max(...eurUsdData.map((d) => d.price))
                          const minValue = Math.min(...eurUsdData.map((d) => d.price))
                          const height = ((day.price - minValue) / (maxValue - minValue)) * 200

                          return (
                            <div
                              key={i}
                              className="flex flex-col items-center group relative"
                              style={{ width: `${100 / (eurUsdData.length / 3)}%` }}
                            >
                              <div className="w-full px-1 flex justify-center">
                                <div className="w-2 bg-forex-blue rounded-t-sm" style={{ height: `${height}px` }}></div>
                              </div>
                              <div className="mt-2 text-xs">{new Date(day.date).getDate()}</div>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="GBPUSD" className="mt-0">
              <div className="h-[300px] w-full border rounded-lg p-4 bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">GBP/USD Price Chart</h3>
                    <div className="text-sm text-muted-foreground">Last 30 days</div>
                  </div>
                  <div className="flex-1 flex items-end">
                    <div className="w-full flex items-end justify-between h-[220px]">
                      {gbpUsdData
                        .filter((_, i) => i % 3 === 0)
                        .map((day, i) => {
                          const maxValue = Math.max(...gbpUsdData.map((d) => d.price))
                          const minValue = Math.min(...gbpUsdData.map((d) => d.price))
                          const height = ((day.price - minValue) / (maxValue - minValue)) * 200

                          return (
                            <div
                              key={i}
                              className="flex flex-col items-center group relative"
                              style={{ width: `${100 / (gbpUsdData.length / 3)}%` }}
                            >
                              <div className="w-full px-1 flex justify-center">
                                <div className="w-2 bg-forex-red rounded-t-sm" style={{ height: `${height}px` }}></div>
                              </div>
                              <div className="mt-2 text-xs">{new Date(day.date).getDate()}</div>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="USDJPY" className="mt-0">
              <div className="h-[300px] w-full border rounded-lg p-4 bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">USD/JPY Price Chart</h3>
                    <div className="text-sm text-muted-foreground">Last 30 days</div>
                  </div>
                  <div className="flex-1 flex items-end">
                    <div className="w-full flex items-end justify-between h-[220px]">
                      {usdJpyData
                        .filter((_, i) => i % 3 === 0)
                        .map((day, i) => {
                          const maxValue = Math.max(...usdJpyData.map((d) => d.price))
                          const minValue = Math.min(...usdJpyData.map((d) => d.price))
                          const height = ((day.price - minValue) / (maxValue - minValue)) * 200

                          return (
                            <div
                              key={i}
                              className="flex flex-col items-center group relative"
                              style={{ width: `${100 / (usdJpyData.length / 3)}%` }}
                            >
                              <div className="w-full px-1 flex justify-center">
                                <div className="w-2 bg-forex-gold rounded-t-sm" style={{ height: `${height}px` }}></div>
                              </div>
                              <div className="mt-2 text-xs">{new Date(day.date).getDate()}</div>
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
