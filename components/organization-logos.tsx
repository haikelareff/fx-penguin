import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample organization data
const organizations = [
  {
    id: "vercel",
    name: "Vercel",
    logo: "/placeholder.svg?height=40&width=40&text=V",
    color: "#000000",
  },
  {
    id: "acme",
    name: "Acme Inc",
    logo: "/placeholder.svg?height=40&width=40&text=A",
    color: "#4f46e5",
  },
  {
    id: "globex",
    name: "Globex",
    logo: "/placeholder.svg?height=40&width=40&text=G",
    color: "#0ea5e9",
  },
  {
    id: "stark",
    name: "Stark Industries",
    logo: "/placeholder.svg?height=40&width=40&text=S",
    color: "#ef4444",
  },
]

export function OrganizationLogos() {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-muted-foreground">Organizations</h2>
      <div className="flex flex-wrap gap-2">
        <TooltipProvider delayDuration={300}>
          {organizations.map((org) => (
            <Tooltip key={org.id}>
              <TooltipTrigger asChild>
                <a
                  href={`#org/${org.id}`}
                  className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-npm-red focus:ring-offset-2 rounded-md"
                >
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={org.logo || "/placeholder.svg"} alt={org.name} />
                    <AvatarFallback style={{ backgroundColor: org.color }} className="text-white font-semibold">
                      {org.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right" className="font-medium">
                {org.name}
              </TooltipContent>
            </Tooltip>
          ))}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#new-org"
                className="flex items-center justify-center h-10 w-10 rounded-md border border-dashed border-muted-foreground/50 text-muted-foreground hover:text-npm-red hover:border-npm-red transition-colors"
                aria-label="Add organization"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">Add organization</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
