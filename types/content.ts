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

export interface Author {
  id: string
  name: string
  slug: string
  avatar?: string
  bio: string
  title: string
  credentials: string[]
  expertise: string[]
  socialLinks: SocialLink[]
  articlesCount: number
  joinedAt: string
}

export interface ReviewContent {
  introduction: string
  regulationSection: string
  costsSection: string
  platformsSection: string
  supportSection: string
  executionSection: string
  conclusion: string
  methodology: string
}

export interface RatingBreakdown {
  regulation: number
  costs: number
  platforms: number
  support: number
  execution: number
  overall: number
}

export interface ComparisonData {
  feature: string
  brokerValue: string
  industryAverage: string
  competitorValues: { [brokerName: string]: string }
  rating: "excellent" | "good" | "average" | "poor"
  explanation: string
}

export interface ReviewFAQ {
  id: string
  question: string
  answer: string
  category: string
  helpfulVotes: number
  totalVotes: number
}

export interface Lesson {
  id: string
  title: string
  content: string
  duration: number
  videoUrl?: string
  resources: Resource[]
  quiz?: Quiz
  order: number
}

export interface Resource {
  id: string
  title: string
  type: "pdf" | "video" | "link" | "tool"
  url: string
  description: string
}

export interface Quiz {
  id: string
  title: string
  questions: Question[]
  passingScore: number
  timeLimit?: number
}

export interface Question {
  id: string
  question: string
  type: "multiple_choice" | "true_false" | "short_answer"
  options?: string[]
  correctAnswer: string | string[]
  explanation: string
}

export interface Prize {
  position: number
  description: string
  value: number
  currency: string
}

export interface ChartData {
  id: string
  title: string
  type: "line" | "candlestick" | "bar"
  data: any[]
  timeframe: string
  instrument: string
}

export interface Prediction {
  instrument: string
  direction: "bullish" | "bearish" | "neutral"
  target: number
  stopLoss: number
  timeframe: string
  confidence: number
  reasoning: string
}

export interface SocialLink {
  platform: string
  url: string
  username: string
}

export interface SEOMetadata {
  metaTitle: string
  metaDescription: string
  keywords: string[]
  canonicalUrl: string
  ogTitle: string
  ogDescription: string
  ogImage?: string
  twitterTitle: string
  twitterDescription: string
  twitterImage?: string
  structuredData?: any
}

export type NewsCategory =
  | "market_news"
  | "broker_news"
  | "regulation"
  | "technology"
  | "analysis"
  | "education"
  | "events"

export type EducationCategory =
  | "forex_basics"
  | "technical_analysis"
  | "fundamental_analysis"
  | "risk_management"
  | "trading_psychology"
  | "platform_tutorials"
  | "strategy_guides"
