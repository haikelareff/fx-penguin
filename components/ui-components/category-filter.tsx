"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { CategoryFilterProps } from "@/lib/types"

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={!selectedCategory ? "default" : "outline"}
        size="sm"
        onClick={() => onCategoryChange(undefined)}
        className="h-auto py-2 px-4"
      >
        All Templates
        <Badge variant="secondary" className="ml-2">
          {categories.reduce((sum, cat) => sum + cat.templateCount, 0)}
        </Badge>
      </Button>

      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className="h-auto py-2 px-4"
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
          <Badge variant="secondary" className="ml-2">
            {category.templateCount}
          </Badge>
        </Button>
      ))}
    </div>
  )
}
