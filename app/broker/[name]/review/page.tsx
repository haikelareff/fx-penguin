import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BrokerReviewPage } from "@/components/broker-review-page"
import { getBrokerDetail, getUserReviews, getBrokerNews, getOverview } from "@/data/reviews"
import { getArticleReviewByBroker } from "@/data/content"
import { brokersData } from "@/data/brokers"

interface PageProps {
  params: {
    name: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const brokerName = params.name.replace(/-/g, " ")
  const review = getBrokerDetail(brokerName)
  const articleReview = getArticleReviewByBroker(brokerName)

  if (!review) {
    return {
      title: "Broker Review Not Found | FX Penguin",
      description: "The requested broker review could not be found.",
    }
  }

  return {
    title: `${review.brokerName} Review 2024 - Complete Analysis | FX Penguin`,
    description: `Comprehensive ${review.brokerName} review covering regulation, trading costs, platforms, and user experiences. Read our expert analysis with ${review.totalReviews} trader reviews.`,
    keywords: [
      `${review.brokerName} review`,
      `${review.brokerName} broker`,
      "forex broker review",
      "trading platform review",
      "broker analysis",
      "forex trading",
    ],
    openGraph: {
      title: `${review.brokerName} Review 2024 | FX Penguin`,
      description: review.overview,
      type: "article",
      publishedTime: review.lastUpdated,
      authors: articleReview ? [articleReview.author.name] : ["FX Penguin Editorial Team"],
      tags: articleReview?.tags || ["forex", "broker-review", "trading"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${review.brokerName} Review 2024`,
      description: review.overview,
    },
    alternates: {
      canonical: `/broker/${params.name}/review`,
    },
  }
}

export async function generateStaticParams() {
  return brokersData.map((broker) => ({
    name: broker.brokerName.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export default function BrokerReviewPageRoute({ params }: PageProps) {
  const brokerName = params.name.replace(/-/g, " ")

  // Get broker data
  const broker = brokersData.find((b) => b.brokerName.toLowerCase().replace(/\s+/g, "-") === params.name)

  if (!broker) {
    notFound()
  }

  // Get review data
  const review = getBrokerDetail(brokerName)
  const userReviews = getUserReviews(brokerName)
  const news = getBrokerNews(brokerName)
  const overview = getOverview(brokerName)
  const articleReview = getArticleReviewByBroker(brokerName)

  if (!review || !overview) {
    notFound()
  }

  return (
    <BrokerReviewPage
      broker={broker}
      review={review}
      userReviews={userReviews}
      news={news}
      detailedReview={overview}
      articleReview={articleReview}
    />
  )
}
