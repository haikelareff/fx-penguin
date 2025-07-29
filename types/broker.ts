export type TradingPlatform = "MT4" | "MT5" | "cTrader"

export type DepositOption =
  | "Bank Transfer"
  | "Credit/Debit Card"
  | "Neteller"
  | "Skrill"
  | "PayPal"
  | "FasaPay"
  | "PayTrust88"
  | "Ngan Luong"
  | "Interac"
  | "Dragonpay"

export type WithdrawalOption = Exclude<DepositOption, "Interac" | "Dragonpay">

export type Currency = "AUD" | "USD" | "EUR" | "GBP" | "SGD" | "CAD" | "CHF" | "HKD" | "JPY" | "ZAR" | "MXN" | "BRL"

export type TradingInstrument = "Forex" | "Commodities" | "Indices" | "Stocks" | "Cryptocurrencies" | "ETFs"

export interface AccountTier {
  name: "Raw Account" | "Standard Account" | "Pro Account"
  minimumDeposit: number
  baseCurrency: Currency[]
  commission?: string
  spreadType: string
  leverage: string
  minTradeVolume: string
  marginCallLevel: string
  stopOutLevel: string
  specialPromotions?: string
  additionalFeatures?: string[]
}

export interface BrokerAccountSchema {
  brokerName: string
  description: string
  rating: number
  reviews: number
  regulation: string
  founded: string
  headquarters: string
  website: string
  accountTiers: AccountTier[]
  tradingPlatforms: TradingPlatform[]
  depositOptions: DepositOption[]
  withdrawalOptions: WithdrawalOption[]
  tradingInstruments: TradingInstrument[]
  customerSupport: string
  features: {
    islamicAccount: boolean
    expertAdvisorAllowed: boolean
    hedgingAllowed: boolean
    scalpingAllowed: boolean
    negativeBalanceProtection: boolean
  }
}
