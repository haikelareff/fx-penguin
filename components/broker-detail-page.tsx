"use client"

import Link from "next/link"
import {
  Star,
  TrendingUp,
  Shield,
  Award,
  ExternalLink,
  ChevronRight,
  FileText,
  MessageSquare,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { BrokerAccountSchema } from "@/types/broker"
import { getBrokerSlug } from "@/data/brokers"

interface BrokerDetailPageProps {
  broker: BrokerAccountSchema
}

export function BrokerDetailPage({ broker }: BrokerDetailPageProps) {
  const brokerSlug = getBrokerSlug(broker.brokerName)

  return (
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
        <span className="text-foreground">{broker.brokerName}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-8">
          {/* Header Section */}
          <Card className="forex-card">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border border-border">
                  <AvatarImage
                    src={`/placeholder.svg?height=80&width=80&text=${broker.brokerName.charAt(0)}`}
                    alt={broker.brokerName}
                  />
                  <AvatarFallback className="text-xl sm:text-2xl font-bold bg-forex-green/10 text-forex-green">
                    {broker.brokerName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-2">{broker.brokerName}</h1>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{broker.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-forex-green text-white">
                      <Shield className="h-3 w-3 mr-1" />
                      {broker.regulation}
                    </Badge>
                    <Badge className="bg-forex-gold text-white">
                      <Award className="h-3 w-3 mr-1" />
                      {broker.rating}/5.0
                    </Badge>
                    <Badge variant="outline">
                      <Star className="h-3 w-3 mr-1" />
                      {broker.reviews} Reviews
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <Button className="bg-forex-green hover:bg-forex-darkGreen">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                  <Button variant="outline">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Start Trading
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                  <div className="text-lg sm:text-2xl font-bold text-forex-green">{broker.rating}</div>
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
            </CardContent>
          </Card>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <Link href={`/broker/${brokerSlug}/review`}>
              <Button variant="outline" className="text-xs sm:text-sm bg-transparent">
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Full Review
              </Button>
            </Link>
            <Button variant="outline" className="text-xs sm:text-sm bg-transparent">
              <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              User Reviews
            </Button>
            <Button variant="outline" className="text-xs sm:text-sm bg-transparent">
              <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Compare
            </Button>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start mb-6 bg-transparent p-0 h-auto border-b">
              <TabsTrigger
                value="overview"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-forex-green data-[state=active]:text-forex-green data-[state=active]:bg-transparent px-4 py-2"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="accounts"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-forex-green data-[state=active]:text-forex-green data-[state=active]:bg-transparent px-4 py-2"
              >
                Account Types
              </TabsTrigger>
              <TabsTrigger
                value="platforms"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-forex-green data-[state=active]:text-forex-green data-[state=active]:bg-transparent px-4 py-2"
              >
                Platforms
              </TabsTrigger>
              <TabsTrigger
                value="instruments"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-forex-green data-[state=active]:text-forex-green data-[state=active]:bg-transparent px-4 py-2"
              >
                Instruments
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <Card className="forex-card">
                <CardHeader>
                  <CardTitle>Broker Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Company Information</h4>
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
                            className="text-forex-green hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Site
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Trading Conditions</h4>
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
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-3">About {broker.brokerName}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {broker.brokerName} is a well-established forex broker that has been serving traders since{" "}
                      {broker.founded}. With headquarters in {broker.headquarters}, the broker is regulated by{" "}
                      {broker.regulation}, ensuring a secure trading environment for its clients. The broker offers
                      competitive trading conditions with tight spreads and fast execution across multiple asset classes
                      including forex, commodities, indices, and more.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accounts" className="mt-0">
              <div className="grid gap-4 sm:gap-6">
                {broker.accountTiers.map((account, index) => (
                  <Card key={index} className="forex-card">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <CardTitle className="text-lg sm:text-xl">{account.name}</CardTitle>
                        <Badge variant="outline" className="w-fit">
                          Min Deposit: ${account.minimumDeposit}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="platforms" className="mt-0">
              <Card className="forex-card">
                <CardHeader>
                  <CardTitle>Trading Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {broker.tradingPlatforms.map((platform) => (
                      <div key={platform} className="text-center p-4 sm:p-6 border rounded-lg">
                        <div className="text-xl sm:text-2xl font-bold mb-2">{platform}</div>
                        <div className="text-sm text-muted-foreground mb-4">
                          Professional trading platform with advanced charting tools and expert advisors support.
                        </div>
                        <Button variant="outline" size="sm">
                          Download {platform}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="instruments" className="mt-0">
              <Card className="forex-card">
                <CardHeader>
                  <CardTitle>Trading Instruments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {broker.tradingInstruments.map((instrument) => (
                      <div key={instrument} className="text-center p-3 sm:p-4 border rounded-lg">
                        <div className="font-semibold text-sm sm:text-base">{instrument}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground mt-1">Multiple pairs available</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Rating Card */}
          <Card className="forex-card">
            <CardHeader>
              <CardTitle className="text-lg">Overall Rating</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-forex-green mb-2">{broker.rating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < Math.floor(broker.rating) ? "fill-forex-gold text-forex-gold" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Based on {broker.reviews} reviews</div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="forex-card">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-forex-green hover:bg-forex-darkGreen">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
              </Button>
              <Link href={`/broker/${brokerSlug}/review`}>
                <Button variant="outline" className="w-full bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Read Full Review
                </Button>
              </Link>
              <Button variant="outline" className="w-full bg-transparent">
                <MessageSquare className="h-4 w-4 mr-2" />
                Write Review
              </Button>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="forex-card">
            <CardHeader>
              <CardTitle className="text-lg">Key Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${broker.features.islamicAccount ? "bg-green-500" : "bg-red-500"}`}
                />
                <span className="text-sm">Islamic Account</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${broker.features.expertAdvisorAllowed ? "bg-green-500" : "bg-red-500"}`}
                />
                <span className="text-sm">Expert Advisors</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${broker.features.hedgingAllowed ? "bg-green-500" : "bg-red-500"}`}
                />
                <span className="text-sm">Hedging Allowed</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${broker.features.scalpingAllowed ? "bg-green-500" : "bg-red-500"}`}
                />
                <span className="text-sm">Scalping Allowed</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${broker.features.negativeBalanceProtection ? "bg-green-500" : "bg-red-500"}`}
                />
                <span className="text-sm">Negative Balance Protection</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
