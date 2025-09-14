import { ShellPage } from "@/components/templates/shell-page"
import { H1 } from "@/components/h1"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { categories } from "@/lib/data/templates"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Categories - Templates Directory",
  description: "Browse templates by technology stack and framework categories.",
}

export default function CategoriesPage() {
  return (
    <ShellPage>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <H1 className="mb-6">Template Categories</H1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore templates organized by technology stack and framework. Find the perfect starting point for your
              next project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/?category=${encodeURIComponent(category.id)}`}>
                <Card className="group hover:shadow-lg transition-all duration-200 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{category.icon}</div>
                        <CardTitle className="group-hover:text-accent transition-colors">{category.name}</CardTitle>
                      </div>
                      <Badge variant="secondary">{category.templateCount}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ShellPage>
  )
}
