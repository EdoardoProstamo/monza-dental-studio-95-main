import { Star, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "@/config/siteConfig";

function StarRow() {
  return (
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto animate-fade-up">

          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Recensioni
          </span>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Valutazioni dei pazienti
          </h2>

          <StarRow />

          <p className="text-lg font-medium text-foreground mb-2">
            Valutazione media: 5,0 su 5,0
          </p>

          <p className="text-sm text-muted-foreground mb-6">
            Dato desunto da recensioni pubblicate e verificabili su Google
          </p>

          <a
            href={BUSINESS_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Consulta le recensioni su Google
            <ExternalLink className="w-4 h-4" />
          </a>

          <p className="text-muted-foreground italic mt-6">
            "Professionalità, attenzione e trasparenza guidano ogni giorno il nostro lavoro"
          </p>

        </div>
      </div>
    </section>
  );
}
