export interface NewsArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar?: string
    bio?: string
  }
  publishDate: string
  lastModified: string
  category: "market-news" | "broker-updates" | "regulatory" | "analysis" | "education"
  tags: string[]
  featured: boolean
  status: "draft" | "published" | "archived"
  readTime: number
  views: number
  likes: number
  comments: number
  seoTitle?: string
  seoDescription?: string
  featuredImage?: string
}

export interface MarketAnalysis {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  analyst: {
    name: string
    credentials: string
    avatar?: string
  }
  publishDate: string
  lastUpdated: string
  marketType: "forex" | "stocks" | "commodities" | "crypto" | "indices"
  analysisType: "technical" | "fundamental" | "sentiment" | "mixed"
  timeframe: "intraday" | "short-term" | "medium-term" | "long-term"
  instruments: string[]
  keyPoints: string[]
  riskLevel: "low" | "medium" | "high"
  confidence: number
  tags: string[]
  charts?: {
    id: string
    title: string
    description: string
    imageUrl: string
  }[]
  status: "draft" | "published" | "archived"
  views: number
  accuracy?: number
}

export interface ArticleReview {
  id: string
  brokerName: string
  slug: string
  title: string
  subtitle?: string
  content: string
  author: {
    name: string
    credentials: string
    avatar?: string
    bio?: string
  }
  publishDate: string
  lastUpdated: string
  reviewType: "comprehensive" | "quick-review" | "comparison" | "update"
  overallRating: number
  detailedRatings: {
    regulation: number
    tradingCosts: number
    platforms: number
    customerSupport: number
    education: number
    research: number
  }
  pros: string[]
  cons: string[]
  verdict: string
  targetAudience: ("beginner" | "intermediate" | "advanced" | "professional")[]
  minimumDeposit: number
  spreadInfo: {
    typical: string
    minimum: string
    variable: boolean
  }
  regulatoryInfo: {
    primary: string
    additional: string[]
    clientProtection: string
  }
  tradingInstruments: {
    forex: number
    stocks: number
    indices: number
    commodities: number
    crypto: number
  }
  accountTypes: {
    name: string
    minDeposit: number
    features: string[]
  }[]
  sections: {
    id: string
    title: string
    content: string
    order: number
  }[]
  comparisonTable?: {
    feature: string
    brokerValue: string
    industryAverage: string
    rating: "excellent" | "good" | "average" | "poor"
  }[]
  screenshots?: {
    id: string
    title: string
    description: string
    imageUrl: string
    category: "platform" | "mobile" | "account" | "trading"
  }[]
  faq: {
    question: string
    answer: string
  }[]
  relatedBrokers: string[]
  tags: string[]
  seoTitle?: string
  seoDescription?: string
  featuredImage?: string
  status: "draft" | "published" | "archived"
  views: number
  helpfulVotes: number
  totalVotes: number
}

export interface EducationalContent {
  id: string
  title: string
  slug: string
  description: string
  content: string
  author: {
    name: string
    credentials: string
    avatar?: string
  }
  publishDate: string
  lastUpdated: string
  contentType: "article" | "video" | "course" | "webinar" | "ebook" | "infographic"
  difficulty: "beginner" | "intermediate" | "advanced"
  category: "basics" | "technical-analysis" | "fundamental-analysis" | "risk-management" | "psychology" | "strategies"
  estimatedReadTime: number
  prerequisites: string[]
  learningObjectives: string[]
  keyTakeaways: string[]
  resources: {
    title: string
    type: "link" | "download" | "video"
    url: string
  }[]
  quiz?: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }[]
  tags: string[]
  featured: boolean
  status: "draft" | "published" | "archived"
  views: number
  likes: number
  completions: number
  rating: number
  totalRatings: number
}

export interface PromoEvent {
  id: string
  title: string
  slug: string
  description: string
  content: string
  eventType: "contest" | "webinar" | "bonus" | "cashback" | "education" | "demo"
  brokerName?: string
  startDate: string
  endDate: string
  registrationDeadline?: string
  status: "upcoming" | "active" | "ended" | "cancelled"
  featured: boolean
  maxParticipants?: number
  currentParticipants: number
  prizes?: {
    position: string
    prize: string
    value: number
  }[]
  requirements: string[]
  terms: string[]
  contactInfo: {
    email?: string
    phone?: string
    website?: string
  }
  tags: string[]
  bannerImage?: string
  gallery?: string[]
  views: number
  registrations: number
}

export interface ContentMetadata {
  totalArticles: number
  totalViews: number
  totalLikes: number
  totalComments: number
  popularTags: {
    tag: string
    count: number
  }[]
  topAuthors: {
    name: string
    articles: number
    totalViews: number
  }[]
  contentByCategory: {
    category: string
    count: number
  }[]
  recentActivity: {
    type: "published" | "updated" | "liked" | "commented"
    contentId: string
    contentTitle: string
    timestamp: string
    user?: string
  }[]
}
