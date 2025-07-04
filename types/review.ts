export interface BrokerDetail {
  id: string
  brokerName: string
  slug: string
  overallRating: number
  totalReviews: number
  verificationStatus: "verified" | "unverified" | "warning"
  lastUpdated: string
  overview: Overview
  userReviews: UserReview[]
  expertAnalysis: ExpertAnalysis
  brokerNews: BrokerNews[]
  faqs: FAQ[]
  relatedBrokers: string[]
}

export interface Overview {
  summary: string
  pros: string[]
  cons: string[]
  verdict: string
  targetAudience: string[]
  ratingBreakdown: {
    regulation: number
    costs: number
    platforms: number
    support: number
    execution: number
  }
  keyFeatures: {
    minDeposit: number
    maxLeverage: number
    spreadsFrom: number
    platforms: string[]
    regulation: string[]
    instruments: string[]
  }
}

export interface UserReview {
  id: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  content: string
  pros: string[]
  cons: string[]
  tradingExperience: "beginner" | "intermediate" | "expert"
  accountType: string
  verificationStatus: "verified" | "unverified"
  helpfulVotes: number
  totalVotes: number
  createdAt: string
  updatedAt: string
}

export interface ExpertAnalysis {
  author: {
    name: string
    title: string
    avatar?: string
    credentials: string[]
    bio: string
  }
  publishedAt: string
  readingTime: number
  viewCount: number
  content: {
    introduction: string
    regulationAnalysis: string
    costAnalysis: string
    platformAnalysis: string
    supportAnalysis: string
    conclusion: string
  }
  comparisonTable: ComparisonRow[]
}

export interface ComparisonRow {
  feature: string
  brokerValue: string
  industryAverage: string
  rating: "excellent" | "good" | "average" | "poor"
}

export interface BrokerNews {
  id: string
  title: string
  summary: string
  publishedAt: string
  category: "update" | "promotion" | "warning" | "announcement"
  source: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  helpfulVotes: number
}

export interface ReviewFilters {
  rating?: number
  experience?: "beginner" | "intermediate" | "expert"
  accountType?: string
  sortBy: "newest" | "oldest" | "highest_rated" | "lowest_rated" | "most_helpful"
  verified?: boolean
}
