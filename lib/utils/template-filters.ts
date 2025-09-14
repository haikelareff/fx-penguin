import type { Template, FilterOptions } from "@/lib/types"
import type { SortOption } from "@/components/ui-components/sort-dropdown"

export function filterTemplates(templates: Template[], filters: FilterOptions): Template[] {
  let filtered = [...templates]

  // Category filter
  if (filters.category) {
    filtered = filtered.filter((template) => template.category === filters.category)
  }

  // Search filter
  if (filters.search) {
    const query = filters.search.toLowerCase()
    filtered = filtered.filter(
      (template) =>
        template.name.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query) ||
        template.shortDescription.toLowerCase().includes(query) ||
        template.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        template.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
        template.author.toLowerCase().includes(query),
    )
  }

  // Difficulty filter
  if (filters.difficulty) {
    filtered = filtered.filter((template) => template.difficulty === filters.difficulty)
  }

  // Featured filter
  if (filters.featured) {
    filtered = filtered.filter((template) => template.featured)
  }

  return filtered
}

export function sortTemplates(templates: Template[], sortBy: SortOption): Template[] {
  const sorted = [...templates]

  switch (sortBy) {
    case "newest":
      return sorted.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())

    case "oldest":
      return sorted.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())

    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name))

    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name))

    case "featured":
      return sorted.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      })

    default:
      return sorted
  }
}
