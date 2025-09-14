import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Template } from "@/lib/types"

interface TemplateDetailsProps {
  template: Template
}

export function TemplateDetails({ template }: TemplateDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Features - First */}
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {template.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-pretty">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Tech Stack - Second */}
      <Card>
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {template.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Getting Started - Third */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-pretty">{template.installInstructions}</p>

          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm font-mono block space-y-1">
              <div>git clone {template.githubUrl || "https://github.com/example/template"}</div>
              <div>cd template</div>
              <div>npm install</div>
              <div>npm run dev</div>
            </code>
          </div>
        </CardContent>
      </Card>

      {/* Template Info - Fourth */}
      <Card>
        <CardHeader>
          <CardTitle>Template Info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Category</dt>
            <dd className="mt-1">
              <Badge variant="outline">{template.category}</Badge>
            </dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-muted-foreground">Difficulty</dt>
            <dd className="mt-1 text-sm">{template.difficulty}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-muted-foreground">License</dt>
            <dd className="mt-1 text-sm">{template.license}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-muted-foreground">Created</dt>
            <dd className="mt-1 text-sm">{new Date(template.createdAt).toLocaleDateString()}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-muted-foreground">Last Updated</dt>
            <dd className="mt-1 text-sm">{new Date(template.updatedAt).toLocaleDateString()}</dd>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
