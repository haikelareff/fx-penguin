"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Plus, Edit, Trash2, Eye, Filter } from "lucide-react"

export default function CMSPage() {
  const [selectedTab, setSelectedTab] = useState("articles")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [authorFilter, setAuthorFilter] = useState("all")

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
    {
      id: 4,
      title: "GBP/JPY Weekly Outlook",
      category: "Analysis",
      author: "Sarah Johnson",
      status: "Published",
      date: "2024-01-12",
      views: 567,
    },
    {
      id: 5,
      title: "Central Bank Digital Currencies",
      category: "Technology",
      author: "Michael Chen",
      status: "Draft",
      date: "2024-01-11",
      views: 0,
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

  const filteredArticles = articles.filter((article) => {
    return (
      (categoryFilter === "all" || article.category === categoryFilter) &&
      (statusFilter === "all" || article.status === statusFilter) &&
      (authorFilter === "all" || article.author === authorFilter)
    )
  })

  const categories = [...new Set(articles.map((article) => article.category))]
  const statuses = [...new Set(articles.map((article) => article.status))]
  const authors = [...new Set(articles.map((article) => article.author))]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Content Management</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Manage articles, broker information, and educational content
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Create Content
        </Button>
      </div>

      {/* Content Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="articles" className="text-xs sm:text-sm">
            Articles
          </TabsTrigger>
          <TabsTrigger value="brokers" className="text-xs sm:text-sm">
            Brokers
          </TabsTrigger>
          <TabsTrigger value="education" className="text-xs sm:text-sm">
            Education
          </TabsTrigger>
          <TabsTrigger value="pages" className="text-xs sm:text-sm">
            Pages
          </TabsTrigger>
        </TabsList>

        {/* Articles Tab */}
        <TabsContent value="articles" className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <Input placeholder="Search articles..." className="w-full sm:w-[300px]" />

              {/* Mobile Filter Sheet */}
              <div className="block sm:hidden w-full">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[400px]">
                    <SheetHeader>
                      <SheetTitle>Filter Articles</SheetTitle>
                      <SheetDescription>Filter articles by category, status, and author</SheetDescription>
                    </SheetHeader>
                    <div className="space-y-4 mt-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Category</label>
                        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                          <SelectTrigger>
                            <SelectValue placeholder="All Categories" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Status</label>
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                          <SelectTrigger>
                            <SelectValue placeholder="All Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            {statuses.map((status) => (
                              <SelectItem key={status} value={status}>
                                {status}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Author</label>
                        <Select value={authorFilter} onValueChange={setAuthorFilter}>
                          <SelectTrigger>
                            <SelectValue placeholder="All Authors" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Authors</SelectItem>
                            {authors.map((author) => (
                              <SelectItem key={author} value={author}>
                                {author}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Desktop Filters */}
              <div className="hidden sm:flex space-x-2">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              New Article
            </Button>
          </div>

          {/* Desktop Table */}
          <div className="hidden sm:block">
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
                  {filteredArticles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell className="font-medium">{article.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{article.category}</Badge>
                      </TableCell>
                      <TableCell>{article.author}</TableCell>
                      <TableCell>
                        <Badge variant={article.status === "Published" ? "default" : "secondary"}>
                          {article.status}
                        </Badge>
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
          </div>

          {/* Mobile Cards */}
          <div className="block sm:hidden space-y-4">
            {filteredArticles.map((article) => (
              <Card key={article.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-sm leading-tight pr-2">{article.title}</h3>
                      <div className="flex items-center space-x-1 flex-shrink-0">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {article.author}
                      </Badge>
                      <Badge variant={article.status === "Published" ? "default" : "secondary"} className="text-xs">
                        {article.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {article.date}
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{article.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Broker Content Tab */}
        <TabsContent value="brokers" className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <Input placeholder="Search brokers..." className="w-full sm:w-[300px]" />
              <Select>
                <SelectTrigger className="w-full sm:w-[150px]">
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
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Add Broker
            </Button>
          </div>

          {/* Desktop Table */}
          <div className="hidden sm:block">
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
          </div>

          {/* Mobile Cards */}
          <div className="block sm:hidden space-y-4">
            {brokerContent.map((broker) => (
              <Card key={broker.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-sm">{broker.broker}</h3>
                      <div className="flex items-center space-x-1 flex-shrink-0">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      <Badge variant={broker.status === "Active" ? "default" : "secondary"} className="text-xs">
                        {broker.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {broker.lastUpdated}
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{broker.reviews.toLocaleString()} reviews</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Education Tab */}
        <TabsContent value="education" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Educational Content</CardTitle>
              <CardDescription>Manage courses, lessons, and learning materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">Forex Basics</h3>
                      <Badge className="text-xs">12 Lessons</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">Introduction to forex trading fundamentals</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">Technical Analysis</h3>
                      <Badge className="text-xs">18 Lessons</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">Advanced chart analysis techniques</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">Risk Management</h3>
                      <Badge className="text-xs">8 Lessons</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">Essential risk management strategies</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
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
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{page.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {page.slug} • Last modified: {page.lastModified}
                      </p>
                    </div>
                    <div className="flex space-x-2 w-full sm:w-auto">
                      <Button size="sm" variant="outline" className="flex-1 sm:flex-none text-xs bg-transparent">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 sm:flex-none text-xs bg-transparent">
                        <Eye className="h-3 w-3 mr-1" />
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
