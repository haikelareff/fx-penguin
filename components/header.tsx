"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-6 mr-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2 font-semibold text-xl text-npm-red">
                  npm
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link href="#" className="text-sm font-medium hover:text-npm-red transition-colors">
                    Pro
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:text-npm-red transition-colors">
                    Teams
                  </LiFX Penguin            <Link href="#" className="text-sm font-medium hover:text-npm-red transition-colors">
                    Pricing
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:text-npm-red transition-colors">
                    Documentation
                  </Link>
                </nav>
                <div className="pt-4 border-t">
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="justify-start w-full">
                      Sign In
                    </Button>
                    <Button className="justify-start w-full bg-npm-red hover:bg-npm-darkRed">Sign Up</Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="font-semibold text-xl text-npm-red">
            npm
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-npm-red transition-colors">
              Pro
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-npm-red transition-colors">
              Teams
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-npm-red transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-npm-red transition-colors">
              Documentation
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {isSearchOpen ? (
            <div className="relative flex items-center md:hidden">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search packages"
                className="w-[180px] pl-8 pr-8"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 h-full aspect-square rounded-l-none"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search packages" className="w-[200px] lg:w-[280px] pl-8" />
          </div>

          <ThemeToggle />

          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-npm-red hover:bg-npm-darkRed">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}
