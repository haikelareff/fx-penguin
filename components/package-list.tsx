"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Download, Star, ExternalLink } from "lucide-react"

const allPackages = [
  {
    name: "ai",
    description: "AI SDK by Vercel - The AI Toolkit for TypeScript and JavaScript",
    publisher: "vercel-release-bot",
    version: "4.3.14",
    publishedAgo: "6 hours ago",
    downloads: "1.2M",
    stars: 4200,
    isPopular: true,
    isRecent: true,
  },
  {
    name: "flags",
    description: "Flags SDK by Vercel - The feature flags toolkit for Next.js and SvelteKit",
    publisher: "vercel-release-bot",
    version: "4.0.0",
    publishedAgo: "4 days ago",
    downloads: "850K",
    stars: 2100,
    isPopular: true,
    isRecent: true,
  },
  {
    name: "v0",
    description: "Add components to your apps.",
    publisher: "vercel-release-bot",
    version: "2.2.5",
    publishedAgo: "10 months ago",
    downloads: "720K",
    stars: 1800,
    isPopular: true,
    isRecent: false,
  },
  {
    name: "vercel",
    description: "The command-line interface for Vercel",
    publisher: "vercel-release-bot",
    version: "41.7.2",
    publishedAgo: "4 hours ago",
    downloads: "3.5M",
    stars: 6300,
    isPopular: true,
    isRecent: true,
  },
  {
    name: "async-sema",
    description: 'Semaphore using "async" and "await"',
    publisher: "leerobinson",
    version: "3.1.1",
    publishedAgo: "4 years ago",
    downloads: "450K",
    stars: 980,
    isPopular: false,
    isRecent: false,
  },
  {
    name: "vc",
    description: "Change the version of a package.json.",
    publisher: "lepture",
    version: "0.1.4",
    publishedAgo: "12 years ago",
    downloads: "120K",
    stars: 340,
    isPopular: false,
    isRecent: false,
  },
  {
    name: "vercel-client",
    description: "Client library for the Vercel API",
    publisher: "leo",
    version: "1.0.0",
    publishedAgo: "5 years ago",
    downloads: "95K",
    stars: 210,
    isPopular: false,
    isRecent: false,
  },
]

export function PackageList({ filter = "all" }: { filter?: "all" | "popular" | "recent" }) {
  const [visibleCount, setVisibleCount] = useState(5)

  const filteredPackages = allPackages.filter((pkg) => {
    if (filter === "all") return true
    if (filter === "popular") return pkg.isPopular
    if (filter === "recent") return pkg.isRecent
    return true
  })

  const visiblePackages = filteredPackages.slice(0, visibleCount)

  return (
    <div className="space-y-4">
      {visiblePackages.map((pkg) => (
        <Card key={pkg.name} className="npm-card group overflow-hidden transition-all">
          <div className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold flex items-center text-npm-red">
                  {pkg.name}
                  <Badge variant="outline" className="ml-2 text-xs font-normal">
                    v{pkg.version}
                  </Badge>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
              </div>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">View package</span>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-xs text-muted-foreground">
              <span className="font-medium">{pkg.publisher}</span>

              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {pkg.publishedAgo}
              </span>

              <span className="flex items-center gap-1">
                <Download className="h-3 w-3" />
                {pkg.downloads}/week
              </span>

              <span className="flex items-center gap-1">
                <Star className="h-3 w-3" />
                {pkg.stars}
              </span>
            </div>
          </div>
        </Card>
      ))}

      {visibleCount < filteredPackages.length && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="rounded-full px-6 hover:text-npm-red hover:border-npm-red"
          >
            Load More
          </Button>
        </div>
      )}

      {visibleCount >= filteredPackages.length && filteredPackages.length < allPackages.length && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-6 hover:text-npm-red hover:border-npm-red"
            onClick={() => {
              setVisibleCount(allPackages.length)
            }}
          >
            View All {allPackages.length} Packages
          </Button>
        </div>
      )}
    </div>
  )
}
