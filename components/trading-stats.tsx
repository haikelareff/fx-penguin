import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react"

export function TradingStats() {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-muted-foreground">Market Overview</h2>
      <div className="space-y-2">
        <Card className="forex-stat-card">
          <CardHeader className="py-3 px-4">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-forex-green" />
              EUR/USD
            </CardTitle>
          </CardHeader>
          <CardContent className="py-3 px-4 pt-0">
            <div className="text-2xl font-semibold text-forex-green">1.0845</div>
            <p className="text-xs text-forex-green">+0.12% today</p>
          </CardContent>
        </Card>

        <Card className="forex-stat-card">
          <CardHeader className="py-3 px-4">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingDown className="h-4 w-4 mr-2 text-forex-red" />
              GBP/USD
            </CardTitle>
          </CardHeader>
          <CardContent className="py-3 px-4 pt-0">
            <div className="text-2xl font-semibold text-forex-red">1.2634</div>
            <p className="text-xs text-forex-red">-0.08% today</p>
          </CardContent>
        </Card>

        <Card className="forex-stat-card">
          <CardHeader className="py-3 px-4">
            <CardTitle className="text-sm font-medium flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
              Active Traders
            </CardTitle>
          </CardHeader>
          <CardContent className="py-3 px-4 pt-0">
            <div className="text-2xl font-semibold">24.5K</div>
            <p className="text-xs text-muted-foreground">Online now</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
