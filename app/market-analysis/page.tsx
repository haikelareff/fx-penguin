import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, BarChart3, Calendar, Clock, Eye } from "lucide-react"

export default function MarketAnalysisPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Market Analysis & Insights</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay ahead of the markets with our expert analysis, daily insights, and comprehensive market reports.
          </p>
        </div>

        {/* Market Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Today's Market Overview</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">EUR/USD</p>
                    <p className="text-lg font-semibold">1.0845</p>
                  </div>
                  <div className="flex items-center gap-1 text-forex-green">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">+0.12%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">GBP/USD</p>
                    <p className="text-lg font-semibold">1.2634</p>
                  </div>
                  <div className="flex items-center gap-1 text-forex-red">
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-sm">-0.08%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">USD/JPY</p>
                    <p className="text-lg font-semibold">149.82</p>
                  </div>
                  <div className="flex items-center gap-1 text-forex-green">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">+0.25%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">AUD/USD</p>
                    <p className="text-lg font-semibold">0.6789</p>
                  </div>
                  <div className="flex items-center gap-1 text-forex-red">
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-sm">-0.15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Analysis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-5 w-5 text-forex-green" />
                  <Badge variant="outline">Technical Analysis</Badge>
                </div>
                <CardTitle>EUR/USD Weekly Outlook: Bulls Target 1.0900</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The EUR/USD pair shows strong bullish momentum after breaking above key resistance. Technical
                  indicators suggest further upside potential.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>1.2K views</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-forex-blue" />
                  <Badge variant="outline">Fundamental Analysis</Badge>
                </div>
                <CardTitle>Fed Rate Decision Impact on USD Pairs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Analyzing the potential market impact of the upcoming Federal Reserve interest rate decision on major
                  USD currency pairs.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 14, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>2.1K views</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Daily Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Daily Market Insights</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-forex-green/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-forex-green" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">Morning Market Brief</h3>
                      <Badge variant="outline">08:00 GMT</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Asian markets opened mixed as investors digest overnight US economic data. USD strength continues
                      amid hawkish Fed expectations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-forex-blue/10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-forex-blue" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">Economic Calendar Alert</h3>
                      <Badge variant="outline">High Impact</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      US CPI data release at 13:30 GMT expected to show continued disinflation trend. Watch for USD
                      volatility across major pairs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section>
          <Card className="bg-gradient-to-r from-forex-green/10 to-forex-blue/10 border-forex-green/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated with Market Analysis</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get daily market insights, weekly analysis reports, and breaking news alerts delivered to your inbox.
              </p>
              <Button className="bg-forex-green hover:bg-forex-darkGreen">Subscribe to Newsletter</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
