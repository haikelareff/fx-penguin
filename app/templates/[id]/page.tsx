import { notFound } from "next/navigation"
import { TwoColumnShell } from "@/components/templates/two-column-shell"
import { TemplateHero } from "@/components/ui-components/template-hero"
import { TemplateDetails } from "@/components/ui-components/template-details"
import { RelatedTemplates } from "@/components/ui-components/related-templates"
import { getTemplateById } from "@/lib/data/templates"
import type { Metadata } from "next"

interface TemplatePageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const { id } = await params
  const template = getTemplateById(id)

  if (!template) {
    return {
      title: "Template Not Found",
    }
  }

  return {
    title: `${template.name} - Templates Directory`,
    description: template.description,
    openGraph: {
      title: template.name,
      description: template.shortDescription,
      images: [template.imageUrl],
    },
  }
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const resolvedParams = await params
  const template = getTemplateById(resolvedParams.id)

  if (!template) {
    notFound()
  }

  return (
    <TwoColumnShell
      leftColumn={<TemplateHero template={template} />}
      rightColumn={
        <>
          <TemplateDetails template={template} />
          <RelatedTemplates currentTemplate={template} />
        </>
      }
    />
  )
}
