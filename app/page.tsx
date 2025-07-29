"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import {
  ArrowUpRight,
  MessageCircle,
  Star,
  Shield,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Info,
  Zap,
  Target,
} from "lucide-react"

const brokerCategories = [
  { name: "Top Rated", count: 12, color: "bg-green-500" },
  { name: "People's Choice", count: 8, color: "bg-blue-500" },
  { name: "Recommended", count: 15, color: "bg-purple-500" },
  { name: "Scammer Alert", count: 3, color: "bg-red-500" },
]

const brokerListings = [
  {
    id: 1,
    rank: 1,
    name: "FP Markets",
    description: "Award-winning Australian forex and CFD broker with tight spreads and excellent execution",
    logo: "/placeholder-logo.svg",
    category: "Top Rated",
    overallRating: 4.8,
    ratings: {
      regulation: 4.9,
      costs: 4.7,
      platforms: 4.8,
      support: 4.6,
      execution: 4.9,
    },
    minDeposit: 100,
    spread: 0.1,
    leverage: 500,
    regulation: ["ASIC", "CySEC"],
    platforms: ["MT4", "MT5", "cTrader"],
    votes: 1247,
    comments: 89,
    tags: ["ECN", "Low Spreads", "Regulated"],
    isVerified: true,
    isSponsored: false,
  },
  {
    id: 2,
    rank: 2,
    name: "MetaTrader Pro",
    description: "Professional trading platform with advanced tools and competitive spreads for serious traders",
    logo: "/placeholder-logo.svg",
    category: "People's Choice",
    overallRating: 4.6,
    ratings: {
      regulation: 4.2,
      costs: 4.8,
      platforms: 4.9,
      support: 4.4,
      execution: 4.7,
    },
    minDeposit: 250,
    spread: 0.2,
    leverage: 400,
    regulation: ["Offshore"],
    platforms: ["MT4", "MT5"],
    votes: 892,
    comments: 67,
    tags: ["Advanced Tools", "Copy Trading"],
    isVerified: false,
    isSponsored: true,
  },
  {
    id: 3,
    rank: 3,
    name: "TradeFX Global",
    description: "Multi-asset broker offering forex, commodities, and indices with social trading features",
    logo: "/placeholder-logo.svg",
    category: "Recommended",
    overallRating: 4.5,
    ratings: {
      regulation: 4.7,
      costs: 4.3,
      platforms: 4.6,
      support: 4.5,
      execution: 4.4,
    },
    minDeposit: 500,
    spread: 0.3,
    leverage: 300,
    regulation: ["FCA", "ASIC"],
    platforms: ["MT4", "WebTrader"],
    votes: 654,
    comments: 43,
    tags: ["Social Trading", "Multi-Asset"],
    isVerified: true,
    isSponsored: false,
  },
  {
    id: 4,
    rank: 4,
    name: "SwiftTrade",
    description: "Fast execution specialist with ultra-low latency trading and institutional-grade infrastructure",
    logo: "/placeholder-logo.svg",
    category: "Top Rated",
    overallRating: 4.4,
    ratings: {
      regulation: 4.5,
      costs: 4.2,
      platforms: 4.6,
      support: 4.3,
      execution: 4.8,
    },
    minDeposit: 1000,
    spread: 0.15,
    leverage: 200,
    regulation: ["CySEC"],
    platforms: ["MT5", "cTrader"],
    votes: 423,
    comments: 31,
    tags: ["Fast Execution", "Institutional"],
    isVerified: true,
    isSponsored: false,
  },
  {
    id: 5,
    rank: 5,
    name: "ForexScam Ltd",
    description: "WARNING: Multiple reports of withdrawal issues and poor customer service. Avoid this broker.",
    logo: "/placeholder-logo.svg",
    category: "Scammer Alert",
    overallRating: 1.2,
    ratings: {
      regulation: 1.0,
      costs: 2.1,
      platforms: 2.0,
      support: 0.5,
      execution: 1.5,
    },
    minDeposit: 50,
    spread: 2.5,
    leverage: 1000,
    regulation: ["Unregulated"],
    platforms: ["Web Platform"],
    votes: 89,
    comments: 156,
    tags: ["Scammer", "Avoid"],
    isVerified: false,
    isSponsored: false,
  },
]

const alternativeBrokers = {
  minDeposit: [
    { name: "IC Markets", deposit: 50, rating: 4.7 },
    { name: "Pepperstone", deposit: 75, rating: 4.6 },
    { name: "XM Group", deposit: 25, rating: 4.4 },
  ],
  spread: [
    { name: "IC Markets", spread: 0.05, rating: 4.8 },
    { name: "Pepperstone", spread: 0.08, rating: 4.7 },
    { name: "Raw Markets", spread: 0.12, rating: 4.5 },
  ],
  leverage: [
    { name: "Exness", leverage: 2000, rating: 4.3 },
    { name: "HotForex", leverage: 1000, rating: 4.2 },
    { name: "XM Group", leverage: 888, rating: 4.4 },
  ],
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredBrokers =
    selectedCategory === "All"
      ? brokerListings
      : brokerListings.filter((broker) => broker.category === selectedCategory)

  const MinDepositPopover = ({ broker }: { broker: (typeof brokerListings)[0] }) => (
    <PopoverContent className="w-80">
      <div className="space-y-3">
        <h4 className="font-semibold">Lower Minimum Deposit Options</h4>
        <p className="text-sm text-muted-foreground">
          Compare {broker.name}'s ${broker.minDeposit} minimum deposit with these alternatives:
        </p>
        <div className="space-y-2">
          {alternativeBrokers.minDeposit.map((alt, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
              <div>
                <span className="font-medium">{alt.name}</span>
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-xs">{alt.rating}</span>
                </div>
              </div>
              <Badge variant="outline" className="text-green-600">
                ${alt.deposit}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </PopoverContent>
  )

  const SpreadPopover = ({ broker }: { broker: (typeof brokerListings)[0] }) => (
    <PopoverContent className="w-80">
      <div className="space-y-3">
        <h4 className="font-semibold">Tighter Spread Alternatives</h4>
        <p className="text-sm text-muted-foreground">
          {broker.name} offers {broker.spread} pips spread. Compare with these options:
        </p>
        <div className="space-y-2">
          {alternativeBrokers.spread.map((alt, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
              <div>
                <span className="font-medium">{alt.name}</span>
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-xs">{alt.rating}</span>
                </div>
              </div>
              <Badge variant="outline" className="text-green-600">
                {alt.spread} pips
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </PopoverContent>
  )

  const RatingPopover = ({
    broker,
    type,
  }: { broker: (typeof brokerListings)[0]; type: keyof typeof broker.ratings }) => (
    <PopoverContent className="w-80">
      <div className="space-y-3">
        <h4 className="font-semibold capitalize">{type} Rating Breakdown</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Current Rating</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold">{broker.ratings[type]}</span>
            </div>
          </div>
          <Progress value={broker.ratings[type] * 20} className="h-2" />
          <div className="text-xs text-muted-foreground">
            {type === "regulation" && "Based on regulatory compliance and oversight"}
            {type === "costs" && "Includes spreads, commissions, and fees"}
            {type === "platforms" && "Trading platform features and reliability"}
            {type === "support" && "Customer service quality and availability"}
            {type === "execution" && "Order execution speed and slippage"}
          </div>
        </div>
      </div>
    </PopoverContent>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
                className="h-8"
              >
                All Brokers
              </Button>
              {brokerCategories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className="h-8"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 h-4 px-1 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Broker Listings */}
            <div className="space-y-4">
              {filteredBrokers.map((broker) => (
                <Card key={broker.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Rank & Logo */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
                          {broker.rank}
                        </div>
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={broker.logo || "/placeholder.svg"} alt={broker.name} />
                          <AvatarFallback>{broker.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Link href={`/broker/${broker.name.toLowerCase().replace(/\s+/g, "-")}`}>
                              <h3 className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
                                {broker.name}
                              </h3>
                            </Link>
                            {broker.isVerified && (
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                <Shield className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                            {broker.isSponsored && (
                              <Badge variant="outline" className="text-blue-600 border-blue-600">
                                <Zap className="w-3 h-3 mr-1" />
                                Sponsored
                              </Badge>
                            )}
                            {broker.category === "Scammer Alert" && (
                              <Badge variant="destructive">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                Warning
                              </Badge>
                            )}
                          </div>

                          {/* Overall Rating */}
                          <Popover>
                            <PopoverTrigger asChild>
                              <div className="flex items-center gap-1 cursor-pointer hover:bg-muted p-1 rounded">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold">{broker.overallRating}</span>
                              </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="space-y-3">
                                <h4 className="font-semibold">Overall Rating Breakdown</h4>
                                {Object.entries(broker.ratings).map(([key, value]) => (
                                  <div key={key} className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                      <span className="capitalize">{key}</span>
                                      <span>{value}/5.0</span>
                                    </div>
                                    <Progress value={value * 20} className="h-2" />
                                  </div>
                                ))}
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>

                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{broker.description}</p>

                        {/* Key Metrics */}
                        <div className="flex flex-wrap gap-4 mb-3">
                          <Popover>
                            <PopoverTrigger asChild>
                              <div className="flex items-center gap-1 text-sm cursor-pointer hover:bg-muted p-1 rounded">
                                <DollarSign className="w-4 h-4 text-green-600" />
                                <span className="text-muted-foreground">Min Deposit:</span>
                                <span className="font-medium">${broker.minDeposit}</span>
                                <Info className="w-3 h-3 text-muted-foreground" />
                              </div>
                            </PopoverTrigger>
                            <MinDepositPopover broker={broker} />
                          </Popover>

                          <Popover>
                            <PopoverTrigger asChild>
                              <div className="flex items-center gap-1 text-sm cursor-pointer hover:bg-muted p-1 rounded">
                                <Target className="w-4 h-4 text-blue-600" />
                                <span className="text-muted-foreground">Spread:</span>
                                <span className="font-medium">{broker.spread} pips</span>
                                <Info className="w-3 h-3 text-muted-foreground" />
                              </div>
                            </PopoverTrigger>
                            <SpreadPopover broker={broker} />
                          </Popover>

                          <div className="flex items-center gap-1 text-sm">
                            <TrendingUp className="w-4 h-4 text-purple-600" />
                            <span className="text-muted-foreground">Leverage:</span>
                            <span className="font-medium">1:{broker.leverage}</span>
                          </div>
                        </div>

                        {/* Individual Ratings */}
                        <div className="flex flex-wrap gap-3 mb-3">
                          {Object.entries(broker.ratings).map(([key, value]) => (
                            <Popover key={key}>
                              <PopoverTrigger asChild>
                                <div className="flex items-center gap-1 text-xs cursor-pointer hover:bg-muted p-1 rounded">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  <span className="capitalize">{key}:</span>
                                  <span className="font-medium">{value}</span>
                                </div>
                              </PopoverTrigger>
                              <RatingPopover broker={broker} type={key as keyof typeof broker.ratings} />
                            </Popover>
                          ))}
                        </div>

                        {/* Tags and Platforms */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {broker.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {broker.platforms.map((platform, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {platform}
                            </Badge>
                          ))}
                        </div>

                        {/* Regulation */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Shield className="w-4 h-4" />
                          <span>Regulated by: {broker.regulation.join(", ")}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <ArrowUpRight className="w-4 h-4" />
                            <span>{broker.votes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{broker.comments}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Link href={`/broker/${broker.name.toLowerCase().replace(/\s+/g, "-")}/review`}>
                            <Button size="sm" variant="outline">
                              Review
                            </Button>
                          </Link>
                          <Link href={`/broker/${broker.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            <Button size="sm">
                              View Details
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Statistics */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Statistics (Last 30 Days)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">3,248</div>
                    <div className="text-sm text-muted-foreground">Visitors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">13,705</div>
                    <div className="text-sm text-muted-foreground">Page Views</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sponsors */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Sponsors</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-blue-500 text-white text-xs">FP</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">FP Markets</div>
                      <div className="text-xs text-muted-foreground">Premium Forex Broker</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Categories */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Top Categories</h3>
                  <Button variant="ghost" size="sm" className="text-xs">
                    View all
                  </Button>
                </div>
                <div className="space-y-3">
                  {brokerCategories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${category.color}`} />
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{category.count} brokers</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Access */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Quick Access</h3>
                <div className="space-y-2">
                  <Link href="/market-analysis" className="block text-sm text-muted-foreground hover:text-foreground">
                    Market Analysis
                  </Link>
                  <Link href="/education" className="block text-sm text-muted-foreground hover:text-foreground">
                    Trading Education
                  </Link>
                  <Link href="/promo-events" className="block text-sm text-muted-foreground hover:text-foreground">
                    Latest Promotions
                  </Link>
                  <Link href="/dashboard" className="block text-sm text-muted-foreground hover:text-foreground">
                    Dashboard
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
