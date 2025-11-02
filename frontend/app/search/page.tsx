"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PokemonCard } from "@/components/pokemon-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useState } from "react"

// Mock data including Gen 1, 2, and 3
const allPokemon = [
  { id: 1, name: "Bulbasaur", types: ["Grass", "Poison"], sprite: "/bulbasaur-pixel-art-sprite.jpg" },
  { id: 4, name: "Charmander", types: ["Fire"], sprite: "/charmander-pixel-art-sprite.jpg" },
  { id: 7, name: "Squirtle", types: ["Water"], sprite: "/squirtle-pixel-art-sprite.jpg" },
  { id: 25, name: "Pikachu", types: ["Electric"], sprite: "/pikachu-pixel-art-sprite.jpg" },
  { id: 152, name: "Chikorita", types: ["Grass"], sprite: "/chikorita-pixel-art-sprite.jpg" },
  { id: 155, name: "Cyndaquil", types: ["Fire"], sprite: "/cyndaquil-pixel-art-sprite.jpg" },
  { id: 252, name: "Treecko", types: ["Grass"], sprite: "/treecko-pixel-art-sprite.jpg" },
  { id: 255, name: "Torchic", types: ["Fire"], sprite: "/torchic-pixel-art-sprite.jpg" },
  { id: 258, name: "Mudkip", types: ["Water"], sprite: "/mudkip-pixel-art-sprite.jpg" },
  { id: 384, name: "Rayquaza", types: ["Dragon", "Flying"], sprite: "/rayquaza-pixel-art-sprite.jpg" },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(allPokemon)

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults(allPokemon)
      return
    }

    const filtered = allPokemon.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) || pokemon.id.toString().includes(searchQuery),
    )
    setSearchResults(filtered)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Page Title */}
          <div className="bg-primary border-4 border-border p-4 pixel-shadow">
            <h1 className="font-pixel text-xl md:text-2xl text-primary-foreground text-center">SEARCH POKÉMON</h1>
          </div>

          {/* Search Box */}
          <div className="bg-card border-4 border-border p-6 pixel-shadow max-w-2xl mx-auto">
            <div className="space-y-4">
              <p className="font-pixel text-xs text-muted-foreground text-center">SEARCH BY NAME OR NUMBER (1-386)</p>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter Pokémon name or number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="font-pixel text-xs border-4 border-border"
                />
                <Button
                  onClick={handleSearch}
                  className="font-pixel text-xs bg-primary hover:bg-primary/90 text-primary-foreground border-4 border-border pixel-shadow"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="font-pixel text-xs text-muted-foreground">FOUND {searchResults.length} POKÉMON</p>
          </div>

          {/* Results Grid */}
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {searchResults.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
          ) : (
            <div className="bg-card border-4 border-border p-8 text-center">
              <p className="font-pixel text-sm text-muted-foreground">NO POKÉMON FOUND</p>
              <p className="text-xs text-muted-foreground mt-2">Try a different search term</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
