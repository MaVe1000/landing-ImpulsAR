import { TrendingUp, Users, DollarSign, Shield } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "9M",
      label: "Beneficiarios",
      description: "personas protegidas",
    },
    {
      icon: DollarSign,
      value: "$185M USD",
      label: "Ahorro anual",
      description: "en comisiones bancarias",
    },
    {
      icon: TrendingUp,
      value: "34:1",
      label: "ROI",
      description: "retorno de inversión",
    },
    {
      icon: Shield,
      value: "31%",
      label: "Inflación anual",
      description: "protección automática",
    },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-foreground">{stat.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
