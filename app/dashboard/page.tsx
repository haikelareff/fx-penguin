"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  Users,
  FileText,
  TrendingUp,
  DollarSign,
  Eye,
  MessageSquare,
  Star,
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Settings,
  Bell,
  Activity,
} from "lucide-react"
import Link from "next/link"

const stats = [
  {
    title: "Total Users",
    value: "12,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    description: "Active users this month",
  },
  {
    title: "Broker Reviews",
    value: "3,421",
    change: "+8.2%",
    trend: "up",
    icon: Star,
    description: "Reviews published",
  },
  {
    title: "Page Views",
    value: "847K",
    change: "+15.3%",
    trend: "up",
    icon: Eye,
    description: "Monthly page views",
  },
  {
    title: "Revenue",
    value: "$24,680",
    change: "-2.1%",
    trend: "down",
    icon: DollarSign,
    description: "Monthly revenue",
  },
]

const recentActivity = [
  {
    id: 1,
    type: "review",
    user: "John Smith",
    action: "submitted a review for MetaTrader Pro",
    time: "2 minutes ago",
    avatar: "/placeholder-user.jpg",
    icon: MessageSquare,
  },
  {
    id: 2,
    type: "user",
    user: "Sarah Johnson",
    action: "registered a new account",
    time: "15 minutes ago",
    avatar: "/placeholder-user.jpg",
    icon: Users,
  },
  {
    id: 3,
    type: "content",
    user: "Admin",
    action: "published new market analysis article",
    time: "1 hour ago",
    avatar: "/placeholder-user.jpg",
    icon: FileText,
  },
  {
    id: 4,
    type: "broker",
    user: "ForexPrime",
    action: "updated their broker profile",
    time: "2 hours ago",
    avatar: "/placeholder-logo.svg",
    icon: Settings,
  },
  {
    id: 5,
    type: "review",
    user: "Mike Chen",
    action: "rated TradeMaster 5 stars",
    time: "3 hours ago",
    avatar: "/placeholder-user.jpg",
    icon: Star,
  },
]

const topBrokers = [
  {
    name: "MetaTrader Pro",
    logo: "/placeholder-logo.svg",
    rating: 4.8,
    reviews: 2847,
    growth: "+12%",
  },
  {
    name: "ForexPrime",
    logo: "/placeholder-logo.svg",
    rating: 4.7,
    reviews: 1923,
    growth: "+8%",
  },
  {
    name: "TradeMaster",
    logo: "/placeholder-logo.svg",
    rating: 4.6,
    reviews: 1654,
    growth: "+15%",
  },
  {
    name: "GlobalFX",
    logo: "/placeholder-logo.svg",
    rating: 4.5,
    reviews: 1432,
    growth: "+5%",
  },
]

const quickActions = [
  {
    title: "Add New Broker",
    description: "Register a new broker profile",
    icon: Plus,
    href: "/dashboard/cms",
    color: "bg-blue-500",
  },
  {
    title: "Create Article",
    description: "Write new market analysis",
    icon: FileText,
    href: "/dashboard/cms",
    color: "bg-green-500",
  },
  {
    title: "Manage Users",
    description: "View and manage user accounts",
    icon: Users,
    href: "/dashboard/users",
    color: "bg-purple-500",
  },
  {
    title: "View Analytics",
    description: "Check platform performance",
    icon: BarChart3,
    href: "/dashboard/analytics",
    color: "bg-orange-500",
  },
]

const systemStatus = [
  { name: "API Status", status: "operational", uptime: "99.9%" },
  { name: "Database", status: "operational", uptime: "99.8%" },
  { name: "CDN", status: "operational", uptime: "100%" },
  { name: "Email Service", status: "degraded", uptime: "98.2%" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with FX Penguin today.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>
          <Button size="sm" className="bg-forex-green hover:bg-forex-darkGreen">
            <Plus className="h-4 w-4 mr-2" />
            Quick Action
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
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
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest actions and updates across the platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                  <AvatarFallback>
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <activity.icon className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="pt-2">
              <Button variant="outline" className="w-full bg-transparent">
                View All Activity
              </Button>
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
          <CardContent className="space-y-4">
            {topBrokers.map((broker, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img src={broker.logo || "/placeholder.svg"} alt={broker.name} className="h-8 w-8 rounded" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{broker.name}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">
                      {broker.rating} ({broker.reviews})
                    </span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {broker.growth}
                </Badge>
              </div>
            ))}
            <div className="pt-2">
              <Link href="/dashboard/reviews">
                <Button variant="outline" className="w-full bg-transparent">
                  Manage Reviews
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <div className="flex flex-col items-center p-4 rounded-lg border hover:bg-accent transition-colors cursor-pointer">
                  <div className={`p-2 rounded-lg ${action.color} text-white mb-2`}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium text-sm text-center">{action.title}</h3>
                  <p className="text-xs text-muted-foreground text-center mt-1">{action.description}</p>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              System Status
            </CardTitle>
            <CardDescription>Current system health and uptime</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemStatus.map((system, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      system.status === "operational"
                        ? "bg-green-500"
                        : system.status === "degraded"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  />
                  <span className="text-sm font-medium">{system.name}</span>
                </div>
                <div className="text-right">
                  <Badge variant={system.status === "operational" ? "default" : "secondary"} className="text-xs">
                    {system.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{system.uptime} uptime</p>
                </div>
              </div>
            ))}
            <div className="pt-2">
              <Button variant="outline" className="w-full bg-transparent">
                View Status Page
              </Button>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">User Engagement</span>
                <span className="text-sm text-muted-foreground">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Content Quality</span>
                <span className="text-sm text-muted-foreground">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Platform Stability</span>
                <span className="text-sm text-muted-foreground">99%</span>
              </div>
              <Progress value={99} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
