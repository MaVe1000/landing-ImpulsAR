import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 px-8 py-16 shadow-xl sm:px-16">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {"Accede a ImpulsAR"}
            </h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              {
                "Experimenta el futuro de las transferencias sociales. Prueba nuestra aplicación demo y descubre cómo la tecnología blockchain puede modernizar la protección social."
              }
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="https://impulsar-web.vercel.app/" target="_blank" rel="noopener noreferrer">
                  {"Ingresar a la Aplicación"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <a href="https://dorahacks.io/buidl/38100" target="_blank" rel="noopener noreferrer">
                  {"Ver en DoraHacks"}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>{"✓ Sin costos para beneficiarios"}</span>
              <span>{"✓ Acceso por email"}</span>
              <span>{"✓ Protección automática"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
