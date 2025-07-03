export interface BrokerDetail {
  brokerName: string
  overallRating: number
  totalReviews: number
  lastUpdated: string
  overview: string
  pros: string[]
  cons: string[]
  ratings: {
    businessScope: number
    tradingCost: number
    tradingPlatform: number
    support: number
    experience: number
    community: number
  }
}

export interface UserReview {
  id: string
  userName: string
  userAvatar?: string
  rating: number
  reviewType: "review" | "complaint" | "testimonial"
  title: string
  content: string
  tradingExperience: "Beginner" | "Intermediate" | "Advanced" | "Professional"
  verified: boolean
  date: string
  helpful: number
  notHelpful: number
  brokerName: string
}

export interface BrokerNews {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  category: string
  featured: boolean
  brokerName: string
  tags: string[]
}

export interface Overview {
  brokerName: string
  businessScope: {
    regulation: string
    instruments: string[]
    marketCoverage: string
    companyExperience: string
  }
  cost: {
    spreads: string
    commissions: string
    additionalFees: string[]
    competitiveness: string
  }
  platform: {
    availablePlatforms: string[]
    features: string[]
    usability: string
    reliability: string
  }
  support: {
    availability: string
    quality: string
    languages: string[]
    contactMethods: string[]
  }
}
