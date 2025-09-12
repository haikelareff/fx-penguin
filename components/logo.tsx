import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="h-8 w-8 bg-foreground rounded-md flex items-center justify-center">
        <span className="text-background font-bold text-sm">T</span>
      </div>
      <span className="font-bold text-xl">Templates</span>
    </div>
  )
}
