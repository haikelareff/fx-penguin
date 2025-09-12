import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLinkIcon, GithubIcon, StarIcon } from "@/components/svg"
import { H1 } from "@/components/h1"
import type { Template } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

interface TemplateHeroProps {
  template: Template
}

export function TemplateHero({ template }: TemplateHeroProps) {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  const handleDemoClick = () => {
    if (template.demoUrl) {
      window.open(template.demoUrl, "_blank", "noopener,noreferrer")
    }
  }

  const handleGithubClick = () => {
    if (template.githubUrl) {
      window.open(template.githubUrl, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Templates
              </Link>
              <span>/</span>
              <span className="text-foreground">{template.name}</span>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                {template.featured && (
                  <Badge className="bg-accent text-accent-foreground">
                    <StarIcon className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <Badge className={difficultyColors[template.difficulty]}>{template.difficulty}</Badge>
                <Badge variant="outline">{template.category}</Badge>
              </div>

              <H1 className="text-4xl lg:text-5xl">{template.name}</H1>

              <p className="text-xl text-muted-foreground text-pretty">{template.description}</p>

              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={template.authorAvatar || "/placeholder.svg"} alt={template.author} />
                  <AvatarFallback>
                    {template.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{template.author}</p>
                  <p className="text-sm text-muted-foreground">
                    Updated {new Date(template.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {template.demoUrl && (
                <Button onClick={handleDemoClick} size="lg">
                  <ExternalLinkIcon className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {template.githubUrl && (
                <Button onClick={handleGithubClick} variant="outline" size="lg">
                  <GithubIcon className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {template.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted">
            <Image
              src={template.imageUrl || "/placeholder.svg"}
              alt={template.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
