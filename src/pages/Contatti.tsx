import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "@/config/siteConfig";
import { useEffect } from "react";

const Contatti = () => {
  useEffect(() => {
    document.title = "Contatti | Via S. Gottardo Dental Studio - Dentista Monza";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contatti
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Siamo qui per te
            </h1>
            <p className="text-lg text-muted-foreground">
              Hai bisogno di informazioni o vuoi prenotare un appuntamento? 
              Contattaci telefonicamente o vieni a trovarci in studio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="card-elevated p-8 animate-fade-up">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Indirizzo</h2>
              <address className="not-italic text-muted-foreground mb-4">
                <p>{BUSINESS_INFO.address.street}</p>
                <p>{BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city} ({BUSINESS_INFO.address.province})</p>
                <p>{BUSINESS_INFO.address.country}</p>
              </address>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Apri su Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="card-elevated p-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Telefono</h2>
              <p className="text-muted-foreground mb-4">
                Chiamaci per prenotare un appuntamento o per qualsiasi informazione.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn-cta inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>

            {/* Hours Card */}
            <div className="card-elevated p-8 md:col-span-2 lg:col-span-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Orari di apertura</h2>
              <ul className="space-y-2">
                {BUSINESS_INFO.hours.map((schedule) => (
                  <li key={schedule.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium text-foreground">{schedule.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 md:py-20">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-accent-foreground mb-4 animate-fade-up">
              Prenota la tua visita
            </h2>
            <p className="text-accent-foreground/70 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Il nostro team è pronto ad accoglierti. Chiama per fissare un appuntamento 
              nel giorno e nell'orario più comodi per te.
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="btn-cta inline-flex items-center justify-center gap-2 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Phone className="w-5 h-5" />
              Chiama ora
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contatti;
