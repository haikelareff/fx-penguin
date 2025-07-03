import { notFound } from "next/navigation"
import { getBrokerByName } from "@/data/brokers"
import { BrokerDetailPage } from "@/components/broker-detail-page"
import { Header } from "@/components/header"

interface BrokerPageProps {
  params: {
    name: string
  }
}

export default function BrokerPage({ params }: BrokerPageProps) {
  const broker = getBrokerByName(params.name)

  if (!broker) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <BrokerDetailPage broker={broker} />
    </div>
  )
}

export async function generateStaticParams() {
  const { brokersData, getBrokerSlug } = await import("@/data/brokers")

  return brokersData.map((broker) => ({
    name: getBrokerSlug(broker.brokerName),
  }))
}
