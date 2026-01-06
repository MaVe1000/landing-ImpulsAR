export function VideoDemo() {
  return (
    <section id="demo" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Cómo Funciona"}
          </h2>
          <p className="mb-12 text-pretty text-lg leading-relaxed text-muted-foreground">
            {
              "Mira nuestra demostración en video para entender cómo ImpulsAR transforma las transferencias sociales en Argentina."
            }
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
            <div className="relative aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MGe0E2fHNoI?si=fa-69UXfy2gWW_5F"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {"¿Quieres probarlo tú mismo? "}
            <a
              href="https://impulsar-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {"Accede a la aplicación demo"}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
