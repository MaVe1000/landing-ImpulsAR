import { CheckCircle2, Landmark, DollarSign, Zap, Lock, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyStellar() {
  const reasons = [
    {
      icon: Landmark,
      title: "Precedente gubernamental",
      description: "ENRA/USDM con disbursement en Stellar en Islas Marshall (Noviembre 2025)",
    },
    {
      icon: DollarSign,
      title: "Costos extremadamente bajos",
      description: "Operaciones a fracción de centavo, predecibles y transparentes",
    },
    {
      icon: Zap,
      title: "Acreditación instantánea",
      description: "Finalizacion en ~5 segundos vs 3-5 días bancarios",
    },
    {
      icon: CheckCircle2,
      title: "Multi-asset nativo",
      description: "Soporte de múltiples activos mediante trustlines sin contratos complejos",
    },
    {
      icon: Lock,
      title: "Compliance integrado",
      description: "Control de autorización, pausas, revocaciones y reversiones ante fraude",
    },
    {
      icon: RefreshCw,
      title: "Primitivas de control",
      description: "Gestión de padrón, detección de duplicados y recuperación de errores",
    },
  ]

  return (
    <section id="stellar" className="bg-muted/30 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"¿Por Qué Stellar?"}
          </h2>
          <p className="mb-12 text-pretty text-lg leading-relaxed text-muted-foreground">
            {
              "ImpulsAR está diseñado específicamente para Stellar porque cumple los requisitos técnicos críticos para infraestructura gubernamental de protección social."
            }
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <reason.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-balance text-lg font-semibold text-card-foreground">{reason.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="border-l-4 border-l-accent bg-accent/5">
            <CardContent className="p-8">
              <p className="text-pretty leading-relaxed text-card-foreground">
                {
                  "Stellar no solo ofrece tecnología blockchain, sino un ecosistema completo de herramientas de compliance, seguridad y control que son esenciales para manejar fondos públicos de protección social de manera responsable y transparente."
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
