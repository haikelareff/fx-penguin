"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Star, Shield, Award, ExternalLink, Check, X, Globe, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import type { BrokerAccountSchema } from "@/types/broker"

interface BrokerDetailPageProps {
  broker: BrokerAccountSchema
}

export function BrokerDetailPage({ broker }: BrokerDetailPageProps) {
  const [selectedAccount, setSelectedAccount] = useState(broker.accountTiers[0])

  const getPaymentMethodIcon = (method: string) => {
    const icons: Record<string, string> = {
      "Bank Transfer": "🏦",
      "Credit/Debit Card": "💳",
      Neteller: "🔵",
      Skrill: "🟣",
      PayPal: "🔵",
      FasaPay: "🟢",
      PayTrust88: "🟡",
      "Ngan Luong": "🔴",
      Interac: "🔶",
      Dragonpay: "🐉",
    }
    return icons[method] || "💰"
  }

  const getPlatformBadgeColor = (platform: string) => {
    const colors: Record<string, string> = {
      MT4: "bg-blue-100 text-blue-800 border-blue-200",
      MT5: "bg-green-100 text-green-800 border-green-200",
      cTrader: "bg-purple-100 text-purple-800 border-purple-200",
    }
    return colors[platform] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-forex-green transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Brokers
          </Link>
        </div>

        {/* Broker Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-4">
              <Avatar className="h-16 w-16 border border-border">
                <AvatarImage
                  src={`/placeholder.svg?height=64&width=64&text=${broker.brokerName.charAt(0)}`}
                  alt={broker.brokerName}
                />
                <AvatarFallback className="text-xl font-bold bg-forex-green/10 text-forex-green">
                  {broker.brokerName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{broker.brokerName}</h1>
                <p className="text-muted-foreground mb-3">{broker.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-forex-green/10 text-forex-green border-forex-green/20">
                    <Shield className="h-3 w-3 mr-1" />
                    {broker.regulation}
                  </Badge>
                  <Badge variant="outline" className="bg-forex-gold/10 text-forex-gold border-forex-gold/20">
                    <Award className="h-3 w-3 mr-1" />
                    {broker.rating}/5.0
                  </Badge>
                  <Badge variant="outline">
                    <Star className="h-3 w-3 mr-1" />
                    {broker.reviews} Reviews
                  </Badge>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Calendar className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                <div className="text-sm font-medium">Founded</div>
                <div className="text-xs text-muted-foreground">{broker.founded}</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <MapPin className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                <div className="text-sm font-medium">Headquarters</div>
                <div className="text-xs text-muted-foreground">{broker.headquarters}</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Globe className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                <div className="text-sm font-medium">Website</div>
                <div className="text-xs text-muted-foreground">Official Site</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Shield className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                <div className="text-sm font-medium">Regulation</div>
                <div className="text-xs text-muted-foreground">Regulated</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="lg:w-80">
            <Card className="forex-card">
              <CardHeader>
                <CardTitle className="text-center">Start Trading</CardTitle>
                <CardDescription className="text-center">Open an account with {broker.brokerName}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-forex-green hover:bg-forex-darkGreen" size="lg">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Live Account
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  Try Demo Account
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  Minimum deposit: ${selectedAccount.minimumDeposit}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content Tabs - Fixed Height Container */}
        <Tabs defaultValue="accounts" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="accounts">Account Types</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="instruments">Instruments</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>

          {/* Fixed Height Container for All Tab Content */}
          <div className="min-h-[800px] mt-6">
            {/* Account Types Tab */}
            <TabsContent value="accounts" className="space-y-6 m-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {broker.accountTiers.map((account, index) => (
                  <Card
                    key={index}
                    className={`forex-card cursor-pointer transition-all h-fit ${
                      selectedAccount.name === account.name ? "ring-2 ring-forex-green" : ""
                    }`}
                    onClick={() => setSelectedAccount(account)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {account.name}
                        {account.name === "Pro Account" && <Badge className="bg-forex-gold text-white">Popular</Badge>}
                      </CardTitle>
                      <CardDescription>Minimum deposit: ${account.minimumDeposit}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Spread Type:</span>
                          <span className="font-medium text-right flex-1 ml-2">{account.spreadType}</span>
                        </div>
                        {account.commission && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Commission:</span>
                            <span className="font-medium text-right flex-1 ml-2">{account.commission}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Leverage:</span>
                          <span className="font-medium">{account.leverage}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Min Volume:</span>
                          <span className="font-medium">{account.minTradeVolume}</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Base Currencies:</div>
                        <div className="flex flex-wrap gap-1">
                          {account.baseCurrency.slice(0, 6).map((currency) => (
                            <Badge key={currency} variant="secondary" className="text-xs">
                              {currency}
                            </Badge>
                          ))}
                          {account.baseCurrency.length > 6 && (
                            <Badge variant="secondary" className="text-xs">
                              +{account.baseCurrency.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {account.additionalFeatures && (
                        <>
                          <Separator />
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Features:</div>
                            <div className="space-y-1">
                              {account.additionalFeatures.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs">
                                  <Check className="h-3 w-3 text-forex-green flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Selected Account Details */}
              <Card className="forex-card">
                <CardHeader>
                  <CardTitle>{selectedAccount.name} - Detailed Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Trading Conditions</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Margin Call Level:</span>
                          <span className="font-medium">{selectedAccount.marginCallLevel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Stop Out Level:</span>
                          <span className="font-medium">{selectedAccount.stopOutLevel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Minimum Trade Volume:</span>
                          <span className="font-medium">{selectedAccount.minTradeVolume}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Supported Currencies</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {selectedAccount.baseCurrency.map((currency) => (
                          <Badge key={currency} variant="outline" className="justify-center">
                            {currency}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Trading Platforms Tab */}
            <TabsContent value="platforms" className="space-y-6 m-0">
              <div className="grid gap-6 md:grid-cols-3">
                {broker.tradingPlatforms.map((platform) => (
                  <Card key={platform} className="forex-card h-fit">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Badge className={getPlatformBadgeColor(platform)}>{platform}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          {platform === "MT4" && "MetaTrader 4 - The world's most popular trading platform"}
                          {platform === "MT5" && "MetaTrader 5 - Advanced multi-asset platform"}
                          {platform === "cTrader" && "cTrader - Professional ECN trading platform"}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-forex-green flex-shrink-0" />
                            <span>Expert Advisors Support</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-forex-green flex-shrink-0" />
                            <span>Mobile Trading</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-forex-green flex-shrink-0" />
                            <span>Advanced Charting</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full bg-transparent">
                          Download {platform}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Platform Comparison */}
              <Card className="forex-card">
                <CardHeader>
                  <CardTitle>Platform Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">Feature</th>
                          {broker.tradingPlatforms.map((platform) => (
                            <th key={platform} className="text-center p-3">
                              {platform}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3">Expert Advisors</td>
                          {broker.tradingPlatforms.map((platform) => (
                            <td key={platform} className="text-center p-3">
                              <Check className="h-4 w-4 text-forex-green mx-auto" />
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Mobile App</td>
                          {broker.tradingPlatforms.map((platform) => (
                            <td key={platform} className="text-center p-3">
                              <Check className="h-4 w-4 text-forex-green mx-auto" />
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">One-Click Trading</td>
                          {broker.tradingPlatforms.map((platform) => (
                            <td key={platform} className="text-center p-3">
                              <Check className="h-4 w-4 text-forex-green mx-auto" />
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Trading Instruments Tab */}
            <TabsContent value="instruments" className="space-y-6 m-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {broker.tradingInstruments.map((instrument) => (
                  <Card key={instrument} className="forex-card h-fit">
                    <CardHeader>
                      <CardTitle className="text-lg">{instrument}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          {instrument === "Forex" && "Major, minor and exotic currency pairs"}
                          {instrument === "Commodities" && "Gold, Silver, Oil and other commodities"}
                          {instrument === "Indices" && "Global stock indices and futures"}
                          {instrument === "Stocks" && "Individual company shares"}
                          {instrument === "Cryptocurrencies" && "Bitcoin, Ethereum and other cryptos"}
                          {instrument === "ETFs" && "Exchange-traded funds"}
                        </p>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Available pairs: </span>
                          <span className="font-medium">
                            {instrument === "Forex" && "60+"}
                            {instrument === "Commodities" && "15+"}
                            {instrument === "Indices" && "20+"}
                            {instrument === "Stocks" && "100+"}
                            {instrument === "Cryptocurrencies" && "10+"}
                            {instrument === "ETFs" && "25+"}
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Typical spread: </span>
                          <span className="font-medium text-forex-green">
                            {instrument === "Forex" && "0.0-1.5 pips"}
                            {instrument === "Commodities" && "0.3-5.0 pips"}
                            {instrument === "Indices" && "0.5-2.0 points"}
                            {instrument === "Stocks" && "0.1% commission"}
                            {instrument === "Cryptocurrencies" && "1.0-3.0%"}
                            {instrument === "ETFs" && "0.05% commission"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Payment Methods Tab */}
            <TabsContent value="payments" className="space-y-6 m-0">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Deposit Options */}
                <Card className="forex-card h-fit">
                  <CardHeader>
                    <CardTitle className="text-forex-green">Deposit Methods</CardTitle>
                    <CardDescription>Available options for funding your account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {broker.depositOptions.map((method) => (
                        <div key={method} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                          <span className="text-lg">{getPaymentMethodIcon(method)}</span>
                          <span className="font-medium">{method}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Withdrawal Options */}
                <Card className="forex-card h-fit">
                  <CardHeader>
                    <CardTitle className="text-forex-blue">Withdrawal Methods</CardTitle>
                    <CardDescription>Available options for withdrawing funds</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {broker.withdrawalOptions.map((method) => (
                        <div key={method} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                          <span className="text-lg">{getPaymentMethodIcon(method)}</span>
                          <span className="font-medium">{method}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Processing Times */}
              <Card className="forex-card">
                <CardHeader>
                  <CardTitle>Processing Times & Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Method</th>
                          <th className="text-left p-2">Deposit Time</th>
                          <th className="text-left p-2">Withdrawal Time</th>
                          <th className="text-left p-2">Fees</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">Bank Transfer</td>
                          <td className="p-2">1-3 business days</td>
                          <td className="p-2">3-5 business days</td>
                          <td className="p-2">Free</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Credit/Debit Card</td>
                          <td className="p-2">Instant</td>
                          <td className="p-2">3-5 business days</td>
                          <td className="p-2">Free</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">E-wallets</td>
                          <td className="p-2">Instant</td>
                          <td className="p-2">24 hours</td>
                          <td className="p-2">Free</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-6 m-0">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Trading Features */}
                <Card className="forex-card h-fit">
                  <CardHeader>
                    <CardTitle>Trading Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(broker.features).map(([feature, enabled]) => (
                        <div key={feature} className="flex items-center justify-between">
                          <span className="font-medium capitalize">{feature.replace(/([A-Z])/g, " $1").trim()}</span>
                          {enabled ? (
                            <Check className="h-5 w-5 text-forex-green" />
                          ) : (
                            <X className="h-5 w-5 text-forex-red" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Customer Support */}
                <Card className="forex-card h-fit">
                  <CardHeader>
                    <CardTitle>Customer Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm">{broker.customerSupport}</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-forex-green flex-shrink-0" />
                          <span className="text-sm">24/7 Live Chat</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-forex-green flex-shrink-0" />
                          <span className="text-sm">Phone Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-forex-green flex-shrink-0" />
                          <span className="text-sm">Email Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-forex-green flex-shrink-0" />
                          <span className="text-sm">Multilingual Support</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Information */}
              <Card className="forex-card">
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <h4 className="font-semibold mb-2">Education</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Trading webinars</li>
                        <li>• Market analysis</li>
                        <li>• Educational videos</li>
                        <li>• Trading guides</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tools</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Economic calendar</li>
                        <li>• Trading signals</li>
                        <li>• Market news</li>
                        <li>• Risk calculator</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Security</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• SSL encryption</li>
                        <li>• Segregated accounts</li>
                        <li>• Two-factor auth</li>
                        <li>• Regular audits</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ForexHub. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-forex-green transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-forex-green transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-forex-green transition-colors">
              Risk Disclosure
            </a>
            <a href="#" className="hover:text-forex-green transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
