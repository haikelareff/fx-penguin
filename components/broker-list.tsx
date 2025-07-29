"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, TrendingUp, Shield, Award, ExternalLink, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { brokersData, getBrokerSlug } from "@/data/brokers"

export function BrokerList() {
  const [sortBy, setSortBy] = useState("rating")
  const [filterBy, setFilterBy] = useState("all")

  const sortedBrokers = [...brokersData].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "reviews":
        return b.reviews - a.reviews
      case "name":
        return a.brokerName.localeCompare(b.brokerName)
      default:
        return 0
    }
  })

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filter & Sort</span>
        </div>
        <div className="flex gap-2">
          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brokers</SelectItem>
              <SelectItem value="regulated">Regulated</SelectItem>
              <SelectItem value="mt4">MT4 Support</SelectItem>
              <SelectItem value="mt5">MT5 Support</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="reviews">Reviews</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Broker Cards */}
      <div className="grid gap-6">
        {sortedBrokers.map((broker, index) => (
          <Card key={broker.brokerName} className="forex-card hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Broker Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-12 w-12 border border-border">
                      <AvatarImage
                        src={`/placeholder.svg?height=48&width=48&text=${broker.brokerName.charAt(0)}`}
                        alt={broker.brokerName}
                      />
                      <AvatarFallback className="text-lg font-bold bg-forex-green/10 text-forex-green">
                        {broker.brokerName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold">{broker.brokerName}</h3>
                        {index === 0 && <Badge className="bg-forex-gold text-white">Top Rated</Badge>}
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{broker.description}</p>
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

                  {/* Key Features */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-2 bg-muted/50 rounded-lg">
                      <div className="text-sm font-medium">Min Deposit</div>
                      <div className="text-xs text-muted-foreground">
                        ${Math.min(...broker.accountTiers.map((tier) => tier.minimumDeposit))}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded-lg">
                      <div className="text-sm font-medium">Platforms</div>
                      <div className="text-xs text-muted-foreground">{broker.tradingPlatforms.join(", ")}</div>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded-lg">
                      <div className="text-sm font-medium">Instruments</div>
                      <div className="text-xs text-muted-foreground">{broker.tradingInstruments.length}+ Types</div>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded-lg">
                      <div className="text-sm font-medium">Support</div>
                      <div className="text-xs text-muted-foreground">24/7</div>
                    </div>
                  </div>

                  {/* Trading Instruments */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {broker.tradingInstruments.slice(0, 4).map((instrument) => (
                      <Badge key={instrument} variant="secondary" className="text-xs">
                        {instrument}
                      </Badge>
                    ))}
                    {broker.tradingInstruments.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{broker.tradingInstruments.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="lg:w-64 flex flex-col gap-3">
                  <div className="text-center p-4 bg-forex-green/5 rounded-lg border border-forex-green/20">
                    <div className="text-2xl font-bold text-forex-green mb-1">{broker.rating}</div>
                    <div className="text-xs text-muted-foreground">out of 5.0</div>
                    <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(broker.rating) ? "fill-forex-gold text-forex-gold" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Link href={`/broker/${getBrokerSlug(broker.brokerName)}`}>
                    <Button className="w-full bg-forex-green hover:bg-forex-darkGreen">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </Link>

                  <Button variant="outline" className="w-full bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
