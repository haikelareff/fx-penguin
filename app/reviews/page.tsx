import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, TrendingUp, Users, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ReviewsPage() {
  const featuredReviews = [
    {
      brokerName: "FP Markets",
      rating: 4.3,
      totalReviews: 1247,
      excerpt: "Excellent broker with tight spreads and professional service",
      slug: "fp-markets",
    },
    {
      brokerName: "MetaTrader Pro",
      rating: 4.1,
      totalReviews: 892,
      excerpt: "Advanced trading platform with comprehensive tools",
      slug: "metatrader-pro",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : i < rating
              ? "fill-yellow-400/50 text-yellow-400"
              : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Broker Reviews & Ratings</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Read comprehensive reviews and ratings from real traders. Make informed decisions with our detailed broker
            analysis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="relative w-full sm:w-auto">
              <Input placeholder="Search broker reviews..." className="w-full sm:w-[300px]" />
            </div>
            <Button className="bg-forex-green hover:bg-forex-darkGreen">Search Reviews</Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-forex-green mx-auto mb-2" />
                <div className="text-2xl font-bold">45+</div>
                <div className="text-sm text-muted-foreground">Brokers Reviewed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-forex-blue mx-auto mb-2" />
                <div className="text-2xl font-bold">12K+</div>
                <div className="text-sm text-muted-foreground">User Reviews</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-8 w-8 text-forex-red mx-auto mb-2" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Verified Reviews</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Reviews */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Broker Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredReviews.map((review) => (
              <Card key={review.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border-2 border-border">
                      <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={review.brokerName} />
                      <AvatarFallback className="bg-forex-green/10 text-forex-green font-bold">
                        {review.brokerName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{review.brokerName}</h3>
                        <Badge variant="outline" className="bg-forex-green/10 text-forex-green border-forex-green/20">
                          Verified
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="font-bold text-forex-green">{review.rating}</span>
                        <span className="text-muted-foreground">({review.totalReviews} reviews)</span>
                      </div>

                      <p className="text-muted-foreground mb-4">{review.excerpt}</p>

                      <Button variant="outline" asChild>
                        <Link href={`/broker/${review.slug}/review`}>Read Full Review</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-forex-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Top Rated Brokers</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Discover the highest-rated brokers based on trader reviews
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  View Top Rated
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-forex-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Most Reviewed</h3>
                <p className="text-muted-foreground text-sm mb-4">Brokers with the most trader feedback and reviews</p>
                <Button variant="outline" className="w-full bg-transparent">
                  View Most Reviewed
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 text-forex-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Recent Reviews</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Latest reviews and ratings from the trading community
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  View Recent
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-forex-green/10 to-forex-blue/10 border-forex-green/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Share Your Trading Experience</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Help other traders by sharing your experience with forex brokers. Your review can make a difference in
                someone's trading journey.
              </p>
              <Button className="bg-forex-green hover:bg-forex-darkGreen">Write a Review</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
