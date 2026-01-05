import Link from "next/link";
import { Github, Twitter, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <img src="iconoLogo.png" alt="Logo icono" />
              </div>
              <span className="text-xl font-bold text-foreground">
                {"ImpulsAR"}
              </span>
            </div>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {
                "Infraestructura Pública Digital para Protección Social sobre Stellar blockchain."
              }
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              {"Producto"}
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#problema"
                  className="transition-colors hover:text-foreground"
                >
                  {"Problema"}
                </Link>
              </li>
              <li>
                <Link
                  href="#solucion"
                  className="transition-colors hover:text-foreground"
                >
                  {"Solución"}
                </Link>
              </li>
              <li>
                <Link
                  href="#demo"
                  className="transition-colors hover:text-foreground"
                >
                  {"Demo"}
                </Link>
              </li>
              <li>
                <Link
                  href="#stellar"
                  className="transition-colors hover:text-foreground"
                >
                  {"Tecnología"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              {"Recursos"}
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://impulsar-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  {"Aplicación"}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=2sKzz8X2m0Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  {"Video Pitch"}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://dorahacks.io/buidl/38100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  {"DoraHacks"}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FabSignal/impulsar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  {"GitHub"}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              {"Conecta"}
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/ImpulsAr_ARG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">{"Twitter"}</span>
              </a>
              <a
                href="https://github.com/FabSignal/impulsar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">{"GitHub"}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            {"© 2025 ImpulsAR. Infraestructura Pública Digital sobre Stellar."}
          </p>
        </div>
      </div>
    </footer>
  );
}
