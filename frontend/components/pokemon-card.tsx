import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface PokemonCardProps {
  pokemon: {
    id: number
    name: string
    types: string[]
    sprite: string
  }
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className="bg-card border-4 border-border p-4 hover:bg-accent/20 transition-all hover:translate-x-1 hover:translate-y-1 pixel-shadow cursor-pointer group">
        {/* Pokemon Number */}
        <div className="font-pixel text-xs text-muted-foreground mb-2">#{pokemon.id.toString().padStart(3, "0")}</div>

        {/* Pokemon Sprite */}
        <div className="flex justify-center mb-4 bg-muted border-2 border-border p-4">
          <img
            src={pokemon.sprite || "/placeholder.svg"}
            alt={pokemon.name}
            className="w-24 h-24 group-hover:scale-110 transition-transform"
          />
        </div>

        {/* Pokemon Name */}
        <h3 className="font-pixel text-sm text-foreground mb-3 text-center uppercase">{pokemon.name}</h3>

        {/* Pokemon Types */}
        <div className="flex gap-2 justify-center flex-wrap">
          {pokemon.types.map((type) => (
            <Badge
              key={type}
              className="font-pixel text-xs bg-secondary text-secondary-foreground border-2 border-border hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {type.toUpperCase()}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  )
}
