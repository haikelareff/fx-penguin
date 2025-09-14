import { TemplateCard } from "@/components/ui-components/template-card"
import { getFeaturedTemplates } from "@/lib/data/templates"

export function FeaturedSection() {
  const featuredTemplates = getFeaturedTemplates()

  if (featuredTemplates.length === 0) return null

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Templates</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Hand-picked templates that showcase the best of modern web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  )
}
