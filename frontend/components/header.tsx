import Link from "next/link"

export function Header() {
  return (
    <header className="border-b-4 border-border bg-primary px-4 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/">
          <h1 className="font-pixel text-lg md:text-xl text-primary-foreground hover:text-accent transition-colors cursor-pointer">
            RETRODEX
          </h1>
        </Link>

        <nav className="flex flex-wrap gap-3 md:gap-6 justify-center">
          <Link href="/" className="font-pixel text-xs text-primary-foreground hover:text-accent transition-colors">
            HOME
          </Link>
          <Link
            href="/pokedex"
            className="font-pixel text-xs text-primary-foreground hover:text-accent transition-colors"
          >
            POKÉDEX
          </Link>
          <Link
            href="/search"
            className="font-pixel text-xs text-primary-foreground hover:text-accent transition-colors"
          >
            SEARCH
          </Link>
          <Link
            href="/filter"
            className="font-pixel text-xs text-primary-foreground hover:text-accent transition-colors"
          >
            FILTER
          </Link>
        </nav>
      </div>
    </header>
  )
}
