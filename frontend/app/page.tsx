import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b-4 border-border bg-primary px-4 py-4">
        <div className="container mx-auto">
          <h1 className="font-pixel text-xl md:text-2xl text-primary-foreground text-center">RETRODEX</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          {/* Pixel art style title */}
          <div className="space-y-4">
            <div className="inline-block bg-card border-4 border-border p-6 md:p-8 pixel-shadow">
              <h2 className="font-pixel text-2xl md:text-4xl text-foreground mb-4">RETRODEX</h2>
              <p className="font-pixel text-xs md:text-sm text-muted-foreground leading-relaxed">
                GEN 1, 2 & 3 EXPLORER
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-card border-4 border-border p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-sm md:text-base leading-relaxed text-foreground">
              Welcome to <span className="font-pixel text-primary">RETRODEX</span>, your interactive interface for
              exploring Generation 1, 2, and 3 Pokémon! Inspired by the classic Pokémon games like Emerald and FireRed,
              dive into a nostalgic journey through the original 386 Pokémon.
            </p>
          </div>

          {/* Pokéball placeholder */}
          <div className="flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              <img
                src="/pixel-art-pokeball-red-and-white-retro-game-style.jpg"
                alt="Pokéball"
                className="w-full h-full border-4 border-border pixel-shadow"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/pokedex">
              <Button
                size="lg"
                className="font-pixel text-xs md:text-sm bg-primary hover:bg-primary/90 text-primary-foreground border-4 border-border pixel-shadow hover:translate-x-1 hover:translate-y-1 transition-transform"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                EXPLORE POKÉDEX
              </Button>
            </Link>

            <Button
              size="lg"
              variant="secondary"
              className="font-pixel text-xs md:text-sm bg-secondary hover:bg-secondary/90 text-secondary-foreground border-4 border-border pixel-shadow hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              IMPORT POKÉMON
            </Button>
          </div>

          {/* Feature boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Link href="/search" className="bg-card border-4 border-border p-4 hover:bg-accent transition-colors">
              <div className="font-pixel text-xs text-primary mb-2">SEARCH</div>
              <p className="text-sm text-muted-foreground">Find Pokémon by name or number</p>
            </Link>
            <Link href="/filter" className="bg-card border-4 border-border p-4 hover:bg-accent transition-colors">
              <div className="font-pixel text-xs text-secondary mb-2">FILTER</div>
              <p className="text-sm text-muted-foreground">Sort by type and stats</p>
            </Link>
            <Link href="/pokedex" className="bg-card border-4 border-border p-4 hover:bg-accent transition-colors">
              <div className="font-pixel text-xs text-accent-foreground mb-2">DETAILS</div>
              <p className="text-sm text-muted-foreground">View moves and training tips</p>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-border bg-card px-4 py-6">
        <div className="container mx-auto text-center space-y-2">
          <p className="font-pixel text-xs text-muted-foreground">RETRODEX © 2025</p>
          <p className="text-xs text-muted-foreground">
            Inspired by Pokémon Emerald & FireRed • Not affiliated with Nintendo or Game Freak
          </p>
        </div>
      </footer>
    </div>
  )
}
