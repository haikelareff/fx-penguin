"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Eye } from "lucide-react"

export default function CMSPage() {
  const [selectedTab, setSelectedTab] = useState("articles")

  const articles = [
    {
      id: 1,
      title: "Federal Reserve Signals Interest Rate Changes",
      category: "Market News",
      author: "Sarah Johnson",
      status: "Published",
      date: "2024-01-15",
      views: 1250,
    },
    {
      id: 2,
      title: "EUR/USD Technical Analysis",
      category: "Analysis",
      author: "Michael Chen",
      status: "Draft",
      date: "2024-01-14",
      views: 0,
    },
    {
      id: 3,
      title: "New Forex Regulations Impact",
      category: "Regulation",
      author: "Emma Davis",
      status: "Published",
      date: "2024-01-13",
      views: 890,
    },
  ]

  const brokerContent = [
    {
      id: 1,
      broker: "MetaTrader Pro",
      lastUpdated: "2024-01-15",
      status: "Active",
      reviews: 1250,
    },
    {
      id: 2,
      broker: "TradeFX Global",
      lastUpdated: "2024-01-14",
      status: "Active",
      reviews: 980,
    },
    {
      id: 3,
      broker: "ForexPrime",
      lastUpdated: "2024-01-12",
      status: "Pending Review",
      reviews: 750,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
          <p className="text-muted-foreground">Manage articles, broker information, and educational content</p>
        </div>
        <Button className="bg-forex-green hover:bg-forex-darkGreen">
          <Plus className="h-4 w-4 mr-2" />
          Create Content
        </Button>
      </div>

      {/* Content Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="brokers">Broker Content</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="pages">Static Pages</TabsTrigger>
        </TabsList>

        {/* Articles Tab */}
        <TabsContent value="articles" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Input placeholder="Search articles..." className="w-[300px]" />
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="news">Market News</SelectItem>
                  <SelectItem value="analysis">Analysis</SelectItem>
                  <SelectItem value="regulation">Regulation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Article
            </Button>
          </div>

          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium">{article.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{article.category}</Badge>
                    </TableCell>
                    <TableCell>{article.author}</TableCell>
                    <TableCell>
                      <Badge variant={article.status === "Published" ? "default" : "secondary"}>{article.status}</Badge>
                    </TableCell>
                    <TableCell>{article.date}</TableCell>
                    <TableCell>{article.views.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        {/* Broker Content Tab */}
        <TabsContent value="brokers" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Input placeholder="Search brokers..." className="w-[300px]" />
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Broker
            </Button>
          </div>

          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Broker Name</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Reviews</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {brokerContent.map((broker) => (
                  <TableRow key={broker.id}>
                    <TableCell className="font-medium">{broker.broker}</TableCell>
                    <TableCell>{broker.lastUpdated}</TableCell>
                    <TableCell>
                      <Badge variant={broker.status === "Active" ? "default" : "secondary"}>{broker.status}</Badge>
                    </TableCell>
                    <TableCell>{broker.reviews.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        {/* Education Tab */}
        <TabsContent value="education" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Educational Content</CardTitle>
              <CardDescription>Manage courses, lessons, and learning materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Forex Basics</h3>
                      <Badge>12 Lessons</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Introduction to forex trading fundamentals</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Technical Analysis</h3>
                      <Badge>18 Lessons</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Advanced chart analysis techniques</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Risk Management</h3>
                      <Badge>8 Lessons</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Essential risk management strategies</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Static Pages Tab */}
        <TabsContent value="pages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Static Pages</CardTitle>
              <CardDescription>Manage static content pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "About Us", slug: "/about", lastModified: "2024-01-10" },
                  { name: "Terms of Service", slug: "/terms", lastModified: "2024-01-08" },
                  { name: "Privacy Policy", slug: "/privacy", lastModified: "2024-01-05" },
                  { name: "Risk Disclosure", slug: "/risk-disclosure", lastModified: "2024-01-03" },
                  { name: "Contact", slug: "/contact", lastModified: "2024-01-01" },
                ].map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{page.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {page.slug} • Last modified: {page.lastModified}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
