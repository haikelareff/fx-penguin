import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLinkIcon, GithubIcon, StarIcon } from "@/components/svg"
import { cn } from "@/lib/utils"
import type { TemplateCardProps } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

export function TemplateCard({ template, className }: TemplateCardProps) {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  return (
    <Card className={cn("group hover:shadow-lg transition-all duration-200 overflow-hidden", className)}>
      <Link href={`/templates/${template.id}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={template.imageUrl || "/placeholder.svg"}
            alt={template.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          {template.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-accent text-accent-foreground">
                <StarIcon className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
          <Badge className={cn("absolute top-3 right-3", difficultyColors[template.difficulty])}>
            {template.difficulty}
          </Badge>
        </div>

        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-lg text-balance hover:text-accent transition-colors">{template.name}</h3>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 text-pretty">{template.shortDescription}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {template.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {template.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{template.tags.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Avatar className="h-6 w-6">
              <AvatarImage src={template.authorAvatar || "/placeholder.svg"} alt={template.author} />
              <AvatarFallback className="text-xs">
                {template.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span>{template.author}</span>
          </div>
        </CardContent>
      </Link>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <Link
          href={`/templates/${template.id}`}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 flex-1"
        >
          View Details
        </Link>
        {template.demoUrl && (
          <a
            href={template.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        )}
        {template.githubUrl && (
          <a
            href={template.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
