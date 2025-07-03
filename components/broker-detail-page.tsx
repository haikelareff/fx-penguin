"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Star, ExternalLink, Shield, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import type { Broker } from "@/types/broker"

interface BrokerDetailPageProps {
  broker: Broker
}

export default function BrokerDetailPage({ broker }: BrokerDetailPageProps) {
  const getBrokerSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, "-")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-6 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src={broker.logo || "/placeholder.svg"} alt={broker.brokerName} />
              <AvatarFallback>{broker.brokerName.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{broker.brokerName}</h1>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(broker.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm font-medium ml-1">{broker.rating}</span>
                </div>
                <Badge variant="secondary">{broker.regulation}</Badge>
                <Badge variant="outline">Min Deposit: ${broker.minDeposit}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                A comprehensive trading platform offering competitive spreads and professional trading tools.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <Link href={broker.website} target="_blank" rel="noopener noreferrer">
                Visit {broker.brokerName}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/broker/${getBrokerSlug(broker.brokerName)}/review`}>Read Full Review</Link>
            </Button>
            <Button variant="outline">Compare Brokers</Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">{broker.rating}</div>
              <div className="text-sm text-muted-foreground">Overall Rating</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">${broker.minDeposit}</div>
              <div className="text-sm text-muted-foreground">Min Deposit</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">{broker.maxLeverage}</div>
              <div className="text-sm text-muted-foreground">Max Leverage</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">{broker.spread}</div>
              <div className="text-sm text-muted-foreground">Avg Spread</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="fees">Fees</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>About {broker.brokerName}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {broker.brokerName} is a well-established forex and CFD broker that has been serving traders
                    worldwide with competitive trading conditions and professional-grade platforms.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Founded</span>
                      <span className="text-sm font-medium">2010</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Headquarters</span>
                      <span className="text-sm font-medium">London, UK</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Regulation</span>
                      <span className="text-sm font-medium">{broker.regulation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Trading Instruments</span>
                      <span className="text-sm font-medium">100+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pros & Cons</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Pros
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Competitive spreads and low fees</li>
                        <li>• Well-regulated and trustworthy</li>
                        <li>• Multiple trading platforms</li>
                        <li>• Excellent customer support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2 flex items-center">
                        <XCircle className="h-4 w-4 mr-2" />
                        Cons
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Limited cryptocurrency options</li>
                        <li>• Higher minimum for premium accounts</li>
                        <li>• No social trading features</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trading Platforms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">MetaTrader 4</span>
                      <div className="flex items-center gap-2">
                        <Progress value={90} className="w-20" />
                        <span className="text-sm">9.0</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">WebTrader</span>
                      <div className="flex items-center gap-2">
                        <Progress value={85} className="w-20" />
                        <span className="text-sm">8.5</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Mobile App</span>
                      <div className="flex items-center gap-2">
                        <Progress value={88} className="w-20" />
                        <span className="text-sm">8.8</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trading Instruments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Forex</h4>
                      <p className="text-sm text-muted-foreground">50+ currency pairs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">CFDs</h4>
                      <p className="text-sm text-muted-foreground">Stocks, indices, commodities</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Commodities</h4>
                      <p className="text-sm text-muted-foreground">Gold, silver, oil</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Crypto</h4>
                      <p className="text-sm text-muted-foreground">Bitcoin, Ethereum</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="accounts" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Standard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-primary">${broker.minDeposit}</div>
                  <p className="text-sm text-muted-foreground">Minimum deposit</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Spreads from {broker.spread}</li>
                    <li>• Leverage up to {broker.maxLeverage}</li>
                    <li>• All trading instruments</li>
                    <li>• Basic support</li>
                  </ul>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Premium</CardTitle>
                    <Badge>Popular</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-primary">$5,000</div>
                  <p className="text-sm text-muted-foreground">Minimum deposit</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Tighter spreads</li>
                    <li>• Priority support</li>
                    <li>• Market analysis</li>
                    <li>• Personal account manager</li>
                  </ul>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>VIP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-primary">$25,000</div>
                  <p className="text-sm text-muted-foreground">Minimum deposit</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Lowest spreads</li>
                    <li>• 24/7 dedicated support</li>
                    <li>• Premium research</li>
                    <li>• VIP events access</li>
                  </ul>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="fees" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trading Costs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>EUR/USD Spread</span>
                    <span className="font-medium">{broker.spread}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GBP/USD Spread</span>
                    <span className="font-medium">1.2 pips</span>
                  </div>
                  <div className="flex justify-between">
                    <span>USD/JPY Spread</span>
                    <span className="font-medium">1.0 pips</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Commission</span>
                    <span className="font-medium">$0</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Fees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
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
                    <span className="font-medium">$10/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Swap Fee</span>
                    <span className="font-medium">Variable</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="safety" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Regulation & Safety
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Fully Regulated</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {broker.brokerName} is regulated by {broker.regulation}, ensuring client fund protection and
                      regulatory compliance.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Safety Features</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Segregated client accounts
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Investor compensation scheme
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Regular audits
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        SSL encryption
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
                        <span>License</span>
                        <span className="font-medium">#123456789</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Established</span>
                        <span className="font-medium">2010</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Headquarters</span>
                        <span className="font-medium">London, UK</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
