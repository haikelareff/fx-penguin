import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Star, Package } from "lucide-react"

export function PackageStats() {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-muted-foreground">Activity</h2>
      <div className="space-y-2">
        <Card className="npm-stat-card">
          <CardHeader className="py-3 px-4">
            <CardTitle className="text-sm font-medium flex items-center">
              <Download className="h-4 w-4 mr-2 text-muted-foreground" />
              Weekly Downloads
            </CardTitle>
          </CardHeader>
          <CardContent className="py-3 px-4 pt-0">
            <div className="text-2xl font-semibold">6.8M</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>

        <Card className="npm-stat-card">
          <CardHeader className="py-3 px-4">
            <CardTitle className="text-sm font-medium flex items-center">
              <Star className="h-4 w-4 mr-2 text-muted-foreground" />
              GitHub Stars
            </CardTitle>
          </CardHeader>
          <CardContent className="py-3 px-4 pt-0">
            <div className="text-2xl font-semibold">15.7K</div>
            <p className="text-xs text-muted-foreground">Across all repositories</p>
          </CardContent>
        </Card>

        <Card className="npm-stat-card">
          <CardHeader className="py-3 px-4">
            <CardTitle className="text-sm font-medium flex items-center">
              <Package className="h-4 w-4 mr-2 text-muted-foreground" />
              Latest Package
            </CardTitle>
          </CardHeader>
          <CardContent className="py-3 px-4 pt-0">
            <div className="text-sm font-medium">vercel@41.7.2</div>
            <p className="text-xs text-muted-foreground">Published 4 hours ago</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
