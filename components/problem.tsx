import { AlertCircle, Clock, TrendingDown, EyeOff } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Problem() {
  const problems = [
    {
      icon: AlertCircle,
      title: "$185M USD en comisiones anuales",
      description: "Costos bancarios y operativos que no agregan valor al sistema de transferencias sociales.",
    },
    {
      icon: TrendingDown,
      title: "31.4% de inflación interanual",
      description: "El poder adquisitivo se erosiona día a día, afectando a los más vulnerables sin que gasten nada.",
    },
    {
      icon: Clock,
      title: "Demoras de 3-5 días",
      description:
        "Las acreditaciones bancarias tradicionales generan retrasos innecesarios en un contexto de emergencia.",
    },
    {
      icon: EyeOff,
      title: "Cero trazabilidad pública",
      description: "Imposible auditar públicamente dónde va cada peso de los programas sociales.",
    },
  ]

  return (
    <section id="problema" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"El Problema"}
          </h2>
          <p className="mb-12 text-pretty text-lg leading-relaxed text-muted-foreground">
            {
              "Argentina distribuye $25 mil millones ARS anuales a 9 millones de beneficiarios, pero el sistema bancario tradicional es ineficiente y costoso."
            }
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="mb-2 text-balance text-lg font-semibold text-card-foreground">{problem.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="border-l-4 border-l-destructive bg-destructive/5">
            <CardContent className="p-6">
              <p className="text-pretty text-sm leading-relaxed text-card-foreground">
                <span className="font-semibold">{"Ejemplo real: "}</span>
                {
                  "María recibe $140,000 ARS en AUH. Con ~2% de inflación mensual, al día 30, ese dinero solo compra el ~98% de lo que compraba el día 1. "
                }
                <span className="font-semibold">{"Perdió poder adquisitivo sin gastar nada."}</span>
                {" El riesgo inflacionario lo absorbe la persona más vulnerable."}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
