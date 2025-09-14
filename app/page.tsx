import { ShellPage } from "@/components/templates/shell-page"
import { HeroSection } from "@/components/templates/hero-section"
import { FeaturedSection } from "@/components/templates/featured-section"
import { DirectorySection } from "@/components/templates/directory-section"

export default function HomePage() {
  return (
    <ShellPage>
      <HeroSection />
      <FeaturedSection />
      <DirectorySection />
    </ShellPage>
  )
}
