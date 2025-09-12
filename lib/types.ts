// Centralized types file for the template directory app
export interface Template {
  id: string
  name: string
  description: string
  shortDescription: string
  category: TechStack
  tags: string[]
  imageUrl: string
  demoUrl?: string
  githubUrl?: string
  author: string
  authorAvatar?: string
  createdAt: string
  updatedAt: string
  featured: boolean
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  installInstructions: string
  features: string[]
  techStack: string[]
  license: string
}

export type TechStack = "React" | "Next.js" | "Convex" | "Vite" | "PostgreSQL" | "Tailwind CSS" | "TanStack"

export interface Category {
  id: TechStack
  name: string
  description: string
  icon: string
  color: string
  templateCount: number
}

export interface FilterOptions {
  category?: TechStack
  difficulty?: Template["difficulty"]
  featured?: boolean
  search?: string
}

export interface TemplateCardProps {
  template: Template
  className?: string
}

export interface CategoryFilterProps {
  categories: Category[]
  selectedCategory?: TechStack
  onCategoryChange: (category?: TechStack) => void
}

export interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}
