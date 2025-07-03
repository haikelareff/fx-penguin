"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { TradingStats } from "@/components/trading-stats"
import { MarketTrends } from "@/components/market-trends"
import { BrokerCategories } from "@/components/broker-categories"
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Globe,
  Newspaper,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

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

const educationContent = [
  {
    title: "Forex Fundamentals",
    description: "Master the basics of currency trading",
    lessons: 12,
    duration: "2 hours",
    level: "Beginner",
    icon: BookOpen,
  },
  {
    title: "Technical Analysis",
    description: "Learn chart patterns and indicators",
    lessons: 18,
    duration: "3 hours",
    level: "Intermediate",
    icon: BarChart3,
  },
  {
    title: "Risk Management",
    description: "Protect your capital with proven strategies",
    lessons: 8,
    duration: "1.5 hours",
    level: "Advanced",
    icon: Shield,
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-forex-green/5 via-background to-forex-green/5">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-forex-green rounded-full flex items-center justify-center text-white text-2xl font-bold">
                🐧
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-forex-green to-forex-darkGreen bg-clip-text text-transparent">
              Welcome to FX Penguin
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your trusted companion in the world of forex trading. Discover top-rated brokers, expert analysis, and
              educational resources to elevate your trading journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-forex-green hover:bg-forex-darkGreen text-white px-8 py-3">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
              </Link>
              <Link href="/brokers">
                <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
                  Find Top Brokers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/education">
                <Button size="lg" variant="ghost" className="px-8 py-3">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Learning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <TradingStats />
        </div>
      </section>

      {/* Top Rated Brokers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Rated Brokers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most trusted and highly-rated forex brokers, carefully evaluated by our expert team and
              community.
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
                    <Badge className="bg-forex-green/10 text-forex-green hover:bg-forex-green/20">
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
                      <Button className="w-full bg-forex-green hover:bg-forex-darkGreen">Read Reviews</Button>
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

      {/* Industry News */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry News</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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

      {/* Market Analysis Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Analysis</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get expert insights and real-time market data to make informed trading decisions.
            </p>
          </div>

          <MarketTrends />

          <div className="text-center mt-8">
            <Link href="/market-analysis">
              <Button size="lg" className="bg-forex-green hover:bg-forex-darkGreen">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Full Analysis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Education Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn to Trade</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master forex trading with our comprehensive educational resources and expert-led courses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {educationContent.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-forex-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <course.icon className="w-6 h-6 text-forex-green" />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                    <span>{course.lessons} lessons</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <Badge
                    variant={
                      course.level === "Beginner"
                        ? "default"
                        : course.level === "Intermediate"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {course.level}
                  </Badge>
                  <Button className="w-full bg-forex-green hover:bg-forex-darkGreen">Start Learning</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/education">
              <Button variant="outline" size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Events & Promotions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Events & Promotions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                  <Button className="w-full bg-forex-green hover:bg-forex-darkGreen">
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

      {/* Broker Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <BrokerCategories />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-forex-green rounded-full flex items-center justify-center text-white font-bold">
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
                <Link href="/brokers" className="block text-muted-foreground hover:text-forex-green transition-colors">
                  Brokers
                </Link>
                <Link href="/reviews" className="block text-muted-foreground hover:text-forex-green transition-colors">
                  Reviews
                </Link>
                <Link
                  href="/market-analysis"
                  className="block text-muted-foreground hover:text-forex-green transition-colors"
                >
                  Market Analysis
                </Link>
                <Link
                  href="/education"
                  className="block text-muted-foreground hover:text-forex-green transition-colors"
                >
                  Education
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Resources</h3>
              <div className="space-y-2 text-sm">
                <Link
                  href="/promo-events"
                  className="block text-muted-foreground hover:text-forex-green transition-colors"
                >
                  Events & Promos
                </Link>
                <Link
                  href="/dashboard"
                  className="block text-muted-foreground hover:text-forex-green transition-colors"
                >
                  Dashboard
                </Link>
                <a href="#" className="block text-muted-foreground hover:text-forex-green transition-colors">
                  API Documentation
                </a>
                <a href="#" className="block text-muted-foreground hover:text-forex-green transition-colors">
                  Help Center
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-forex-green transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-forex-green transition-colors">
                  Contact
                </a>
                <a href="#" className="block text-muted-foreground hover:text-forex-green transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-forex-green transition-colors">
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
