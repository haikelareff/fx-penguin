import { ShellPage } from "@/components/templates/shell-page"
import { Button } from "@/components/ui/button"
import { H1 } from "@/components/h1"
import Link from "next/link"

export default function NotFound() {
  return (
    <ShellPage>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <H1 className="text-6xl font-bold text-muted-foreground">404</H1>
            <h2 className="text-2xl font-semibold">Template Not Found</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-pretty">
              The template you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">Browse Templates</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/categories">View Categories</Link>
            </Button>
          </div>
        </div>
      </div>
    </ShellPage>
  )
}
