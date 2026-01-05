import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <img src="iconoLogo.png" alt="Logo icono" />
           
          </div>
          <span className="text-xl font-bold text-foreground">{"ImpulsAR"}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#problema"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {"Problema"}
          </Link>
          <Link
            href="#solucion"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {"Solución"}
          </Link>
          <Link
            href="#demo"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {"Demo"}
          </Link>
          <Link
            href="#stellar"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {"Tecnología"}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <a href="https://impulsar-web.vercel.app/" target="_blank" rel="noopener noreferrer">
              {"Acceder a la App"}
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">{"Abrir menú"}</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
