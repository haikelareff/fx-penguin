import { notFound } from "next/navigation"
import { brokers } from "@/data/brokers"
import BrokerDetailPage from "@/components/broker-detail-page"

interface BrokerPageProps {
  params: {
    name: string
  }
}

export async function generateStaticParams() {
  return brokers.map((broker) => ({
    name: broker.brokerName.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export default function BrokerPage({ params }: BrokerPageProps) {
  const brokerSlug = params.name
  const broker = brokers.find((b) => b.brokerName.toLowerCase().replace(/\s+/g, "-") === brokerSlug)

  if (!broker) {
    notFound()
  }

  return <BrokerDetailPage broker={broker} />
}
