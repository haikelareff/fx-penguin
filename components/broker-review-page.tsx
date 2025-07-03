"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  Calendar,
  Shield,
  TrendingUp,
  Clock,
  Eye,
  Award,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import type { BrokerSchema, BrokerDetail, UserReview, BrokerNews, Overview } from "@/types/broker"
import type { ArticleReview } from "@/types/content"

interface BrokerReviewPageProps {
  broker: BrokerSchema
  review: BrokerDetail
  userReviews: UserReview[]
  news: BrokerNews[]
  detailedReview: Overview
  articleReview?: ArticleReview
}

export function BrokerReviewPage({
  broker,
  review,
  userReviews,
  news,
  detailedReview,
  articleReview,
}: BrokerReviewPageProps) {
  const [reviewFilter, setReviewFilter] = useState<"all" | "review" | "complaint" | "testimonial">("all")

  const filteredReviews =
    reviewFilter === "all" ? userReviews : userReviews.filter((r) => r.reviewType === reviewFilter)

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

      <main className="flex-1 container max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
          <Link href="/" className="hover:text-forex-green">
            Home
          </Link>
          <span>/</span>
          <Link href="/brokers" className="hover:text-forex-green">
            Brokers
          </Link>
          <span>/</span>
          <Link
            href={`/broker/${broker.brokerName.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-forex-green"
          >
            {broker.brokerName}
          </Link>
          <span>/</span>
          <span className="text-foreground">Review</span>
        </div>

        <div className="grid gap-4 sm:gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div className="space-y-4 sm:space-y-8">
            {/* Header Section */}
            <Card id="overview">
              <CardContent className="p-4 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border-2 border-border mx-auto sm:mx-0">
                    <AvatarImage src={`/placeholder.svg?height=80&width=80`} alt={broker.brokerName} />
                    <AvatarFallback className="text-xl sm:text-2xl font-bold bg-forex-green/10 text-forex-green">
                      {broker.brokerName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mb-2">
                      <h1 className="text-xl sm:text-3xl font-bold">{review.brokerName} Review 2024</h1>
                      <Badge variant="outline" className="bg-forex-green/10 text-forex-green border-forex-green/20">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(review.overallRating)}</div>
                        <span className="text-xl sm:text-2xl font-bold text-forex-green">{review.overallRating}</span>
                        <span className="text-sm text-muted-foreground">({review.totalReviews} reviews)</span>
                      </div>
                      <Separator orientation="vertical" className="h-6 hidden sm:block" />
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        Updated {new Date(review.lastUpdated).toLocaleDateString()}
                      </div>
                      {articleReview && (
                        <>
                          <Separator orientation="vertical" className="h-6 hidden sm:block" />
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                            <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                            {articleReview.views.toLocaleString()} views
                          </div>
                        </>
                      )}
                    </div>

                    {articleReview && (
                      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-5 w-5 sm:h-6 sm:w-6">
                            <AvatarImage
                              src={articleReview.author.avatar || "/placeholder.svg"}
                              alt={articleReview.author.name}
                            />
                            <AvatarFallback className="text-xs">{articleReview.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-xs sm:text-sm font-medium">{articleReview.author.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {articleReview.author.credentials}
                          </Badge>
                        </div>
                        <Separator orientation="vertical" className="h-4 hidden sm:block" />
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {Math.ceil(articleReview.content.length / 1000)} min read
                        </div>
                      </div>
                    )}

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      {review.overview}
                    </p>

                    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-forex-green mb-2 sm:mb-3 flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                          Pros
                        </h3>
                        <ul className="space-y-1 sm:space-y-2">
                          {(articleReview?.pros || review.pros).map((pro, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs sm:text-sm">
                              <div className="h-1.5 w-1.5 rounded-full bg-forex-green mt-1.5 sm:mt-2 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-forex-red mb-2 sm:mb-3 flex items-center gap-2">
                          <XCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                          Cons
                        </h3>
                        <ul className="space-y-1 sm:space-y-2">
                          {(articleReview?.cons || review.cons).map((con, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs sm:text-sm">
                              <div className="h-1.5 w-1.5 rounded-full bg-forex-red mt-1.5 sm:mt-2 flex-shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {articleReview?.verdict && (
                      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-forex-green/5 border border-forex-green/20 rounded-lg">
                        <h3 className="text-sm sm:text-base font-semibold text-forex-green mb-2 flex items-center gap-2">
                          <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                          Expert Verdict
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{articleReview.verdict}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rating Breakdown */}
            <Card id="rating-breakdown">
              <CardHeader>
                <CardTitle>Rating Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(review.ratings).map(([category, rating]) => {
                    const categoryNames: Record<string, string> = {
                      businessScope: "Business Scope",
                      tradingCost: "Trading Cost",
                      tradingPlatform: "Trading Platform",
                      support: "Customer Support",
                      experience: "User Experience",
                      community: "Community",
                    }

                    return (
                      <div key={category} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{categoryNames[category]}</span>
                          <span className="text-sm font-bold">{rating}/5</span>
                        </div>
                        <Progress value={rating * 20} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Article Content */}
            {articleReview && (
              <Card id="complete-review">
                <CardHeader>
                  <CardTitle>Complete Review Analysis</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <div
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: articleReview.content.replace(/\n/g, "<br />").replace(/#{1,6}\s/g, ""),
                    }}
                  />
                </CardContent>
              </Card>
            )}

            {/* Detailed Tabs */}
            <Card>
              <CardContent className="p-0">
                <Tabs defaultValue="business-scope" className="w-full">
                  <TabsList className="grid w-full grid-cols-6 rounded-none border-b">
                    <TabsTrigger value="business-scope">Business Scope</TabsTrigger>
                    <TabsTrigger value="cost">Cost</TabsTrigger>
                    <TabsTrigger value="platform">Platform</TabsTrigger>
                    <TabsTrigger value="support">Support</TabsTrigger>
                    <TabsTrigger value="community">Community</TabsTrigger>
                    <TabsTrigger value="news">News</TabsTrigger>
                  </TabsList>

                  <div className="p-6">
                    <TabsContent value="business-scope" className="space-y-6" id="business-scope">
                      <div>
                        <h3 className="font-semibold mb-3">Regulation & Compliance</h3>
                        <p className="text-muted-foreground mb-4">{detailedReview.businessScope.regulation}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Trading Instruments</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {detailedReview.businessScope.instruments.map((instrument, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-forex-green" />
                              <span className="text-sm">{instrument}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Market Coverage</h3>
                        <p className="text-muted-foreground">{detailedReview.businessScope.marketCoverage}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Company Experience</h3>
                        <p className="text-muted-foreground">{detailedReview.businessScope.companyExperience}</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="cost" className="space-y-6" id="cost-analysis">
                      <div>
                        <h3 className="font-semibold mb-3">Spreads</h3>
                        <p className="text-muted-foreground">{detailedReview.cost.spreads}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Commissions</h3>
                        <p className="text-muted-foreground">{detailedReview.cost.commissions}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Additional Fees</h3>
                        <ul className="space-y-2">
                          {detailedReview.cost.additionalFees.map((fee, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                              {fee}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Competitiveness</h3>
                        <p className="text-muted-foreground">{detailedReview.cost.competitiveness}</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="platform" className="space-y-6" id="platform-review">
                      <div>
                        <h3 className="font-semibold mb-3">Available Platforms</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {detailedReview.platform.availablePlatforms.map((platform, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <Badge variant="outline">{platform}</Badge>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Key Features</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {detailedReview.platform.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-forex-green" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Usability</h3>
                        <p className="text-muted-foreground">{detailedReview.platform.usability}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Reliability</h3>
                        <p className="text-muted-foreground">{detailedReview.platform.reliability}</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="support" className="space-y-6" id="customer-support">
                      <div>
                        <h3 className="font-semibold mb-3">Availability</h3>
                        <p className="text-muted-foreground">{detailedReview.support.availability}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Quality</h3>
                        <p className="text-muted-foreground">{detailedReview.support.quality}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          {detailedReview.support.languages.map((language, index) => (
                            <Badge key={index} variant="outline">
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Contact Methods</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {detailedReview.support.contactMethods.map((method, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-forex-green" />
                              <span className="text-sm">{method}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="community" className="space-y-6" id="user-reviews">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">User Reviews</h3>
                          <div className="flex gap-2">
                            <Button
                              variant={reviewFilter === "all" ? "default" : "outline"}
                              size="sm"
                              onClick={() => setReviewFilter("all")}
                            >
                              All ({userReviews.length})
                            </Button>
                            <Button
                              variant={reviewFilter === "review" ? "default" : "outline"}
                              size="sm"
                              onClick={() => setReviewFilter("review")}
                            >
                              Reviews ({userReviews.filter((r) => r.reviewType === "review").length})
                            </Button>
                            <Button
                              variant={reviewFilter === "complaint" ? "default" : "outline"}
                              size="sm"
                              onClick={() => setReviewFilter("complaint")}
                            >
                              Complaints ({userReviews.filter((r) => r.reviewType === "complaint").length})
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {filteredReviews.map((userReview) => (
                            <Card key={userReview.id}>
                              <CardContent className="p-4">
                                <div className="flex items-start gap-4">
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage
                                      src={userReview.userAvatar || "/placeholder.svg"}
                                      alt={userReview.userName}
                                    />
                                    <AvatarFallback>{userReview.userName.charAt(0)}</AvatarFallback>
                                  </Avatar>

                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="font-medium">{userReview.userName}</span>
                                      {userReview.verified && (
                                        <Badge variant="outline" className="text-xs bg-forex-green/10 text-forex-green">
                                          <Shield className="h-3 w-3 mr-1" />
                                          Verified
                                        </Badge>
                                      )}
                                      <Badge variant="outline" className="text-xs">
                                        {userReview.tradingExperience}
                                      </Badge>
                                      <Badge
                                        variant={
                                          userReview.reviewType === "review"
                                            ? "default"
                                            : userReview.reviewType === "complaint"
                                              ? "destructive"
                                              : "secondary"
                                        }
                                        className="text-xs"
                                      >
                                        {userReview.reviewType}
                                      </Badge>
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                      <div className="flex">{renderStars(userReview.rating)}</div>
                                      <span className="text-sm font-medium">{userReview.rating}/5</span>
                                      <span className="text-xs text-muted-foreground">
                                        {new Date(userReview.date).toLocaleDateString()}
                                      </span>
                                    </div>

                                    <h4 className="font-medium mb-2">{userReview.title}</h4>
                                    <p className="text-sm text-muted-foreground mb-3">{userReview.content}</p>

                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                      <button className="flex items-center gap-1 hover:text-forex-green">
                                        <ThumbsUp className="h-3 w-3" />
                                        Helpful ({userReview.helpful})
                                      </button>
                                      <button className="flex items-center gap-1 hover:text-forex-red">
                                        <ThumbsDown className="h-3 w-3" />
                                        Not Helpful ({userReview.notHelpful})
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="news" className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold">Latest Broker News</h3>
                        {news.length > 0 ? (
                          <div className="space-y-4">
                            {news.map((newsItem) => (
                              <Card key={newsItem.id}>
                                <CardContent className="p-4">
                                  <div className="flex items-start gap-4">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="outline">{newsItem.category}</Badge>
                                        <span className="text-xs text-muted-foreground">
                                          {new Date(newsItem.publishDate).toLocaleDateString()}
                                        </span>
                                        <span className="text-xs text-muted-foreground">by {newsItem.author}</span>
                                      </div>
                                      <h4 className="font-medium mb-2">{newsItem.title}</h4>
                                      <p className="text-sm text-muted-foreground mb-3">{newsItem.excerpt}</p>
                                      <div className="flex flex-wrap gap-1">
                                        {newsItem.tags.map((tag, index) => (
                                          <Badge key={index} variant="secondary" className="text-xs">
                                            {tag}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground">No recent news available for this broker.</p>
                        )}
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            {articleReview?.faq && articleReview.faq.length > 0 && (
              <Card id="faq">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {articleReview.faq.map((faqItem, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-2">{faqItem.question}</h3>
                      <p className="text-muted-foreground">{faqItem.answer}</p>
                      {index < articleReview.faq.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Table of Contents - Sticky */}
            <div className="sticky top-4 hidden lg:block">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <nav className="space-y-1">
                    <a
                      href="#overview"
                      className="block text-sm text-muted-foreground hover:text-forex-green transition-colors py-1 border-l-2 border-transparent hover:border-forex-green pl-3"
                    >
                      Overview
                    </a>
                    <a
                      href="#rating-breakdown"
                      className="block text-sm text-muted-foreground hover:text-forex-green transition-colors py-1 border-l-2 border-transparent hover:border-forex-green pl-3"
                    >
                      Rating Breakdown
                    </a>
                    {articleReview && (
                      <a
                        href="#complete-review"
                        className="block text-sm text-muted-foreground hover:text-forex-green transition-colors py-1 border-l-2 border-transparent hover:border-forex-green pl-3"
                      >
                        Complete Review
                      </a>
                    )}
                    <a
                      href="#business-scope"
                      className="block text-sm text-muted-foreground hover:text-forex-green transition-colors py-1 border-l-2 border-transparent hover:border-forex-green pl-3"
                    >
                      Business Scope
                    </a>
                    <a
                      href="#cost-analysis"
                      className="block text-sm text-muted-foreground hover:text-forex-green transition-colors py-1 border-l-2 border-transparent hover:border-forex-green pl-3"
                    >
                      Cost Analysis
                    </a>
                    <a
                      href="#platform-review"
                      className="block text-sm text-muted-foreground hover:text-forex-green transition-colors py-1 border-l-2 border-transparent hover:border-forex-green pl-3"
                    >
                      Platform Review
                    </a>
                    <a
                      href="#customer-support"
                      className="block text-sm text-muted-foreground hover:text-forex-green transition-colors py-1 border-l-2 border-transparent hover:border-forex-green pl-3"
                    >
                      Customer Support
                    </a>
                    <a
                      href="#user-reviews"
                      className="block text-sm text-muted-foreground hover:text-forex-green transition-colors py-1 border-l-2 border-transparent hover:border-forex-green pl-3"
                    >
                      User Reviews
                    </a>
                    {articleReview?.faq && articleReview.faq.length > 0 && (
                      <a
                        href="#faq"
                        className="block text-sm text-muted-foreground hover:text-forex-green transition-colors py-1 border-l-2 border-transparent hover:border-forex-green pl-3"
                      >
                        FAQ
                      </a>
                    )}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <Button className="w-full bg-forex-green hover:bg-forex-darkGreen text-sm">
                  Visit {broker.brokerName}
                </Button>
                <Button variant="outline" className="w-full bg-transparent text-sm">
                  Compare Brokers
                </Button>
                <Button variant="outline" className="w-full bg-transparent text-sm">
                  Read More Reviews
                </Button>
              </CardContent>
            </Card>

            {/* Key Information */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg">Key Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">Founded</span>
                  <span className="text-xs sm:text-sm font-medium">{broker.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">Headquarters</span>
                  <span className="text-xs sm:text-sm font-medium">{broker.headquarters}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">Regulation</span>
                  <span className="text-xs sm:text-sm font-medium">{broker.regulation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">Min Deposit</span>
                  <span className="text-xs sm:text-sm font-medium">${broker.minDeposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">Max Leverage</span>
                  <span className="text-xs sm:text-sm font-medium">1:{broker.maxLeverage}</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Brokers */}
            {articleReview?.relatedBrokers && articleReview.relatedBrokers.length > 0 && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">Related Brokers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  {articleReview.relatedBrokers.map((relatedBroker, index) => (
                    <Link
                      key={index}
                      href={`/broker/${relatedBroker.toLowerCase().replace(/\s+/g, "-")}/review`}
                      className="block p-2 sm:p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                          <AvatarFallback className="text-xs">{relatedBroker.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs sm:text-sm font-medium">{relatedBroker}</span>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Helpful Votes */}
            {articleReview && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">Was this review helpful?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="flex gap-2 sm:gap-3">
                    <Button variant="outline" className="flex-1 bg-transparent text-xs sm:text-sm">
                      <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Yes ({articleReview.helpfulVotes})
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent text-xs sm:text-sm">
                      <ThumbsDown className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      No ({articleReview.totalVotes - articleReview.helpfulVotes})
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    {Math.round((articleReview.helpfulVotes / articleReview.totalVotes) * 100)}% found this review
                    helpful
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
