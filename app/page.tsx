import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { VideoDemo } from "@/components/video-demo"
import { WhyStellar } from "@/components/why-stellar"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <VideoDemo />
        <WhyStellar />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
