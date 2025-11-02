import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SearchBar } from "@/components/search-bar"
import { PokemonCard } from "@/components/pokemon-card"

const mockPokemon = [
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

export default function PokedexPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Page Title */}
          <div className="bg-primary border-4 border-border p-4 pixel-shadow">
            <h1 className="font-pixel text-xl md:text-2xl text-primary-foreground text-center">POKÉDEX</h1>
          </div>

          {/* Search and Filters */}
          <SearchBar />

          {/* Pokemon Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mockPokemon.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center pt-4">
            <button className="font-pixel text-xs bg-secondary text-secondary-foreground px-6 py-3 border-4 border-border pixel-shadow hover:translate-x-1 hover:translate-y-1 transition-transform">
              LOAD MORE
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
