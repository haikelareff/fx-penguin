"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Star, Shield, Award, ExternalLink, ChevronRight, Eye, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import type { BrokerAccountSchema } from "@/types/broker"

interface BrokerReviewPageProps {
  broker: BrokerAccountSchema
}

export function BrokerReviewPage({ broker }: BrokerReviewPageProps) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "accounts",
        "platforms",
        "instruments",
        "deposits",
        "features",
        "pros-cons",
        "conclusion",
      ]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "accounts", label: "Account Types" },
    { id: "platforms", label: "Trading Platforms" },
    { id: "instruments", label: "Trading Instruments" },
    { id: "deposits", label: "Deposits & Withdrawals" },
    { id: "features", label: "Key Features" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "conclusion", label: "Conclusion" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-8">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          <Link href="/brokers" className="hover:text-foreground">
            Brokers
          </Link>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="text-foreground">{broker.brokerName} Review</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-8">
            {/* Header Section */}
            <Card className="forex-card">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <Avatar className="h-12 w-12 sm:h-16 sm:w-16 border border-border">
                    <AvatarImage
                      src={`/placeholder.svg?height=64&width=64&text=${broker.brokerName.charAt(0)}`}
                      alt={broker.brokerName}
                    />
                    <AvatarFallback className="text-lg sm:text-xl font-bold bg-forex-green/10 text-forex-green">
                      {broker.brokerName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h1 className="text-xl sm:text-3xl font-bold mb-2">{broker.brokerName} Review</h1>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{broker.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-forex-green text-white text-xs">
                        <Shield className="h-3 w-3 mr-1" />
                        {broker.regulation}
                      </Badge>
                      <Badge className="bg-forex-gold text-white text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        {broker.rating}/5.0
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        {broker.reviews} Reviews
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full sm:w-auto">
                    <Button className="bg-forex-green hover:bg-forex-darkGreen text-xs sm:text-sm">
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Visit Website
                    </Button>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      <span>1,247 views</span>
                      <Clock className="h-3 w-3 ml-2" />
                      <span>Updated Dec 2024</span>
                    </div>
                  </div>
                </div>

                {/* Rating Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center p-2 sm:p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold text-forex-green">{broker.rating}</div>
                    <div className="text-xs text-muted-foreground">Overall Rating</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold">4.2</div>
                    <div className="text-xs text-muted-foreground">Platform</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold">4.1</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold">4.4</div>
                    <div className="text-xs text-muted-foreground">Execution</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview Section */}
            <Card id="overview" className="forex-card">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Broker Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">Company Information</h4>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Founded:</span>
                        <span>{broker.founded}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Headquarters:</span>
                        <span>{broker.headquarters}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Regulation:</span>
                        <span>{broker.regulation}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">Trading Conditions</h4>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Min Deposit:</span>
                        <span>${Math.min(...broker.accountTiers.map((tier) => tier.minimumDeposit))}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Max Leverage:</span>
                        <span>{broker.accountTiers[0].leverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Platforms:</span>
                        <span>{broker.tradingPlatforms.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {broker.brokerName} is a well-established forex broker that has been serving traders since{" "}
                  {broker.founded}. With headquarters in {broker.headquarters}, the broker is regulated by{" "}
                  {broker.regulation}, ensuring a secure trading environment for its clients. The broker offers
                  competitive trading conditions with tight spreads and fast execution across multiple asset classes.
                </p>
              </CardContent>
            </Card>

            {/* Account Types Section */}
            <Card id="accounts" className="forex-card">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Account Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:gap-4">
                  {broker.accountTiers.map((account, index) => (
                    <div key={index} className="border rounded-lg p-3 sm:p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="font-semibold text-sm sm:text-base">{account.name}</h4>
                        <Badge variant="outline" className="text-xs w-fit">
                          Min: ${account.minimumDeposit}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                        <div>
                          <span className="text-muted-foreground">Spread Type:</span>
                          <span className="ml-2">{account.spreadType}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Leverage:</span>
                          <span className="ml-2">{account.leverage}</span>
                        </div>
                        {account.commission && (
                          <div className="sm:col-span-2">
                            <span className="text-muted-foreground">Commission:</span>
                            <span className="ml-2">{account.commission}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trading Platforms Section */}
            <Card id="platforms" className="forex-card">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Trading Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {broker.tradingPlatforms.map((platform) => (
                    <div key={platform} className="text-center p-3 sm:p-4 border rounded-lg">
                      <div className="text-base sm:text-lg font-semibold mb-2">{platform}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Professional trading platform with advanced tools
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trading Instruments Section */}
            <Card id="instruments" className="forex-card">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Trading Instruments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {broker.tradingInstruments.map((instrument) => (
                    <Badge key={instrument} variant="secondary" className="text-xs">
                      {instrument}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Deposits & Withdrawals Section */}
            <Card id="deposits" className="forex-card">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Deposits & Withdrawals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Deposit Methods</h4>
                  <div className="flex flex-wrap gap-2">
                    {broker.depositOptions.map((method) => (
                      <Badge key={method} variant="outline" className="text-xs">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Withdrawal Methods</h4>
                  <div className="flex flex-wrap gap-2">
                    {broker.withdrawalOptions.map((method) => (
                      <Badge key={method} variant="outline" className="text-xs">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features Section */}
            <Card id="features" className="forex-card">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${broker.features.islamicAccount ? "bg-green-500" : "bg-red-500"}`}
                    />
                    <span className="text-xs sm:text-sm">Islamic Account</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${broker.features.expertAdvisorAllowed ? "bg-green-500" : "bg-red-500"}`}
                    />
                    <span className="text-xs sm:text-sm">Expert Advisors</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${broker.features.hedgingAllowed ? "bg-green-500" : "bg-red-500"}`}
                    />
                    <span className="text-xs sm:text-sm">Hedging Allowed</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${broker.features.scalpingAllowed ? "bg-green-500" : "bg-red-500"}`}
                    />
                    <span className="text-xs sm:text-sm">Scalping Allowed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pros & Cons Section */}
            <Card id="pros-cons" className="forex-card">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Pros & Cons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-green-600 mb-2 sm:mb-3">Pros</h4>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Regulated by reputable authorities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Competitive spreads and low commissions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Multiple trading platforms available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Wide range of trading instruments</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-red-600 mb-2 sm:mb-3">Cons</h4>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Higher minimum deposit for some accounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Limited educational resources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Customer support could be improved</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conclusion Section */}
            <Card id="conclusion" className="forex-card">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Conclusion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {broker.brokerName} stands out as a reliable forex broker with strong regulatory oversight and
                  competitive trading conditions. The broker offers a good selection of trading platforms and
                  instruments, making it suitable for both beginner and experienced traders.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Button className="bg-forex-green hover:bg-forex-darkGreen text-xs sm:text-sm">
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Visit {broker.brokerName}
                  </Button>
                  <Button variant="outline" className="text-xs sm:text-sm bg-transparent">
                    <User className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Write a Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sticky TOC Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-4">
              <Card className="forex-card">
                <CardHeader>
                  <CardTitle className="text-lg">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm py-2 px-3 rounded-md transition-colors hover:bg-forex-green/10 hover:text-forex-green border-l-2 ${
                          activeSection === item.id
                            ? "border-forex-green text-forex-green bg-forex-green/5"
                            : "border-transparent text-muted-foreground hover:border-forex-green/50"
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Quick Stats Card */}
              <Card className="forex-card mt-4">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Overall Rating</span>
                    <span className="font-semibold">{broker.rating}/5.0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Reviews</span>
                    <span className="font-semibold">{broker.reviews}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Min Deposit</span>
                    <span className="font-semibold">
                      ${Math.min(...broker.accountTiers.map((tier) => tier.minimumDeposit))}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Founded</span>
                    <span className="font-semibold">{broker.founded}</span>
                  </div>
                  <Separator />
                  <Button className="w-full bg-forex-green hover:bg-forex-darkGreen text-sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
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
