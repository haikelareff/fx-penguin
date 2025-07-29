import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, FileText, Users, Clock, Star } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Forex Education Center</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master forex trading with our comprehensive educational resources. From beginner basics to advanced
            strategies.
          </p>
        </div>

        {/* Learning Paths */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Learning Paths</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-forex-green mb-4" />
                <h3 className="text-lg font-semibold mb-2">Beginner Course</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Start your forex journey with fundamental concepts and basic trading strategies.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">12 Lessons</Badge>
                  <Badge variant="outline">2-3 Hours</Badge>
                </div>
                <Button className="w-full bg-forex-green hover:bg-forex-darkGreen">Start Learning</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Video className="h-12 w-12 text-forex-blue mb-4" />
                <h3 className="text-lg font-semibold mb-2">Intermediate Course</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Advance your skills with technical analysis and risk management techniques.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">18 Lessons</Badge>
                  <Badge variant="outline">4-5 Hours</Badge>
                </div>
                <Button className="w-full bg-forex-blue hover:bg-forex-blue/90">Start Learning</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-forex-red mb-4" />
                <h3 className="text-lg font-semibold mb-2">Advanced Course</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Master advanced trading strategies, algorithmic trading, and market psychology.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">24 Lessons</Badge>
                  <Badge variant="outline">6-8 Hours</Badge>
                </div>
                <Button className="w-full bg-forex-red hover:bg-forex-red/90">Start Learning</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Educational Content</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-forex-green" />
                  <Badge variant="outline">Video Tutorial</Badge>
                </div>
                <CardTitle>Understanding Forex Market Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn about global forex market sessions and the best times to trade different currency pairs.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>15 min</span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Watch Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-forex-blue" />
                  <Badge variant="outline">Article</Badge>
                </div>
                <CardTitle>Risk Management Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Essential risk management techniques every forex trader should know to protect their capital.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Section */}
        <section>
          <Card className="bg-gradient-to-r from-forex-green/10 to-forex-blue/10 border-forex-green/20">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-forex-green mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Join Our Trading Community</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with fellow traders, share strategies, and learn from experienced professionals in our active
                community.
              </p>
              <Button className="bg-forex-green hover:bg-forex-darkGreen">Join Community</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
