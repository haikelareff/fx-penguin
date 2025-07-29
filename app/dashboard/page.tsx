"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  BarChart3,
  Users,
  FileText,
  TrendingUp,
  Star,
  MessageCircle,
  Eye,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

const stats = [
  {
    title: "Total Users",
    value: "12,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Active Brokers",
    value: "45",
    change: "+3",
    trend: "up",
    icon: BarChart3,
  },
  {
    title: "Total Reviews",
    value: "8,392",
    change: "+245",
    trend: "up",
    icon: MessageCircle,
  },
  {
    title: "Page Views",
    value: "156,789",
    change: "+8.2%",
    trend: "up",
    icon: Eye,
  },
]

const recentActivity = [
  {
    id: 1,
    type: "review",
    user: "John Smith",
    action: "left a review for",
    target: "FP Markets",
    rating: 4.5,
    time: "2 minutes ago",
    icon: Star,
  },
  {
    id: 2,
    type: "broker",
    user: "System",
    action: "updated broker profile for",
    target: "MetaTrader Pro",
    time: "15 minutes ago",
    icon: FileText,
  },
  {
    id: 3,
    type: "user",
    user: "Sarah Johnson",
    action: "registered as new user",
    target: "",
    time: "1 hour ago",
    icon: Users,
  },
  {
    id: 4,
    type: "article",
    user: "Admin",
    action: "published new article",
    target: "EUR/USD Analysis",
    time: "2 hours ago",
    icon: FileText,
  },
  {
    id: 5,
    type: "review",
    user: "Mike Chen",
    action: "left a review for",
    target: "TradeFX Global",
    rating: 3.8,
    time: "3 hours ago",
    icon: Star,
  },
]

const topBrokers = [
  {
    name: "FP Markets",
    rating: 4.8,
    reviews: 1247,
    change: "+12",
    trend: "up",
  },
  {
    name: "MetaTrader Pro",
    rating: 4.6,
    reviews: 892,
    change: "+8",
    trend: "up",
  },
  {
    name: "TradeFX Global",
    rating: 4.5,
    reviews: 654,
    change: "-2",
    trend: "down",
  },
  {
    name: "SwiftTrade",
    rating: 4.4,
    reviews: 423,
    change: "+5",
    trend: "up",
  },
]

const systemStatus = [
  { service: "Website", status: "operational", uptime: "99.9%" },
  { service: "API", status: "operational", uptime: "99.8%" },
  { service: "Database", status: "operational", uptime: "100%" },
  { service: "CDN", status: "degraded", uptime: "98.5%" },
]

const quickActions = [
  { title: "Add New Broker", href: "/dashboard/cms", icon: Plus },
  { title: "Write Article", href: "/dashboard/cms", icon: FileText },
  { title: "View Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { title: "Manage Users", href: "/dashboard/users", icon: Users },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with FX Penguin today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest actions and updates on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>{" "}
                      {activity.target && <span className="font-medium">{activity.target}</span>}
                      {activity.rating && (
                        <span className="ml-2 inline-flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          {activity.rating}
                        </span>
                      )}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Brokers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Top Brokers
            </CardTitle>
            <CardDescription>Highest rated brokers this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topBrokers.map((broker, index) => (
                <div key={broker.name} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs">{broker.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{broker.name}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      {broker.rating} ({broker.reviews} reviews)
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs ${broker.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                      {broker.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <Link key={action.title} href={action.href}>
                  <Button
                    variant="outline"
                    className="w-full h-auto p-4 flex flex-col items-center gap-2 bg-transparent"
                  >
                    <action.icon className="h-5 w-5" />
                    <span className="text-xs text-center">{action.title}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current status of all services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemStatus.map((service) => (
                <div key={service.service} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {service.status === "operational" ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                    )}
                    <span className="text-sm font-medium">{service.service}</span>
                  </div>
                  <div className="text-right">
                    <Badge variant={service.status === "operational" ? "default" : "secondary"} className="text-xs">
                      {service.status}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">{service.uptime} uptime</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Key metrics and trends for the past 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>User Engagement</span>
                <span className="font-medium">87%</span>
              </div>
              <Progress value={87} className="h-2" />
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Content Quality</span>
                <span className="font-medium">92%</span>
              </div>
              <Progress value={92} className="h-2" />
              <p className="text-xs text-muted-foreground">+2% from last month</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Platform Reliability</span>
                <span className="font-medium">99.8%</span>
              </div>
              <Progress value={99.8} className="h-2" />
              <p className="text-xs text-muted-foreground">Consistent performance</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
