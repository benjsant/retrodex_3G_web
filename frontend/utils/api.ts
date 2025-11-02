// API utility functions for fetching Pokemon data from backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export interface Pokemon {
  id: number
  name: string
  types: string[]
  sprite: string
  stats?: {
    hp: number
    attack: number
    defense: number
    spAttack: number
    spDefense: number
    speed: number
  }
  moves?: string[]
  description?: string
}

export async function fetchAllPokemon(): Promise<Pokemon[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/pokemon`)
    if (!response.ok) throw new Error("Failed to fetch Pokemon")
    return await response.json()
  } catch (error) {
    console.error("Error fetching Pokemon:", error)
    return []
  }
}

export async function fetchPokemonById(id: number): Promise<Pokemon | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/pokemon/${id}`)
    if (!response.ok) throw new Error("Failed to fetch Pokemon")
    return await response.json()
  } catch (error) {
    console.error("Error fetching Pokemon:", error)
    return null
  }
}

export async function searchPokemon(query: string): Promise<Pokemon[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/pokemon/search?q=${encodeURIComponent(query)}`)
    if (!response.ok) throw new Error("Failed to search Pokemon")
    return await response.json()
  } catch (error) {
    console.error("Error searching Pokemon:", error)
    return []
  }
}

export async function filterPokemonByType(type: string): Promise<Pokemon[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/pokemon/type/${type}`)
    if (!response.ok) throw new Error("Failed to filter Pokemon")
    return await response.json()
  } catch (error) {
    console.error("Error filtering Pokemon:", error)
    return []
  }
}

export async function importPokemon(): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/pokemon/import`, {
      method: "POST",
    })
    if (!response.ok) throw new Error("Failed to import Pokemon")
    return await response.json()
  } catch (error) {
    console.error("Error importing Pokemon:", error)
    return { success: false, message: "Failed to import Pokemon data" }
  }
}
