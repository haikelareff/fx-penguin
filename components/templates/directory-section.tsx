"use client"

import { useState, useMemo } from "react"
import { TemplateCard } from "@/components/ui-components/template-card"
import { CategoryFilter } from "@/components/ui-components/category-filter"
import { SearchBar } from "@/components/ui-components/search-bar"
import { AdvancedFilters } from "@/components/ui-components/advanced-filters"
import { SortDropdown, type SortOption } from "@/components/ui-components/sort-dropdown"
import { templates, categories } from "@/lib/data/templates"
import { filterTemplates, sortTemplates } from "@/lib/utils/template-filters"
import type { TechStack, FilterOptions } from "@/lib/types"

export function DirectorySection() {
  const [filters, setFilters] = useState<FilterOptions>({})
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  const filteredAndSortedTemplates = useMemo(() => {
    const filtered = filterTemplates(templates, filters)
    return sortTemplates(filtered, sortBy)
  }, [filters, sortBy])

  const handleCategoryChange = (category?: TechStack) => {
    setFilters((prev) => ({ ...prev, category }))
  }

  const handleSearchChange = (search: string) => {
    setFilters((prev) => ({ ...prev, search: search || undefined }))
  }

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse All Templates</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Filter by technology stack or search for specific features
          </p>
        </div>

        <div className="space-y-8">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <SearchBar
              value={filters.search || ""}
              onChange={handleSearchChange}
              placeholder="Search templates, tags, or tech stack..."
            />
          </div>

          {/* Category Filter */}
          <div className="flex justify-center">
            <CategoryFilter
              categories={categories}
              selectedCategory={filters.category}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {/* Advanced Filters and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <AdvancedFilters templates={templates} filters={filters} onFiltersChange={setFilters} />
              <p className="text-sm text-muted-foreground">
                {filteredAndSortedTemplates.length} template{filteredAndSortedTemplates.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>

          {/* Results */}
          {filteredAndSortedTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto space-y-4">
                <div className="text-6xl text-muted-foreground/50">🔍</div>
                <h3 className="text-xl font-semibold">No templates found</h3>
                <p className="text-muted-foreground text-pretty">
                  No templates match your current search and filter criteria. Try adjusting your filters or search
                  terms.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
