import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gift, Calendar, Clock, Users, Trophy, Percent } from "lucide-react"

export default function PromoEventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Promotions & Events</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover exclusive broker promotions, trading contests, and special events to maximize your trading
            potential.
          </p>
        </div>

        {/* Featured Promotions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Promotions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-forex-green hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="h-5 w-5 text-forex-green" />
                  <Badge className="bg-forex-green hover:bg-forex-darkGreen">Hot Deal</Badge>
                </div>
                <CardTitle>FP Markets Welcome Bonus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-forex-green mb-2">100% Deposit Bonus</div>
                <p className="text-muted-foreground mb-4">
                  Get up to $1,000 bonus on your first deposit. Perfect for new traders looking to maximize their
                  trading capital.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Valid until Dec 31, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>New clients only</span>
                  </div>
                </div>
                <Button className="w-full bg-forex-green hover:bg-forex-darkGreen">Claim Bonus</Button>
              </CardContent>
            </Card>

            <Card className="border-forex-blue hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-forex-blue" />
                  <Badge variant="outline" className="bg-forex-blue/10 text-forex-blue border-forex-blue/20">
                    Contest
                  </Badge>
                </div>
                <CardTitle>MetaTrader Pro Trading Championship</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-forex-blue mb-2">$50,000 Prize Pool</div>
                <p className="text-muted-foreground mb-4">
                  Compete with traders worldwide in our monthly trading contest. Top 10 traders share the prize pool.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>15 days remaining</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>1,247 participants</span>
                  </div>
                </div>
                <Button className="w-full bg-forex-blue hover:bg-forex-blue/90">Join Contest</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Active Promotions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Active Promotions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Percent className="h-8 w-8 text-forex-green" />
                  <Badge variant="outline">Cashback</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">50% Spread Cashback</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get 50% of your spreads back on all major currency pairs during December.
                </p>
                <div className="text-sm text-muted-foreground mb-4">Expires: Dec 31, 2024</div>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="h-8 w-8 text-forex-blue" />
                  <Badge variant="outline">Bonus</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">No Deposit Bonus</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Start trading with $25 free bonus. No deposit required for new accounts.
                </p>
                <div className="text-sm text-muted-foreground mb-4">Limited time offer</div>
                <Button variant="outline" className="w-full bg-transparent">
                  Claim Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-8 w-8 text-forex-red" />
                  <Badge variant="outline">VIP</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">VIP Account Upgrade</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Upgrade to VIP status and enjoy exclusive benefits and lower spreads.
                </p>
                <div className="text-sm text-muted-foreground mb-4">Minimum deposit: $10,000</div>
                <Button variant="outline" className="w-full bg-transparent">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-forex-green/10 rounded-lg flex flex-col items-center justify-center">
                      <div className="text-xs text-muted-foreground">DEC</div>
                      <div className="text-lg font-bold text-forex-green">20</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">Forex Trading Webinar</h3>
                      <Badge variant="outline">Free Event</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      Join our expert analysts for a live webinar on advanced forex trading strategies and market
                      outlook for 2025.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>2:00 PM GMT</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>245 registered</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">Register</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-forex-blue/10 rounded-lg flex flex-col items-center justify-center">
                      <div className="text-xs text-muted-foreground">JAN</div>
                      <div className="text-lg font-bold text-forex-blue">15</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">New Year Trading Challenge</h3>
                      <Badge className="bg-forex-blue hover:bg-forex-blue/90">Contest</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      Start the new year with our biggest trading challenge yet. $100,000 prize pool and exclusive
                      rewards.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>30-day contest</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4" />
                        <span>$100K prize pool</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section>
          <Card className="bg-gradient-to-r from-forex-green/10 to-forex-blue/10 border-forex-green/20">
            <CardContent className="p-8 text-center">
              <Gift className="h-12 w-12 text-forex-green mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Never Miss a Promotion</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about exclusive promotions, trading contests, and
                special events.
              </p>
              <Button className="bg-forex-green hover:bg-forex-darkGreen">Subscribe for Deals</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
