import { H1 } from "@/components/h1"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 text-center">
      {/* Dotted grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <H1 className="mb-6">Discover Premium Web Templates</H1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Explore our curated collection of high-quality templates built with modern tech stacks. From React components
          to full-stack applications, find the perfect starting point for your next project.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <div className="h-2 w-2 bg-accent rounded-full" />
            Production Ready
          </span>
          <span className="flex items-center gap-2">
            <div className="h-2 w-2 bg-accent rounded-full" />
            TypeScript Support
          </span>
          <span className="flex items-center gap-2">
            <div className="h-2 w-2 bg-accent rounded-full" />
            Modern Tech Stacks
          </span>
        </div>
      </div>
    </section>
  )
}
