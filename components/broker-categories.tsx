import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample broker categories
const categories = [
  {
    id: "ecn",
    name: "ECN Brokers",
    logo: "/placeholder.svg?height=40&width=40&text=ECN",
    color: "#00d4aa",
    count: 12,
  },
  {
    id: "stp",
    name: "STP Brokers",
    logo: "/placeholder.svg?height=40&width=40&text=STP",
    color: "#3498db",
    count: 8,
  },
  {
    id: "market-maker",
    name: "Market Makers",
    logo: "/placeholder.svg?height=40&width=40&text=MM",
    color: "#f39c12",
    count: 15,
  },
  {
    id: "crypto",
    name: "Crypto Brokers",
    logo: "/placeholder.svg?height=40&width=40&text=₿",
    color: "#e74c3c",
    count: 6,
  },
]

export function BrokerCategories() {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-muted-foreground">Broker Types</h2>
      <div className="flex flex-wrap gap-2">
        <TooltipProvider delayDuration={300}>
          {categories.map((category) => (
            <Tooltip key={category.id}>
              <TooltipTrigger asChild>
                <a
                  href={`#category/${category.id}`}
                  className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-forex-green focus:ring-offset-2 rounded-md"
                >
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={category.logo || "/placeholder.svg"} alt={category.name} />
                    <AvatarFallback
                      style={{ backgroundColor: category.color }}
                      className="text-white font-semibold text-xs"
                    >
                      {category.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right" className="font-medium">
                <div>
                  <div>{category.name}</div>
                  <div className="text-xs text-muted-foreground">{category.count} brokers</div>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#new-category"
                className="flex items-center justify-center h-10 w-10 rounded-md border border-dashed border-muted-foreground/50 text-muted-foreground hover:text-forex-green hover:border-forex-green transition-colors"
                aria-label="View all categories"
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
            <TooltipContent side="right">View all categories</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
