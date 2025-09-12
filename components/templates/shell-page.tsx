import type React from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ShellPageProps {
  children: React.ReactNode
}

export function ShellPage({ children }: ShellPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
              Templates
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:text-accent transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/submit">Submit Template</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-muted-foreground text-pretty">
                Discover and share high-quality web templates built with modern technologies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Templates</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/?category=React" className="hover:text-foreground transition-colors">
                    React
                  </Link>
                </li>
                <li>
                  <Link href="/?category=Next.js" className="hover:text-foreground transition-colors">
                    Next.js
                  </Link>
                </li>
                <li>
                  <Link href="/?category=Tailwind CSS" className="hover:text-foreground transition-colors">
                    Tailwind CSS
                  </Link>
                </li>
                <li>
                  <Link href="/?category=TanStack" className="hover:text-foreground transition-colors">
                    TanStack
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/docs" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-foreground transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="hover:text-foreground transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/discord" className="hover:text-foreground transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="/github" className="hover:text-foreground transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="/twitter" className="hover:text-foreground transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="/submit" className="hover:text-foreground transition-colors">
                    Submit Template
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Templates Directory. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
