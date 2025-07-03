import { notFound } from "next/navigation"
import { getBrokerByName, brokersData, getBrokerSlug } from "@/data/brokers"
import { BrokerDetailPage } from "@/components/broker-detail-page"

interface BrokerPageProps {
  params: {
    name: string
  }
}

export async function generateStaticParams() {
  return brokersData.map((broker) => ({
    name: getBrokerSlug(broker.brokerName),
  }))
}

export default function BrokerPage({ params }: BrokerPageProps) {
  const broker = getBrokerByName(params.name)

  if (!broker) {
    notFound()
  }

  return <BrokerDetailPage broker={broker} />
}
