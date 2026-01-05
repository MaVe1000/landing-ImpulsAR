import { CheckCircle2, Coins, Zap, Eye, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Solution() {
  const features = [
    {
      icon: Coins,
      title: "Tokens ARU indexados al CER",
      description:
        "El Estado invierte en instrumentos conservadores (LECAPs, BONCAP) y emite tokens indexados al CER del BCRA, protegiendo automáticamente el poder adquisitivo.",
    },
    {
      icon: Zap,
      title: "Distribución instantánea",
      description:
        "Transferencias en ~5 segundos vía Stellar a billeteras custodiadas (Crossmint). Acceso por email/OTP, sin frases semilla complejas.",
    },
    {
      icon: Shield,
      title: "Protección automática diaria",
      description:
        "El balance se ajusta diariamente según el índice CER oficial. Protección transparente y automática contra la inflación.",
    },
    {
      icon: Eye,
      title: "Trazabilidad pública on-chain",
      description:
        "Todas las transferencias son verificables públicamente en blockchain. Control total mediante contratos y attestations.",
    },
  ]

  return (
    <section id="solucion" className="bg-muted/30 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"La Solución"}
          </h2>
          <p className="mb-12 text-pretty text-lg leading-relaxed text-muted-foreground">
            {
              "ImpulsAR es infraestructura B2G que moderniza transferencias sociales usando Stellar, eliminando intermediarios y protegiendo automáticamente contra la inflación."
            }
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-balance text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="border-l-4 border-l-primary bg-primary/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-card-foreground">
                    {"Beneficios para todos los actores"}
                  </h4>
                  <ul className="space-y-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span>{"Gobierno: ROI de 34:1 y transparencia total"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span>{"Beneficiarios: Protección contra inflación y acceso instantáneo"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span>{"Ciudadanos: Auditoría pública de cada transferencia social"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
