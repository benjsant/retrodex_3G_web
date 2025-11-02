"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PokemonCard } from "@/components/pokemon-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

// Mock data including Gen 1, 2, and 3
const allPokemon = [
  { id: 1, name: "Bulbasaur", types: ["Grass", "Poison"], sprite: "/bulbasaur-pixel-art-sprite.jpg" },
  { id: 4, name: "Charmander", types: ["Fire"], sprite: "/charmander-pixel-art-sprite.jpg" },
  { id: 7, name: "Squirtle", types: ["Water"], sprite: "/squirtle-pixel-art-sprite.jpg" },
  { id: 25, name: "Pikachu", types: ["Electric"], sprite: "/pikachu-pixel-art-sprite.jpg" },
  { id: 39, name: "Jigglypuff", types: ["Normal", "Fairy"], sprite: "/jigglypuff-pixel-art-sprite.jpg" },
  { id: 94, name: "Gengar", types: ["Ghost", "Poison"], sprite: "/gengar-pixel-art-sprite.jpg" },
  { id: 143, name: "Snorlax", types: ["Normal"], sprite: "/snorlax-pixel-art-sprite.jpg" },
  { id: 150, name: "Mewtwo", types: ["Psychic"], sprite: "/mewtwo-pixel-art-sprite.jpg" },
  { id: 152, name: "Chikorita", types: ["Grass"], sprite: "/chikorita-pixel-art-sprite.jpg" },
  { id: 155, name: "Cyndaquil", types: ["Fire"], sprite: "/cyndaquil-pixel-art-sprite.jpg" },
  { id: 252, name: "Treecko", types: ["Grass"], sprite: "/treecko-pixel-art-sprite.jpg" },
  { id: 255, name: "Torchic", types: ["Fire"], sprite: "/torchic-pixel-art-sprite.jpg" },
  { id: 258, name: "Mudkip", types: ["Water"], sprite: "/mudkip-pixel-art-sprite.jpg" },
  { id: 384, name: "Rayquaza", types: ["Dragon", "Flying"], sprite: "/rayquaza-pixel-art-sprite.jpg" },
]

const pokemonTypes = [
  "Normal",
  "Fire",
  "Water",
  "Electric",
  "Grass",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy",
]

export default function FilterPage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [filteredPokemon, setFilteredPokemon] = useState(allPokemon)

  const toggleType = (type: string) => {
    const newTypes = selectedTypes.includes(type) ? selectedTypes.filter((t) => t !== type) : [...selectedTypes, type]

    setSelectedTypes(newTypes)

    if (newTypes.length === 0) {
      setFilteredPokemon(allPokemon)
    } else {
      const filtered = allPokemon.filter((pokemon) => pokemon.types.some((t) => newTypes.includes(t)))
      setFilteredPokemon(filtered)
    }
  }

  const clearFilters = () => {
    setSelectedTypes([])
    setFilteredPokemon(allPokemon)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Page Title */}
          <div className="bg-primary border-4 border-border p-4 pixel-shadow">
            <h1 className="font-pixel text-xl md:text-2xl text-primary-foreground text-center">FILTER BY TYPE</h1>
          </div>

          {/* Filter Controls */}
          <div className="bg-card border-4 border-border p-6 pixel-shadow">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="font-pixel text-xs text-muted-foreground">SELECT TYPES</p>
                {selectedTypes.length > 0 && (
                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    size="sm"
                    className="font-pixel text-xs border-2 border-border bg-transparent"
                  >
                    CLEAR ALL
                  </Button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {pokemonTypes.map((type) => (
                  <Badge
                    key={type}
                    onClick={() => toggleType(type)}
                    className={`font-pixel text-xs cursor-pointer border-2 border-border transition-all ${
                      selectedTypes.includes(type)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {type.toUpperCase()}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="font-pixel text-xs text-muted-foreground">
              SHOWING {filteredPokemon.length} POKÉMON
              {selectedTypes.length > 0 && ` (${selectedTypes.join(", ")})`}
            </p>
          </div>

          {/* Results Grid */}
          {filteredPokemon.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredPokemon.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
          ) : (
            <div className="bg-card border-4 border-border p-8 text-center">
              <p className="font-pixel text-sm text-muted-foreground">NO POKÉMON FOUND</p>
              <p className="text-xs text-muted-foreground mt-2">Try selecting different types</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
