import { Header } from "@/components/header"
import { BrokerList } from "@/components/broker-list"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BrokersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Forex Brokers Directory</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Compare and choose from the best forex brokers. Find detailed information about spreads, platforms, and
            trading conditions.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-xl font-semibold">
            All Brokers{" "}
            <Badge variant="outline" className="ml-2">
              45
            </Badge>
          </h2>
          <div className="relative w-full sm:w-auto">
            <Input placeholder="Filter brokers..." className="w-full sm:w-[240px]" />
          </div>
        </div>

        {/* Broker Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start mb-6 bg-transparent p-0 h-auto border-b">
            <TabsTrigger
              value="all"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-forex-green data-[state=active]:text-forex-green data-[state=active]:bg-transparent px-4 py-2"
            >
              All Brokers
            </TabsTrigger>
            <TabsTrigger
              value="popular"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-forex-green data-[state=active]:text-forex-green data-[state=active]:bg-transparent px-4 py-2"
            >
              Popular
            </TabsTrigger>
            <TabsTrigger
              value="regulated"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-forex-green data-[state=active]:text-forex-green data-[state=active]:bg-transparent px-4 py-2"
            >
              Regulated
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <BrokerList />
          </TabsContent>

          <TabsContent value="popular" className="mt-0">
            <BrokerList filter="popular" />
          </TabsContent>

          <TabsContent value="regulated" className="mt-0">
            <BrokerList filter="regulated" />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
