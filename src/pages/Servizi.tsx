import { SERVICES } from "@/config/siteConfig";
import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/config/siteConfig";
import { useEffect } from "react";

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

const Servizi = () => {
  useEffect(() => {
    document.title = "Servizi | Via S. Gottardo Dental Studio - Dentista Monza";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              I nostri servizi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trattamenti odontoiatrici completi
            </h1>
            <p className="text-lg text-muted-foreground">
              Offriamo una gamma completa di cure dentali per tutta la famiglia,
              dalla prevenzione ai trattamenti più avanzati.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="space-y-12 md:space-y-20">
            {SERVICES.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center animate-fade-up ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                    <img
                      src={serviceImages[service.image] || serviceImplants}
                      alt={`${service.title} - servizio odontoiatrico professionale a Monza`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="btn-cta inline-flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Prenota una consulenza
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Hai bisogno di una consulenza?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Contattaci per fissare un appuntamento. Il nostro team è a tua disposizione
            per rispondere a tutte le tue domande.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-primary font-medium rounded-lg hover:bg-background/90 transition-colors animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Phone className="w-5 h-5" />
            Chiama {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
};

export default Servizi;
