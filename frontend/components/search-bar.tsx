"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  const types = [
    "All",
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

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="bg-card border-4 border-border p-4">
        <div className="font-pixel text-xs text-foreground mb-3">SEARCH POKÉMON</div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter name or number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-2 border-border bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Type Filters */}
      <div className="bg-card border-4 border-border p-4">
        <div className="font-pixel text-xs text-foreground mb-3">FILTER BY TYPE</div>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type.toLowerCase())}
              className={`font-pixel text-xs px-3 py-2 border-2 border-border transition-all hover:translate-x-0.5 hover:translate-y-0.5 ${
                selectedType === type.toLowerCase()
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-accent"
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div className="bg-card border-4 border-border p-4">
        <div className="font-pixel text-xs text-foreground mb-3">SORT BY</div>
        <div className="flex flex-wrap gap-2">
          <button className="font-pixel text-xs px-3 py-2 border-2 border-border bg-secondary text-secondary-foreground hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            NUMBER
          </button>
          <button className="font-pixel text-xs px-3 py-2 border-2 border-border bg-muted text-foreground hover:bg-accent hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            NAME
          </button>
          <button className="font-pixel text-xs px-3 py-2 border-2 border-border bg-muted text-foreground hover:bg-accent hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            HP
          </button>
          <button className="font-pixel text-xs px-3 py-2 border-2 border-border bg-muted text-foreground hover:bg-accent hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            ATTACK
          </button>
          <button className="font-pixel text-xs px-3 py-2 border-2 border-border bg-muted text-foreground hover:bg-accent hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            SPEED
          </button>
        </div>
      </div>
    </div>
  )
}
