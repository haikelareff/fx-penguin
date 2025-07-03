"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Calendar, ChevronRight, Clock, Globe, Newspaper, Star, Users, Zap } from "lucide-react"

const topBrokers = [
  {
    id: 1,
    name: "MetaTrader Pro",
    logo: "/placeholder-logo.svg",
    rating: 4.8,
    reviews: 2847,
    minDeposit: "$100",
    spread: "0.1 pips",
    leverage: "1:500",
    regulation: "FCA, CySEC",
    features: ["ECN Trading", "Copy Trading", "Mobile App"],
  },
  {
    id: 2,
    name: "ForexPrime",
    logo: "/placeholder-logo.svg",
    rating: 4.7,
    reviews: 1923,
    minDeposit: "$250",
    spread: "0.2 pips",
    leverage: "1:400",
    regulation: "ASIC, FCA",
    features: ["Social Trading", "Expert Advisors", "VPS Hosting"],
  },
  {
    id: 3,
    name: "TradeMaster",
    logo: "/placeholder-logo.svg",
    rating: 4.6,
    reviews: 1654,
    minDeposit: "$50",
    spread: "0.3 pips",
    leverage: "1:300",
    regulation: "CySEC, IFSC",
    features: ["Automated Trading", "Risk Management", "24/7 Support"],
  },
]

const newcomerBrokers = [
  {
    id: 4,
    name: "NextGen Forex",
    logo: "/placeholder-logo.svg",
    rating: 4.5,
    reviews: 234,
    minDeposit: "$25",
    spread: "0.2 pips",
    leverage: "1:200",
    regulation: "FCA",
    features: ["AI Trading", "Zero Commission", "Instant Deposits"],
    isNew: true,
  },
  {
    id: 5,
    name: "SwiftTrade",
    logo: "/placeholder-logo.svg",
    rating: 4.4,
    reviews: 156,
    minDeposit: "$100",
    spread: "0.3 pips",
    leverage: "1:300",
    regulation: "CySEC",
    features: ["Fast Execution", "Mobile First", "Social Copy"],
    isNew: true,
  },
  {
    id: 6,
    name: "ProTrader Hub",
    logo: "/placeholder-logo.svg",
    rating: 4.3,
    reviews: 89,
    minDeposit: "$200",
    spread: "0.4 pips",
    leverage: "1:400",
    regulation: "ASIC",
    features: ["Advanced Charts", "API Access", "Custom Indicators"],
    isNew: true,
  },
]

const industryNews = [
  {
    id: 1,
    title: "Federal Reserve Signals Potential Rate Cuts in 2024",
    excerpt:
      "The Fed's latest meeting minutes suggest a more dovish stance on monetary policy, potentially impacting USD strength across major currency pairs.",
    author: "Sarah Johnson",
    authorAvatar: "/placeholder-user.jpg",
    publishedAt: "2 hours ago",
    category: "Central Banks",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "EUR/USD Reaches New Monthly High Amid ECB Optimism",
    excerpt:
      "European Central Bank's positive economic outlook drives euro strength, with EUR/USD breaking key resistance levels.",
    author: "Michael Chen",
    authorAvatar: "/placeholder-user.jpg",
    publishedAt: "4 hours ago",
    category: "Market Analysis",
    readTime: "2 min read",
  },
  {
    id: 3,
    title: "Cryptocurrency Integration in Forex Trading Platforms",
    excerpt:
      "Major forex brokers are expanding their offerings to include cryptocurrency trading, bridging traditional and digital asset markets.",
    author: "Emma Rodriguez",
    authorAvatar: "/placeholder-user.jpg",
    publishedAt: "6 hours ago",
    category: "Technology",
    readTime: "4 min read",
  },
]

const upcomingEvents = [
  {
    title: "Weekly Trading Contest",
    description: "Compete for $10,000 in prizes",
    date: "Dec 15-22",
    type: "Contest",
    participants: 1247,
  },
  {
    title: "Market Analysis Webinar",
    description: "Expert insights on Q1 2024 outlook",
    date: "Dec 18, 2:00 PM EST",
    type: "Webinar",
    participants: 856,
  },
  {
    title: "New Year Trading Bonus",
    description: "50% deposit bonus for new accounts",
    date: "Jan 1-31",
    type: "Promotion",
    participants: 2341,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Top Rated Brokers */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Top Rated Brokers</h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Discover the most trusted and highly-rated forex brokers, carefully evaluated by our expert team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {topBrokers.map((broker) => (
              <Card key={broker.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src={broker.logo || "/placeholder.svg"} alt={broker.name} className="w-10 h-10 rounded-lg" />
                      <div>
                        <CardTitle className="text-lg">{broker.name}</CardTitle>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{broker.rating}</span>
                          <span className="text-sm text-muted-foreground">({broker.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {broker.regulation.split(",")[0]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Min Deposit:</span>
                      <p className="font-semibold">{broker.minDeposit}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Spread:</span>
                      <p className="font-semibold">{broker.spread}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Leverage:</span>
                      <p className="font-semibold">{broker.leverage}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Regulation:</span>
                      <p className="font-semibold">{broker.regulation}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {broker.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Link href={`/broker/${broker.name.toLowerCase().replace(/\s+/g, "-")}`} className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        View Details
                      </Button>
                    </Link>
                    <Link href={`/broker/${broker.name.toLowerCase().replace(/\s+/g, "-")}/review`} className="flex-1">
                      <Button className="w-full">Read Reviews</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/brokers">
              <Button variant="outline" size="lg">
                View All Brokers
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newcomer Brokers */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">New & Rising Brokers</h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Explore promising new brokers making waves in the forex industry with innovative features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {newcomerBrokers.map((broker) => (
              <Card key={broker.id} className="hover:shadow-lg transition-shadow relative">
                {broker.isNew && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">NEW</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src={broker.logo || "/placeholder.svg"} alt={broker.name} className="w-10 h-10 rounded-lg" />
                      <div>
                        <CardTitle className="text-lg">{broker.name}</CardTitle>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{broker.rating}</span>
                          <span className="text-sm text-muted-foreground">({broker.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {broker.regulation.split(",")[0]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Min Deposit:</span>
                      <p className="font-semibold">{broker.minDeposit}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Spread:</span>
                      <p className="font-semibold">{broker.spread}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Leverage:</span>
                      <p className="font-semibold">{broker.leverage}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Regulation:</span>
                      <p className="font-semibold">{broker.regulation}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {broker.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Link href={`/broker/${broker.name.toLowerCase().replace(/\s+/g, "-")}`} className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        View Details
                      </Button>
                    </Link>
                    <Link href={`/broker/${broker.name.toLowerCase().replace(/\s+/g, "-")}/review`} className="flex-1">
                      <Button className="w-full">Read Reviews</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/brokers">
              <Button variant="outline" size="lg">
                Discover More Brokers
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry News */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Industry News</h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Stay updated with the latest developments in the forex market and trading industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {industryNews.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">{article.excerpt}</CardDescription>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={article.authorAvatar || "/placeholder.svg"} alt={article.author} />
                        <AvatarFallback>
                          {article.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{article.author}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{article.publishedAt}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/market-analysis">
              <Button variant="outline" size="lg">
                <Newspaper className="mr-2 h-5 w-5" />
                Read More News
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Events & Promotions */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Events & Promotions</h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Join exciting trading contests, educational webinars, and take advantage of exclusive broker promotions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={
                        event.type === "Contest" ? "default" : event.type === "Webinar" ? "secondary" : "outline"
                      }
                    >
                      {event.type}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {event.participants}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <Button className="w-full">
                    {event.type === "Contest"
                      ? "Join Contest"
                      : event.type === "Webinar"
                        ? "Register Now"
                        : "Claim Bonus"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/promo-events">
              <Button variant="outline" size="lg">
                <Zap className="mr-2 h-5 w-5" />
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  🐧
                </div>
                <span className="font-bold text-xl">FX Penguin</span>
              </div>
              <p className="text-muted-foreground">
                Your trusted companion in the world of forex trading. Discover, learn, and succeed with FX Penguin.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Platform</h3>
              <div className="space-y-2 text-sm">
                <Link href="/brokers" className="block text-muted-foreground hover:text-primary transition-colors">
                  Brokers
                </Link>
                <Link href="/reviews" className="block text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </Link>
                <Link
                  href="/market-analysis"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Market Analysis
                </Link>
                <Link href="/education" className="block text-muted-foreground hover:text-primary transition-colors">
                  Education
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Resources</h3>
              <div className="space-y-2 text-sm">
                <Link href="/promo-events" className="block text-muted-foreground hover:text-primary transition-colors">
                  Events & Promos
                </Link>
                <Link href="/dashboard" className="block text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  API Documentation
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 FX Penguin. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Globe className="w-4 h-4" />
              <span>Available worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
