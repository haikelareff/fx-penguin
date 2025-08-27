# FX Penguin 🐧💱

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-1.0-161618?logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)
[![Convex](https://img.shields.io/badge/Convex-Backend-FF6B6B?logo=convex&logoColor=white)](https://convex.dev/)

## Overview

FX Penguin is a comprehensive forex trading platform and broker review aggregator that connects traders with trusted brokers through verified reviews and expert rankings. Built with cutting-edge technology, our platform serves as the ultimate destination for forex traders seeking reliable broker information and market insights.

## 🌟 Key Features

### For Traders
- **Verified Reviews**: Submit and read authentic broker reviews from verified traders
- **Expert Rankings**: Access curated broker rankings based on comprehensive analysis
- **Community Engagement**: Join contests, events, and interact with fellow traders
- **Educational Resources**: Access premium trading courses and insider market analysis
- **Reputation System**: Build your trader profile and earn recognition in the community

### For Brokers
- **Comprehensive Listings**: Get listed with detailed company profiles and verification
- **Contest Management**: Organize trading contests and promotional campaigns
- **Reputation Management**: Respond to reviews and maintain your company's reputation
- **Analytics Dashboard**: Track your listing performance and user engagement

### For Administrators
- **Complete CMS**: Manage all content, users, and broker listings
- **Review Moderation**: Verify and moderate all user-submitted reviews
- **Analytics Dashboard**: Monitor platform performance and user metrics
- **Contest Management**: Oversee all contests and promotional activities

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: Radix UI for accessible, headless components
- **Backend**: Convex for real-time database and serverless functions
- **Documentation**: Fumadocs for comprehensive user guides
- **Authentication**: Convex Auth for secure user management

## 📁 Project Structure

```
fx-penguin/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Admin dashboard
│   ├── (public)/          # Public pages
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ui/               # Radix UI components
│   ├── layouts/          # Layout components
│   └── forms/            # Form components
├── convex/               # Convex backend functions
│   ├── schema.ts         # Database schema
│   ├── mutations.ts      # Database mutations
│   └── queries.ts        # Database queries
├── lib/                  # Utility functions
├── docs/                 # Documentation files
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager
- Convex CLI installed globally

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fx-penguin.git
   cd fx-penguin
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up Convex backend**
   ```bash
   npx convex dev
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables:
   ```env
   CONVEX_DEPLOYMENT=your-convex-deployment-url
   NEXT_PUBLIC_CONVEX_URL=your-convex-url
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 User Roles & Permissions

### Trader
- Submit broker reviews (after verification)
- Participate in contests and events
- Access premium educational content
- Build trader reputation and rankings

### Broker
- Create and manage company profiles
- Organize contests and promotions
- Respond to reviews and feedback
- Access performance analytics

### Admin
- Moderate all content and reviews
- Verify trader and broker accounts
- Manage platform settings
- Oversee contests and events

## 🏆 Trader Ranking System

Traders earn recognition through our comprehensive ranking system:

- **Top Contributor**: Highest review quality and quantity
- **Head of Clan**: Community leadership and engagement
- **Trusted Analyst**: Accurate market predictions and analysis
- **Master of Research**: In-depth broker investigation
- **Expert Reviewer**: Consistently high-quality reviews
- **Community Champion**: Outstanding community participation
- **Rising Star**: Promising new contributor
- **Veteran Trader**: Long-standing community member
- **Market Guru**: Exceptional trading insights
- **Education Master**: Outstanding educational contributions

## 📈 Broker Listing Categories

### Top Rated
Premium brokers with exceptional reviews and proven track records

### New Comer
Promising new brokers with strong profiles and innovative platforms

### Best User Friendly
Brokers with the most intuitive platforms and excellent user experience

### Lowest Min Deposit
Accessible brokers for traders with smaller initial investments

### Fastest Withdraw
Brokers with the quickest and most reliable withdrawal processes

### Most Untrustworthy
⚠️ Brokers with significant issues or complaints (clearly labeled for user protection)

## 🎯 Contest & Promotion Features

- **Monthly Trading Contests**: Skill-based competitions with prizes
- **Broker-Sponsored Events**: Promotional campaigns and special offers
- **Leaderboard System**: Real-time rankings and achievements
- **Rebate Programs**: Cashback and affiliate opportunities
- **Annual Award Ceremony**: Recognition for outstanding contributors

## 🔒 Security & Compliance

- **Verified Accounts**: All traders and brokers undergo verification
- **Review Moderation**: Expert review before publication
- **Ethical Guidelines**: Strict code of conduct for all participants
- **Data Protection**: Secure handling of user information
- **Fraud Prevention**: Automated detection of suspicious activities

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.fxpenguin.com](https://docs.hreff.io)
- **Email**: haikelareff@gmail.com
- **Issues**: [GitHub Issues](https://github.com/haikelareff)

## 🌐 Live Demo

Visit our live platform at [https://fxpenguin.com](https://fxpenguin.com)

---

**Built with ❤️ by Hreff for FXPenguin**

*Connecting traders with trusted brokers, one review at a time.*
