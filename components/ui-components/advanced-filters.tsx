"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { FilterIcon } from "@/components/svg"
import type { Template, FilterOptions } from "@/lib/types"

interface AdvancedFiltersProps {
  templates: Template[]
  filters: FilterOptions
  onFiltersChange: (filters: FilterOptions) => void
}

export function AdvancedFilters({ templates, filters, onFiltersChange }: AdvancedFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Extract unique values for filters
  const difficulties = Array.from(new Set(templates.map((t) => t.difficulty)))
  const techStacks = Array.from(new Set(templates.flatMap((t) => t.techStack)))
  const tags = Array.from(new Set(templates.flatMap((t) => t.tags)))

  const handleDifficultyChange = (difficulty: Template["difficulty"], checked: boolean) => {
    onFiltersChange({
      ...filters,
      difficulty: checked ? difficulty : undefined,
    })
  }

  const handleFeaturedChange = (checked: boolean) => {
    onFiltersChange({
      ...filters,
      featured: checked ? true : undefined,
    })
  }

  const clearFilters = () => {
    onFiltersChange({
      category: filters.category, // Keep category filter
      search: filters.search, // Keep search
    })
  }

  const activeFilterCount =
    Object.values(filters).filter(Boolean).length - (filters.category ? 1 : 0) - (filters.search ? 1 : 0)

  return (
    <div className="relative">
      <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} className="gap-2">
        <FilterIcon className="h-4 w-4" />
        Filters
        {activeFilterCount > 0 && (
          <Badge variant="secondary" className="ml-1 h-5 w-5 rounded-full p-0 text-xs">
            {activeFilterCount}
          </Badge>
        )}
      </Button>

      {isOpen && (
        <Card className="absolute top-full left-0 mt-2 w-80 z-50 shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Filters</CardTitle>
              {activeFilterCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear
                </Button>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Difficulty Filter */}
            <div>
              <h4 className="font-medium mb-3">Difficulty</h4>
              <div className="space-y-2">
                {difficulties.map((difficulty) => (
                  <div key={difficulty} className="flex items-center space-x-2">
                    <Checkbox
                      id={`difficulty-${difficulty}`}
                      checked={filters.difficulty === difficulty}
                      onCheckedChange={(checked) => handleDifficultyChange(difficulty, checked as boolean)}
                    />
                    <label
                      htmlFor={`difficulty-${difficulty}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {difficulty}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Filter */}
            <div>
              <h4 className="font-medium mb-3">Special</h4>
              <div className="flex items-center space-x-2">
                <Checkbox id="featured" checked={filters.featured === true} onCheckedChange={handleFeaturedChange} />
                <label
                  htmlFor="featured"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Featured Templates
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
