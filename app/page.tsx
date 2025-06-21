import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitHubIcon, TwitterIcon } from "@/components/social-icons"
import { PackageList } from "@/components/package-list"
import { PackageTrends } from "@/components/package-trends"
import { Header } from "@/components/header"
import { PackageStats } from "@/components/package-stats"
import { OrganizationLogos } from "@/components/organization-logos"

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[250px_1fr]">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="h-20 w-20 border border-border">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="haydenbleasel" />
                <AvatarFallback>HB</AvatarFallback>
              </Avatar>

              <h1 className="mt-4 text-2xl font-semibold tracking-tight">haydenbleasel</h1>
              <p className="text-muted-foreground">Hayden Bleasel</p>

              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://github.com/haydenbleasel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-npm-red transition-colors"
                >
                  <GitHubIcon className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://twitter.com/haydenbleasel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-npm-red transition-colors"
                >
                  <TwitterIcon className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-medium text-muted-foreground">Stats</h2>
              <div className="grid grid-cols-2 gap-2">
                <Card className="npm-stat-card">
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <span className="text-2xl font-semibold">106</span>
                    <span className="text-xs text-muted-foreground">Packages</span>
                  </CardContent>
                </Card>
                <Card className="npm-stat-card">
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <span className="text-2xl font-semibold">4</span>
                    <span className="text-xs text-muted-foreground">Organizations</span>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t">
              <h2 className="text-sm font-medium text-muted-foreground">Popular Packages</h2>
              <div className="space-y-2">
                {["ai", "flags", "vercel", "v0"].map((pkg) => (
                  <a
                    key={pkg}
                    href={`https://www.npmjs.com/package/${pkg}`}
                    className="block p-2 rounded-md hover:bg-accent hover:text-npm-red transition-colors"
                  >
                    <div className="font-medium text-sm">{pkg}</div>
                    <div className="text-xs text-muted-foreground">
                      {pkg === "ai" && "AI SDK by Vercel"}
                      {pkg === "flags" && "Feature flags toolkit"}
                      {pkg === "vercel" && "CLI for Vercel"}
                      {pkg === "v0" && "Add components to your apps"}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Organizations Section */}
            <div className="pt-4 border-t">
              <OrganizationLogos />
            </div>

            {/* Activity Section */}
            <div className="pt-4 border-t">
              <PackageStats />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Package Trends Section */}
            <PackageTrends />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-xl font-semibold">
                Packages{" "}
                <Badge variant="outline" className="ml-2">
                  106
                </Badge>
              </h2>
              <div className="relative w-full sm:w-auto">
                <Input placeholder="Filter packages..." className="w-full sm:w-[240px]" />
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full justify-start mb-6 bg-transparent p-0 h-auto border-b">
                <TabsTrigger
                  value="all"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-npm-red data-[state=active]:text-npm-red data-[state=active]:bg-transparent px-4 py-2"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="popular"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-npm-red data-[state=active]:text-npm-red data-[state=active]:bg-transparent px-4 py-2"
                >
                  Popular
                </TabsTrigger>
                <TabsTrigger
                  value="recent"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-npm-red data-[state=active]:text-npm-red data-[state=active]:bg-transparent px-4 py-2"
                >
                  Recently Updated
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <PackageList />
              </TabsContent>

              <TabsContent value="popular" className="mt-0">
                <PackageList filter="popular" />
              </TabsContent>

              <TabsContent value="recent" className="mt-0">
                <PackageList filter="recent" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} npm, Inc.</div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-npm-red transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-npm-red transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-npm-red transition-colors">
              Security
            </a>
            <a href="#" className="hover:text-npm-red transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
