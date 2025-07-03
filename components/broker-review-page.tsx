"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Star, ExternalLink, Shield, Users, Award, Clock, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import type { Broker } from "@/types/broker"

interface BrokerReviewPageProps {
  broker: Broker
}

interface TOCItem {
  id: string
  title: string
  level: number
}

export default function BrokerReviewPage({ broker }: BrokerReviewPageProps) {
  const [activeSection, setActiveSection] = useState("")

  const tocItems: TOCItem[] = [
    { id: "overview", title: "Overview", level: 1 },
    { id: "pros-cons", title: "Pros & Cons", level: 1 },
    { id: "trading-platforms", title: "Trading Platforms", level: 1 },
    { id: "account-types", title: "Account Types", level: 1 },
    { id: "fees-spreads", title: "Fees & Spreads", level: 1 },
    { id: "regulation-safety", title: "Regulation & Safety", level: 1 },
    { id: "customer-support", title: "Customer Support", level: 1 },
    { id: "education-research", title: "Education & Research", level: 1 },
    { id: "final-verdict", title: "Final Verdict", level: 1 },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="flex gap-4 sm:gap-8">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
                  <AvatarImage src={broker.logo || "/placeholder.svg"} alt={broker.brokerName} />
                  <AvatarFallback>{broker.brokerName.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-xl sm:text-3xl font-bold mb-2">{broker.brokerName} Review</h1>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 sm:h-4 sm:w-4 ${
                            i < Math.floor(broker.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                      <span className="text-xs sm:text-sm font-medium ml-1">{broker.rating}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {broker.regulation}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Min Deposit: ${broker.minDeposit}
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button asChild className="text-xs sm:text-sm">
                  <Link href={broker.website} target="_blank" rel="noopener noreferrer">
                    Visit {broker.brokerName}
                    <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="text-xs sm:text-sm bg-transparent">
                  Compare Brokers
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
              <Card className="p-2 sm:p-4">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-primary">{broker.rating}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Overall Rating</div>
                </div>
              </Card>
              <Card className="p-2 sm:p-4">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-primary">${broker.minDeposit}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Min Deposit</div>
                </div>
              </Card>
              <Card className="p-2 sm:p-4">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-primary">{broker.maxLeverage}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Max Leverage</div>
                </div>
              </Card>
              <Card className="p-2 sm:p-4">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-primary">{broker.spread}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Avg Spread</div>
                </div>
              </Card>
            </div>

            {/* Overview Section */}
            <section id="overview" className="mb-6 sm:mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {broker.brokerName} is a {broker.regulation}-regulated forex and CFD broker that has been serving
                    traders since its establishment. With a minimum deposit of ${broker.minDeposit} and maximum leverage
                    of {broker.maxLeverage}, it caters to both beginner and experienced traders.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Key Features</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>• Multiple trading platforms available</li>
                        <li>• Competitive spreads starting from {broker.spread}</li>
                        <li>• 24/7 customer support</li>
                        <li>• Educational resources and market analysis</li>
                        <li>• Multiple account types</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Trading Instruments</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>• Forex pairs (50+ major, minor, exotic)</li>
                        <li>• CFDs on stocks</li>
                        <li>• Commodities (Gold, Silver, Oil)</li>
                        <li>• Indices</li>
                        <li>• Cryptocurrencies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Pros and Cons */}
            <section id="pros-cons" className="mb-6 sm:mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Pros & Cons</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center text-sm sm:text-base">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Pros
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Well-regulated and trustworthy</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Competitive spreads and low fees</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Multiple trading platforms</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Excellent customer support</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Educational resources available</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center text-sm sm:text-base">
                        <XCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Cons
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <XCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Limited cryptocurrency options</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <XCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Higher minimum deposit for premium accounts</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <XCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>No social trading features</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <XCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Limited research tools</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Trading Platforms */}
            <section id="trading-platforms" className="mb-6 sm:mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Trading Platforms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {broker.brokerName} offers multiple trading platforms to suit different trading styles and
                    preferences.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="border rounded-lg p-3 sm:p-4">
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">MetaTrader 4</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                        The world's most popular trading platform with advanced charting and automated trading
                        capabilities.
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <Progress value={90} className="flex-1" />
                        <span className="text-xs sm:text-sm font-medium">9.0/10</span>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Advanced charting tools</li>
                        <li>• Expert Advisors (EAs)</li>
                        <li>• Custom indicators</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-3 sm:p-4">
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">WebTrader</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                        Browser-based platform that requires no download and works on any device.
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <Progress value={85} className="flex-1" />
                        <span className="text-xs sm:text-sm font-medium">8.5/10</span>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• No download required</li>
                        <li>• Cross-platform compatibility</li>
                        <li>• Real-time quotes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Account Types */}
            <section id="account-types" className="mb-6 sm:mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Account Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="border rounded-lg p-3 sm:p-4">
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Standard</h4>
                      <div className="text-lg sm:text-2xl font-bold text-primary mb-2">${broker.minDeposit}</div>
                      <p className="text-xs text-muted-foreground mb-3">Minimum deposit</p>
                      <ul className="text-xs space-y-1">
                        <li>• Spreads from {broker.spread}</li>
                        <li>• Leverage up to {broker.maxLeverage}</li>
                        <li>• All trading instruments</li>
                        <li>• Basic support</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-3 sm:p-4 border-primary">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm sm:text-base">Premium</h4>
                        <Badge>Popular</Badge>
                      </div>
                      <div className="text-lg sm:text-2xl font-bold text-primary mb-2">$5,000</div>
                      <p className="text-xs text-muted-foreground mb-3">Minimum deposit</p>
                      <ul className="text-xs space-y-1">
                        <li>• Tighter spreads</li>
                        <li>• Priority support</li>
                        <li>• Market analysis</li>
                        <li>• Personal account manager</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-3 sm:p-4">
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">VIP</h4>
                      <div className="text-lg sm:text-2xl font-bold text-primary mb-2">$25,000</div>
                      <p className="text-xs text-muted-foreground mb-3">Minimum deposit</p>
                      <ul className="text-xs space-y-1">
                        <li>• Lowest spreads</li>
                        <li>• 24/7 dedicated support</li>
                        <li>• Premium research</li>
                        <li>• VIP events access</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Fees & Spreads */}
            <section id="fees-spreads" className="mb-6 sm:mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Fees & Spreads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm sm:text-base">Trading Costs</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span>EUR/USD Spread</span>
                          <span className="font-medium">{broker.spread}</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span>GBP/USD Spread</span>
                          <span className="font-medium">1.2 pips</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span>USD/JPY Spread</span>
                          <span className="font-medium">1.0 pips</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span>Commission</span>
                          <span className="font-medium">$0</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm sm:text-base">Other Fees</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span>Deposit Fee</span>
                          <span className="font-medium">Free</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span>Withdrawal Fee</span>
                          <span className="font-medium">Free</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span>Inactivity Fee</span>
                          <span className="font-medium">$10/month</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span>Swap Fee</span>
                          <span className="font-medium">Variable</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Regulation & Safety */}
            <section id="regulation-safety" className="mb-6 sm:mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                    Regulation & Safety
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 p-3 sm:p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 text-sm sm:text-base">
                        Fully Regulated
                      </h4>
                      <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                        {broker.brokerName} is regulated by {broker.regulation}, ensuring client fund protection and
                        regulatory compliance.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Safety Features</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>• Segregated client accounts</li>
                        <li>• Investor compensation scheme</li>
                        <li>• Regular audits</li>
                        <li>• SSL encryption</li>
                        <li>• Two-factor authentication</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Regulatory Bodies</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>• {broker.regulation}</li>
                        <li>• License #: 123456789</li>
                        <li>• Established: 2010</li>
                        <li>• Headquarters: London, UK</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Customer Support */}
            <section id="customer-support" className="mb-6 sm:mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Customer Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center p-3 sm:p-4 border rounded-lg">
                      <Clock className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">24/7 Support</h4>
                      <p className="text-xs text-muted-foreground">Round-the-clock assistance</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 border rounded-lg">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Live Chat</h4>
                      <p className="text-xs text-muted-foreground">Instant messaging support</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 border rounded-lg">
                      <Award className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Expert Team</h4>
                      <p className="text-xs text-muted-foreground">Knowledgeable professionals</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Contact Methods</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>• Live Chat: Available 24/7</li>
                        <li>• Email: support@{broker.brokerName.toLowerCase()}.com</li>
                        <li>• Phone: +1-800-123-4567</li>
                      </ul>
                      <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>• Response time: Under 1 hour</li>
                        <li>• Languages: 15+ supported</li>
                        <li>• FAQ: Comprehensive knowledge base</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Education & Research */}
            <section id="education-research" className="mb-6 sm:mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Education & Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Educational Resources</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>• Trading webinars</li>
                        <li>• Video tutorials</li>
                        <li>• E-books and guides</li>
                        <li>• Trading glossary</li>
                        <li>• Demo account</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Market Analysis</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>• Daily market reports</li>
                        <li>• Technical analysis</li>
                        <li>• Economic calendar</li>
                        <li>• Trading signals</li>
                        <li>• Market news</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Final Verdict */}
            <section id="final-verdict" className="mb-6 sm:mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Final Verdict</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-4 p-4 sm:p-6 bg-primary/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl sm:text-4xl font-bold text-primary">{broker.rating}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Overall Score</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Excellent Choice for Most Traders</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {broker.brokerName} offers a solid trading experience with competitive spreads, reliable
                        regulation, and excellent customer support. Suitable for both beginners and experienced traders.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-primary">9.2</div>
                      <div className="text-xs text-muted-foreground">Regulation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-primary">8.8</div>
                      <div className="text-xs text-muted-foreground">Platforms</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-primary">8.5</div>
                      <div className="text-xs text-muted-foreground">Costs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-primary">9.0</div>
                      <div className="text-xs text-muted-foreground">Support</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-4">
                    <Button asChild className="flex-1">
                      <Link href={broker.website} target="_blank" rel="noopener noreferrer">
                        Start Trading with {broker.brokerName}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Compare with Other Brokers
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sticky TOC Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-4 space-y-4">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {tocItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                          activeSection === item.id
                            ? "bg-primary/10 text-primary border-r-2 border-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Quick Stats Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Rating</span>
                    <span className="font-medium">{broker.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Min Deposit</span>
                    <span className="font-medium">${broker.minDeposit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Max Leverage</span>
                    <span className="font-medium">{broker.maxLeverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Spread</span>
                    <span className="font-medium">{broker.spread}</span>
                  </div>
                  <Separator />
                  <Button asChild className="w-full" size="sm">
                    <Link href={broker.website} target="_blank" rel="noopener noreferrer">
                      Visit Broker
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
