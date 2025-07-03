import type { BrokerDetail, UserReview, BrokerNews, Overview } from "@/types/review"

export const reviewsData: BrokerDetail[] = [
  {
    brokerName: "FP Markets",
    overallRating: 4.3,
    totalReviews: 1247,
    lastUpdated: "2024-12-15",
    overview:
      "FP Markets is a well-established Australian broker offering competitive trading conditions with tight spreads and multiple account types. Known for their excellent customer service and comprehensive trading platforms including MT4, MT5, and cTrader.",
    pros: [
      "Tight spreads from 0.0 pips",
      "Multiple regulated licenses",
      "Excellent customer support",
      "Wide range of trading instruments",
      "Negative balance protection",
    ],
    cons: [
      "Higher minimum deposit for some accounts",
      "Limited educational resources",
      "No proprietary trading platform",
    ],
    ratings: {
      businessScope: 4.5,
      tradingCost: 4.2,
      tradingPlatform: 4.1,
      support: 4.6,
      experience: 4.3,
      community: 4.0,
    },
  },
  {
    brokerName: "MetaTrader Pro",
    overallRating: 4.1,
    totalReviews: 892,
    lastUpdated: "2024-12-10",
    overview:
      "MetaTrader Pro offers advanced trading solutions with focus on professional traders. Features competitive spreads, fast execution, and comprehensive market analysis tools.",
    pros: [
      "Advanced trading tools",
      "Fast execution speeds",
      "Professional market analysis",
      "Multiple asset classes",
      "Strong regulation",
    ],
    cons: ["Complex interface for beginners", "Higher fees for some services", "Limited payment methods"],
    ratings: {
      businessScope: 4.2,
      tradingCost: 3.9,
      tradingPlatform: 4.4,
      support: 4.0,
      experience: 4.1,
      community: 3.8,
    },
  },
  {
    brokerName: "TradeFX Global",
    overallRating: 4.0,
    totalReviews: 756,
    lastUpdated: "2024-12-08",
    overview:
      "TradeFX Global provides comprehensive trading solutions with competitive spreads and multiple platform options. Regulated by top-tier authorities with strong client protection measures.",
    pros: [
      "Competitive spreads",
      "Multiple platform options",
      "Strong regulation",
      "Good customer support",
      "Wide instrument selection",
    ],
    cons: ["Limited educational content", "Higher minimum deposits", "No social trading features"],
    ratings: {
      businessScope: 4.1,
      tradingCost: 4.0,
      tradingPlatform: 3.9,
      support: 4.2,
      experience: 4.0,
      community: 3.7,
    },
  },
]

export const userReviewsData: UserReview[] = [
  // FP Markets Reviews
  {
    id: "1",
    userName: "TradingPro2024",
    rating: 5,
    reviewType: "review",
    title: "Excellent broker with tight spreads",
    content:
      "I've been trading with FP Markets for over 2 years now and I'm very satisfied. The spreads are consistently tight, execution is fast, and customer support is responsive. The MT5 platform works flawlessly.",
    tradingExperience: "Advanced",
    verified: true,
    date: "2024-12-01",
    helpful: 23,
    notHelpful: 2,
    brokerName: "FP Markets",
  },
  {
    id: "2",
    userName: "ForexNewbie",
    rating: 4,
    reviewType: "testimonial",
    title: "Great for beginners",
    content:
      "As a new trader, I found FP Markets very helpful. Their support team guided me through the account setup process and answered all my questions patiently.",
    tradingExperience: "Beginner",
    verified: true,
    date: "2024-11-28",
    helpful: 15,
    notHelpful: 1,
    brokerName: "FP Markets",
  },
  {
    id: "3",
    userName: "ScalpingMaster",
    rating: 2,
    reviewType: "complaint",
    title: "Slippage issues during news",
    content:
      "While the broker is generally good, I've experienced significant slippage during major news events. This has affected my scalping strategy negatively.",
    tradingExperience: "Professional",
    verified: true,
    date: "2024-11-25",
    helpful: 8,
    notHelpful: 12,
    brokerName: "FP Markets",
  },
  // MetaTrader Pro Reviews
  {
    id: "4",
    userName: "ProTrader88",
    rating: 4,
    reviewType: "review",
    title: "Solid platform for professionals",
    content:
      "MetaTrader Pro offers excellent tools for professional trading. The execution is fast and the platform is stable. However, the interface can be overwhelming for beginners.",
    tradingExperience: "Professional",
    verified: true,
    date: "2024-11-30",
    helpful: 18,
    notHelpful: 3,
    brokerName: "MetaTrader Pro",
  },
  {
    id: "5",
    userName: "SwingTrader2024",
    rating: 5,
    reviewType: "testimonial",
    title: "Perfect for swing trading",
    content:
      "I've been using MetaTrader Pro for swing trading and it's perfect. The analysis tools are comprehensive and the execution is reliable.",
    tradingExperience: "Intermediate",
    verified: true,
    date: "2024-11-22",
    helpful: 12,
    notHelpful: 1,
    brokerName: "MetaTrader Pro",
  },
  // TradeFX Global Reviews
  {
    id: "6",
    userName: "GlobalTrader",
    rating: 4,
    reviewType: "review",
    title: "Good overall experience",
    content:
      "TradeFX Global has been reliable for my trading needs. The spreads are competitive and the platform is stable. Customer support could be faster though.",
    tradingExperience: "Advanced",
    verified: true,
    date: "2024-11-20",
    helpful: 14,
    notHelpful: 2,
    brokerName: "TradeFX Global",
  },
]

export const brokerNewsData: BrokerNews[] = [
  // FP Markets News
  {
    id: "1",
    title: "FP Markets Expands Trading Instruments Portfolio",
    excerpt:
      "FP Markets announces the addition of 50+ new CFD instruments including popular tech stocks and emerging market indices.",
    content:
      "FP Markets continues to expand its offering by adding over 50 new CFD instruments to its already comprehensive portfolio. The new additions include popular technology stocks, emerging market indices, and additional cryptocurrency pairs. This expansion demonstrates FP Markets' commitment to providing traders with diverse investment opportunities across global markets.",
    author: "FX Penguin Editorial Team",
    publishDate: "2024-12-10",
    category: "Product Updates",
    featured: true,
    brokerName: "FP Markets",
    tags: ["CFDs", "Stocks", "Expansion", "Trading Instruments"],
  },
  {
    id: "2",
    title: "New Regulatory License Obtained",
    excerpt: "FP Markets secures additional regulatory approval, strengthening its global compliance framework.",
    content:
      "FP Markets has successfully obtained an additional regulatory license, further strengthening its commitment to regulatory compliance and trader protection. This new license allows the broker to serve clients in additional jurisdictions while maintaining the highest standards of financial security and operational transparency.",
    author: "Regulatory News Desk",
    publishDate: "2024-11-28",
    category: "Regulation",
    featured: false,
    brokerName: "FP Markets",
    tags: ["Regulation", "License", "Compliance"],
  },
  // MetaTrader Pro News
  {
    id: "3",
    title: "MetaTrader Pro Launches Advanced Analytics Suite",
    excerpt: "New comprehensive market analysis tools now available for professional traders.",
    content:
      "MetaTrader Pro has launched its advanced analytics suite, providing professional traders with institutional-grade market analysis tools. The new suite includes advanced charting capabilities, sentiment analysis, and AI-powered market insights.",
    author: "Technology News Team",
    publishDate: "2024-12-05",
    category: "Product Updates",
    featured: true,
    brokerName: "MetaTrader Pro",
    tags: ["Analytics", "Technology", "Professional Trading"],
  },
  // TradeFX Global News
  {
    id: "4",
    title: "TradeFX Global Reduces Spreads Across Major Pairs",
    excerpt: "Significant spread reductions announced for EUR/USD, GBP/USD, and other major currency pairs.",
    content:
      "TradeFX Global has announced significant spread reductions across major currency pairs, making trading more cost-effective for clients. The new pricing structure reflects the broker's commitment to providing competitive trading conditions.",
    author: "Market News Team",
    publishDate: "2024-12-01",
    category: "Pricing Updates",
    featured: false,
    brokerName: "TradeFX Global",
    tags: ["Spreads", "Pricing", "Major Pairs"],
  },
]

export const overviewData: Overview[] = [
  {
    brokerName: "FP Markets",
    businessScope: {
      regulation:
        "FP Markets is regulated by multiple tier-1 regulators including ASIC (Australia), CySEC (Cyprus), and FSCA (South Africa). This multi-jurisdictional regulation provides strong trader protection and ensures compliance with international financial standards.",
      instruments: ["60+ Forex pairs", "10,000+ CFD stocks", "19+ Indices", "8+ Commodities", "5+ Cryptocurrencies"],
      marketCoverage:
        "Global market coverage with access to major financial centers including New York, London, Tokyo, and Sydney. Offers trading on US, European, and Asian markets.",
      companyExperience:
        "Founded in 2005, FP Markets has over 18 years of experience in the financial markets. The company has built a strong reputation for reliability and innovation in the forex and CFD trading space.",
    },
    cost: {
      spreads:
        "Raw spreads from 0.0 pips on major currency pairs. Standard account spreads from 1.0 pips. Competitive pricing across all major and minor pairs.",
      commissions:
        "Raw Account: AUD $3 per lot per side. Standard Account: No commission (spread-only pricing). Pro Account: AUD $3 per lot per side with institutional spreads.",
      additionalFees: [
        "No deposit fees",
        "No withdrawal fees for most methods",
        "Inactivity fee after 12 months",
        "Overnight financing charges apply",
      ],
      competitiveness:
        "FP Markets offers highly competitive pricing, ranking in the top 10% of brokers for cost-effectiveness. The Raw Account provides institutional-level pricing for active traders.",
    },
    platform: {
      availablePlatforms: ["MetaTrader 4", "MetaTrader 5", "cTrader", "WebTrader", "Mobile Apps"],
      features: [
        "Expert Advisors supported",
        "One-click trading",
        "Advanced charting",
        "Market depth",
        "Economic calendar",
        "VPS hosting available",
      ],
      usability:
        "Platforms are user-friendly with intuitive interfaces. Suitable for both beginners and professional traders. Comprehensive customization options available.",
      reliability:
        "99.9% uptime with robust server infrastructure. Multiple server locations ensure fast execution and minimal latency. Regular platform updates and maintenance.",
    },
    support: {
      availability: "24/5 customer support during market hours. Live chat, phone, and email support available.",
      quality:
        "Highly rated customer support with knowledgeable representatives. Average response time under 2 minutes for live chat.",
      languages: ["English", "Chinese", "Arabic", "Spanish", "French", "German", "Italian"],
      contactMethods: ["Live Chat", "Phone Support", "Email", "Support Tickets", "FAQ Section"],
    },
  },
  {
    brokerName: "MetaTrader Pro",
    businessScope: {
      regulation:
        "MetaTrader Pro is regulated by FCA (UK) and CySEC (Cyprus), providing strong regulatory oversight and client protection. The broker maintains segregated client funds and offers negative balance protection.",
      instruments: ["50+ Forex pairs", "5,000+ CFD stocks", "15+ Indices", "6+ Commodities", "8+ Cryptocurrencies"],
      marketCoverage:
        "Comprehensive market access across European and US markets with focus on professional trading tools and institutional-grade execution.",
      companyExperience:
        "Established in 2012, MetaTrader Pro has built a reputation for serving professional traders with advanced tools and competitive conditions.",
    },
    cost: {
      spreads:
        "Spreads from 0.1 pips on major pairs. Professional accounts offer institutional pricing with ultra-tight spreads.",
      commissions:
        "Standard Account: No commission. Pro Account: $2.5 per lot per side. Institutional Account: $2 per lot per side.",
      additionalFees: [
        "No deposit fees for most methods",
        "Withdrawal fees may apply for some methods",
        "Inactivity fee after 6 months",
        "Swap charges for overnight positions",
      ],
      competitiveness:
        "MetaTrader Pro offers competitive pricing for professional traders with institutional-level conditions and advanced execution technology.",
    },
    platform: {
      availablePlatforms: ["MetaTrader 4", "MetaTrader 5", "WebTrader", "Mobile Apps", "API Trading"],
      features: [
        "Advanced order types",
        "Algorithmic trading",
        "Professional charting",
        "Market scanner",
        "Risk management tools",
        "Custom indicators",
      ],
      usability:
        "Platforms designed for professional traders with advanced features. May require learning curve for beginners but offers powerful tools for experienced users.",
      reliability:
        "99.8% uptime with redundant server infrastructure. Low-latency execution with multiple data center locations worldwide.",
    },
    support: {
      availability: "24/5 professional support with dedicated account managers for premium clients.",
      quality:
        "Professional-grade support with experienced representatives. Priority support for professional and institutional accounts.",
      languages: ["English", "German", "French", "Spanish", "Italian"],
      contactMethods: ["Live Chat", "Phone Support", "Email", "Dedicated Account Manager", "Technical Support"],
    },
  },
  {
    brokerName: "TradeFX Global",
    businessScope: {
      regulation:
        "TradeFX Global is regulated by ASIC (Australia) and FCA (UK), ensuring high standards of client protection and regulatory compliance.",
      instruments: ["45+ Forex pairs", "3,000+ CFD stocks", "12+ Indices", "5+ Commodities", "6+ Cryptocurrencies"],
      marketCoverage:
        "Global market access with focus on major financial centers. Offers trading across multiple time zones with 24/5 market coverage.",
      companyExperience:
        "Founded in 2015, TradeFX Global has rapidly grown to become a trusted broker with focus on transparency and client satisfaction.",
    },
    cost: {
      spreads:
        "Competitive spreads from 0.8 pips on major pairs. ECN accounts offer raw spreads from 0.0 pips with commission.",
      commissions:
        "Standard Account: No commission. ECN Account: $3.5 per lot per side. Premium Account: $3 per lot per side.",
      additionalFees: [
        "No deposit fees",
        "No withdrawal fees for bank transfers",
        "Inactivity fee after 12 months",
        "Standard swap rates apply",
      ],
      competitiveness: "TradeFX Global offers competitive pricing with transparent fee structure and no hidden costs.",
    },
    platform: {
      availablePlatforms: ["MetaTrader 4", "MetaTrader 5", "WebTrader", "Mobile Trading"],
      features: [
        "One-click trading",
        "Advanced charting",
        "Economic calendar",
        "Market news",
        "Trading signals",
        "Copy trading",
      ],
      usability:
        "User-friendly platforms suitable for traders of all levels. Good balance between simplicity and advanced features.",
      reliability:
        "99.7% uptime with stable platform performance. Regular updates and maintenance ensure optimal trading conditions.",
    },
    support: {
      availability: "24/5 customer support with multilingual assistance during market hours.",
      quality: "Good quality support with knowledgeable staff. Response times average under 5 minutes for live chat.",
      languages: ["English", "Spanish", "French", "German", "Chinese"],
      contactMethods: ["Live Chat", "Phone Support", "Email", "Support Center", "Video Call Support"],
    },
  },
]

export function getBrokerDetail(brokerName: string): BrokerDetail | undefined {
  const slug = brokerName.toLowerCase().replace(/\s+/g, "-")
  return reviewsData.find((review) => review.brokerName.toLowerCase().replace(/\s+/g, "-") === slug)
}

export function getUserReviews(brokerName: string): UserReview[] {
  const slug = brokerName.toLowerCase().replace(/\s+/g, "-")
  return userReviewsData.filter((review) => review.brokerName.toLowerCase().replace(/\s+/g, "-") === slug)
}

export function getBrokerNews(brokerName: string): BrokerNews[] {
  const slug = brokerName.toLowerCase().replace(/\s+/g, "-")
  return brokerNewsData.filter((news) => news.brokerName.toLowerCase().replace(/\s+/g, "-") === slug)
}

export function getOverview(brokerName: string): Overview | undefined {
  const slug = brokerName.toLowerCase().replace(/\s+/g, "-")
  return overviewData.find((review) => review.brokerName.toLowerCase().replace(/\s+/g, "-") === slug)
}
