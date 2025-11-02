import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock detailed Pokemon data
const mockPokemonDetail = {
  id: 25,
  name: "Pikachu",
  types: ["Electric"],
  sprite: "/pikachu-pixel-art-sprite-large.jpg",
  stats: {
    hp: 35,
    attack: 55,
    defense: 40,
    spAttack: 50,
    spDefense: 50,
    speed: 90,
  },
  moves: ["Thunder Shock", "Quick Attack", "Thunder Wave", "Electro Ball"],
  description: "When several of these Pokémon gather, their electricity can build and cause lightning storms.",
  trainingTips:
    "Focus on Speed and Special Attack. Pikachu excels at outspeeding opponents and dealing electric damage.",
}

export default function PokemonDetailPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Back Button */}
          <Link
            href="/pokedex"
            className="inline-flex items-center font-pixel text-xs text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            BACK TO POKÉDEX
          </Link>

          {/* Pokemon Header */}
          <div className="bg-primary border-4 border-border p-4 pixel-shadow">
            <div className="flex items-center justify-between">
              <h1 className="font-pixel text-xl md:text-2xl text-primary-foreground uppercase">
                {mockPokemonDetail.name}
              </h1>
              <span className="font-pixel text-sm text-primary-foreground">
                #{mockPokemonDetail.id.toString().padStart(3, "0")}
              </span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Image and Types */}
            <div className="space-y-4">
              <div className="bg-card border-4 border-border p-8 flex items-center justify-center">
                <img
                  src={mockPokemonDetail.sprite || "/placeholder.svg"}
                  alt={mockPokemonDetail.name}
                  className="w-48 h-48 pixel-shadow"
                />
              </div>

              <div className="bg-card border-4 border-border p-4">
                <div className="font-pixel text-xs text-foreground mb-3">TYPE</div>
                <div className="flex gap-2">
                  {mockPokemonDetail.types.map((type) => (
                    <Badge
                      key={type}
                      className="font-pixel text-xs bg-accent text-accent-foreground border-2 border-border"
                    >
                      {type.toUpperCase()}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-card border-4 border-border p-4">
                <div className="font-pixel text-xs text-foreground mb-3">DESCRIPTION</div>
                <p className="text-sm leading-relaxed text-muted-foreground">{mockPokemonDetail.description}</p>
              </div>
            </div>

            {/* Right Column - Stats and Moves */}
            <div className="space-y-4">
              {/* Stats */}
              <div className="bg-card border-4 border-border p-4">
                <div className="font-pixel text-xs text-foreground mb-4">BASE STATS</div>
                <div className="space-y-3">
                  {Object.entries(mockPokemonDetail.stats).map(([stat, value]) => (
                    <div key={stat}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-medium uppercase text-muted-foreground">
                          {stat.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                        <span className="font-pixel text-xs text-foreground">{value}</span>
                      </div>
                      <div className="h-3 bg-muted border-2 border-border">
                        <div className="h-full bg-primary" style={{ width: `${(value / 255) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moves */}
              <div className="bg-card border-4 border-border p-4">
                <div className="font-pixel text-xs text-foreground mb-3">MOVES</div>
                <div className="grid grid-cols-2 gap-2">
                  {mockPokemonDetail.moves.map((move) => (
                    <div
                      key={move}
                      className="bg-secondary text-secondary-foreground border-2 border-border px-3 py-2 text-xs text-center"
                    >
                      {move}
                    </div>
                  ))}
                </div>
              </div>

              {/* Training Tips */}
              <div className="bg-accent border-4 border-border p-4">
                <div className="font-pixel text-xs text-accent-foreground mb-3">TRAINING TIPS</div>
                <p className="text-sm leading-relaxed text-foreground">{mockPokemonDetail.trainingTips}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
