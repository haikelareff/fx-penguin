import { TemplateCard } from "./template-card"
import { templates } from "@/lib/data/templates"
import type { Template } from "@/lib/types"

interface RelatedTemplatesProps {
  currentTemplate: Template
}

export function RelatedTemplates({ currentTemplate }: RelatedTemplatesProps) {
  // Find related templates based on category and tags
  const relatedTemplates = templates
    .filter(
      (template) =>
        template.id !== currentTemplate.id &&
        (template.category === currentTemplate.category ||
          template.tags.some((tag) => currentTemplate.tags.includes(tag))),
    )
    .slice(0, 3)

  if (relatedTemplates.length === 0) return null

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Related Templates</h2>
          <p className="text-muted-foreground text-lg text-pretty">Discover more templates that might interest you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  )
}
