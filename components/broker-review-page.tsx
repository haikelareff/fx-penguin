"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Star, Clock, User, Calendar, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import type { BrokerAccountSchema } from "@/types/broker"
import { getBrokerSlug } from "@/data/brokers"

interface BrokerReviewPageProps {
  broker: BrokerAccountSchema
}

export function BrokerReviewPage({ broker }: BrokerReviewPageProps) {
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "pros-cons", "account-types", "platforms", "fees", "safety", "conclusion"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "account-types", label: "Account Types" },
    { id: "platforms", label: "Trading Platforms" },
    { id: "fees", label: "Fees & Spreads" },
    { id: "safety", label: "Safety & Regulation" },
    { id: "conclusion", label: "Conclusion" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
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
          <Link href={`/broker/${getBrokerSlug(broker.brokerName)}`} className="hover:text-foreground">
            {broker.brokerName}
          </Link>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="text-foreground">Review</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-8">
              <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border border-border">
                <AvatarImage
                  src={`/placeholder.svg?height=80&width=80&text=${broker.brokerName.charAt(0)}`}
                  alt={broker.brokerName}
                />
                <AvatarFallback className="text-xl sm:text-2xl font-bold bg-primary/10 text-primary">
                  {broker.brokerName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2">{broker.brokerName} Review</h1>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${
                          i < Math.floor(broker.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-sm sm:text-base font-medium ml-1">{broker.rating}/5.0</span>
                  </div>
                  <Badge variant="outline">{broker.regulation}</Badge>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Updated: {new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>8 min read</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Comprehensive review of {broker.brokerName} - analyzing trading conditions, fees, platforms, and
                  overall broker quality.
                </p>
              </div>
            </div>

            {/* Quick Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Quick Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold text-primary">{broker.rating}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Overall Rating</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold">
                      ${Math.min(...broker.accountTiers.map((tier) => tier.minimumDeposit))}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Min Deposit</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold">{broker.tradingPlatforms.length}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Platforms</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                    <div className="text-lg sm:text-2xl font-bold">{broker.tradingInstruments.length}+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Instruments</div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {broker.brokerName} is a {broker.regulation.toLowerCase()} regulated broker offering competitive
                  trading conditions across multiple asset classes. With a minimum deposit of $
                  {Math.min(...broker.accountTiers.map((tier) => tier.minimumDeposit))} and support for{" "}
                  {broker.tradingPlatforms.join(", ")}, it caters to both beginner and professional traders.
                </p>
              </CardContent>
            </Card>

            {/* Overview Section */}
            <section id="overview">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base leading-relaxed">
                    {broker.brokerName} has established itself as a prominent player in the forex and CFD trading
                    industry since its founding in {broker.founded}. Based in {broker.headquarters}, the broker operates
                    under the regulation of {broker.regulation}, ensuring a secure and compliant trading environment for
                    its clients worldwide.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    The broker offers a comprehensive range of trading instruments including forex pairs, commodities,
                    indices, stocks, and cryptocurrencies. With competitive spreads starting from as low as 0.0 pips on
                    some account types and leverage up to {broker.accountTiers[0].leverage}, {broker.brokerName} caters
                    to traders of all experience levels.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Information</h4>
                      <div className="space-y-2 text-sm">
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
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Website:</span>
                          <a
                            href={broker.website}
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Site
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Trading Highlights</h4>
                      <div className="space-y-2 text-sm">
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
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Support:</span>
                          <span>24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Pros & Cons Section */}
            <section id="pros-cons">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Pros & Cons</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-600 text-base sm:text-lg">Pros</h4>
                      <ul className="space-y-2 text-sm sm:text-base">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Well-regulated by {broker.regulation}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Competitive spreads and low fees</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Multiple trading platforms available</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Wide range of trading instruments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Excellent customer support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Multiple account types for different needs</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-red-600 text-base sm:text-lg">Cons</h4>
                      <ul className="space-y-2 text-sm sm:text-base">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span>Higher minimum deposit for premium accounts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span>Limited cryptocurrency options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span>No social trading features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">✗</span>
                          <span>Inactivity fees may apply</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Account Types Section */}
            <section id="account-types">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Account Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {broker.brokerName} offers {broker.accountTiers.length} different account types to cater to traders
                    with varying experience levels and capital requirements.
                  </p>
                  <div className="space-y-4 sm:space-y-6">
                    {broker.accountTiers.map((account, index) => (
                      <div key={index} className="border rounded-lg p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h4 className="text-lg sm:text-xl font-semibold">{account.name}</h4>
                          <Badge variant="outline" className="w-fit">
                            Min Deposit: ${account.minimumDeposit}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Spread Type:</span>
                            <div className="font-medium">{account.spreadType}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Leverage:</span>
                            <div className="font-medium">{account.leverage}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Min Trade:</span>
                            <div className="font-medium">{account.minTradeVolume}</div>
                          </div>
                          {account.commission && (
                            <div className="sm:col-span-2 lg:col-span-3">
                              <span className="text-muted-foreground">Commission:</span>
                              <div className="font-medium">{account.commission}</div>
                            </div>
                          )}
                        </div>
                        {account.additionalFeatures && (
                          <div className="mt-4">
                            <span className="text-muted-foreground text-sm">Additional Features:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {account.additionalFeatures.map((feature) => (
                                <Badge key={feature} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Trading Platforms Section */}
            <section id="platforms">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Trading Platforms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {broker.brokerName} provides access to {broker.tradingPlatforms.length} professional trading
                    platforms, ensuring traders have the tools they need for successful trading.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {broker.tradingPlatforms.map((platform) => (
                      <div key={platform} className="border rounded-lg p-4 sm:p-6">
                        <h4 className="text-lg font-semibold mb-3">{platform}</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          {platform === "MT4" &&
                            "The world's most popular trading platform with advanced charting tools"}
                          {platform === "MT5" &&
                            "Next-generation platform with enhanced features and multi-asset support"}
                          {platform === "cTrader" && "Professional ECN platform with advanced order management"}
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Expert Advisors Support</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Mobile Trading</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Advanced Charting</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Fees & Spreads Section */}
            <section id="fees">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Fees & Spreads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {broker.brokerName} offers competitive pricing with transparent fee structures across all account
                    types.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Trading Costs</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>EUR/USD Spread</span>
                          <span className="font-medium">From 0.0 pips</span>
                        </div>
                        <div className="flex justify-between">
                          <span>GBP/USD Spread</span>
                          <span className="font-medium">From 0.1 pips</span>
                        </div>
                        <div className="flex justify-between">
                          <span>USD/JPY Spread</span>
                          <span className="font-medium">From 0.1 pips</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Commission (Raw accounts)</span>
                          <span className="font-medium">$3 per lot per side</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Other Fees</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Deposit Fee</span>
                          <span className="font-medium text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Withdrawal Fee</span>
                          <span className="font-medium text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Inactivity Fee</span>
                          <span className="font-medium">$10/month after 12 months</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Swap Rates</span>
                          <span className="font-medium">Variable</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Safety & Regulation Section */}
            <section id="safety">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Safety & Regulation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Fully Regulated Broker</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {broker.brokerName} is regulated by {broker.regulation}, ensuring client fund protection and
                      adherence to strict financial standards.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Safety Features</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Segregated client accounts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Investor compensation scheme</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Regular third-party audits</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <span>SSL encryption for data protection</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Negative balance protection</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Regulatory Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Regulator</span>
                          <span className="font-medium">{broker.regulation}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>License Number</span>
                          <span className="font-medium">#123456789</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Established</span>
                          <span className="font-medium">{broker.founded}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Headquarters</span>
                          <span className="font-medium">{broker.headquarters}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Conclusion Section */}
            <section id="conclusion">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Conclusion</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="bg-primary/5 p-4 sm:p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl sm:text-3xl font-bold text-primary">{broker.rating}/5.0</div>
                      <div>
                        <div className="font-semibold">Overall Rating</div>
                        <div className="text-sm text-muted-foreground">Based on {broker.reviews} reviews</div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(broker.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {broker.brokerName} stands out as a reliable and well-regulated broker that offers competitive
                    trading conditions for both novice and experienced traders. With its strong regulatory backing from{" "}
                    {broker.regulation}, comprehensive range of trading instruments, and professional-grade platforms,
                    it provides a solid foundation for forex and CFD trading.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    The broker's multiple account types cater to different trading styles and capital requirements,
                    while the competitive spreads and transparent fee structure make it an attractive choice for
                    cost-conscious traders. The availability of {broker.tradingPlatforms.join(", ")} ensures that
                    traders have access to industry-standard tools and features.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    While there are some limitations such as higher minimum deposits for premium accounts and limited
                    cryptocurrency options, the overall package offered by {broker.brokerName} makes it a solid choice
                    for traders looking for a trustworthy and feature-rich trading environment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link href={broker.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit {broker.brokerName}
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/broker/${getBrokerSlug(broker.brokerName)}`}>View Broker Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sticky TOC Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-4 space-y-4">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {tocItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                          activeSection === item.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rating:</span>
                    <span className="font-medium">{broker.rating}/5.0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Min Deposit:</span>
                    <span className="font-medium">
                      ${Math.min(...broker.accountTiers.map((tier) => tier.minimumDeposit))}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Regulation:</span>
                    <span className="font-medium">{broker.regulation}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Founded:</span>
                    <span className="font-medium">{broker.founded}</span>
                  </div>
                  <Separator />
                  <Button asChild className="w-full bg-primary hover:bg-primary/90" size="sm">
                    <Link href={broker.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Author Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Review Author</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg" alt="Author" />
                      <AvatarFallback>
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Trading Expert</div>
                      <div className="text-sm text-muted-foreground">Senior Analyst</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Professional trader with 10+ years of experience in forex and CFD markets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ForexHub. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Risk Disclosure
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
