export function Footer() {
  return (
    <footer className="border-t-4 border-border bg-card px-4 py-6 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/sprites/pokemon-icon.png" alt="Pokeball" className="w-8 h-8 border-2 border-border" />
            <img src="/pixel-art-pikachu-icon.jpg" alt="Pikachu" className="w-8 h-8 border-2 border-border" />
            <img src="/pixel-art-master-ball-icon.jpg" alt="Master Ball" className="w-8 h-8 border-2 border-border" />
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="font-pixel text-xs text-muted-foreground">RETRODEX © 2025</p>
            <p className="text-xs text-muted-foreground">Inspired by Pokémon Emerald & FireRed</p>
            <p className="text-xs text-muted-foreground">Not affiliated with Nintendo or Game Freak</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
