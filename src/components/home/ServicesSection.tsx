import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/config/siteConfig";

import serviceImplants from "@/assets/Implantologia.jpeg";
import serviceWhitening from "@/assets/service-whitening.jpg";
import serviceHygiene from "@/assets/IgieneDentale.jpeg";
import serviceOdontoiatriaConservativa from "@/assets/OdontoiatriaConservativa.jpeg";
import serviceOdortonzia from "@/assets/Ortodonzia.jpeg";
import serviceEndodonzia from "@/assets/Endodonzia.jpeg";

const serviceImages: Record<string, string> = {
  "Implantologia.jpeg": serviceImplants,
  "OdontoiatriaConservativa.jpeg": serviceOdontoiatriaConservativa,
  "Ortodonzia.jpeg": serviceOdortonzia,
  "Endodonzia.jpeg": serviceEndodonzia,
  whitening: serviceWhitening,
  "IgieneDentale.jpeg": serviceHygiene,
};

export function ServicesSection() {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            I nostri servizi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cure dentali complete per tutta la famiglia
          </h2>
          <p className="text-muted-foreground">
            Offriamo una gamma completa di trattamenti odontoiatrici,
            dall'igiene preventiva all'implantologia avanzata.
          </p>
        </div>

        {/* Services Grid - Vertical Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, index) => (
            <article
              key={service.id}
              className="card-elevated overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={serviceImages[service.image]}
                  alt={`${service.title} - trattamento odontoiatrico professionale`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Scopri di più
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <Link
            to="/servizi"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Vedi tutti i servizi
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
