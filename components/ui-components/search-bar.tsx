"use client"

import { Input } from "@/components/ui/input"
import { SearchIcon } from "@/components/svg"
import type { SearchBarProps } from "@/lib/types"

export function SearchBar({ value, onChange, placeholder = "Search templates..." }: SearchBarProps) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-4 py-2 w-full"
      />
    </div>
  )
}
