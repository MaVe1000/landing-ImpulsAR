import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-balance font-medium">{"Infraestructura Pública Digital para Protección Social"}</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {"Transferencias sociales con "}
            <span className="text-primary">{"protección"}</span>
            {" contra la inflación"}
          </h1>

          <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {
              "Modernizamos la infraestructura de transferencias sociales usando blockchain Stellar: eliminamos intermediarios bancarios costosos, protegemos automáticamente contra la inflación y garantizamos transparencia total."
            }
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="https://impulsar-web.vercel.app/" target="_blank" rel="noopener noreferrer">
                {"Acceder a la Aplicación"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <a href="#demo">{"Ver Demo"}</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">{"Acreditación en ~5 segundos"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">{"100% trazable"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
