import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "@/config/siteConfig";
import ctaImage from "@/assets/cta-clinic.jpg";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ctaImage}
          alt="Esterno dello studio dentistico Via S. Gottardo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent/90" />
      </div>

      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6 animate-fade-up">
            Prenota la tua visita oggi stesso
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Il primo passo verso un sorriso più sano inizia con una telefonata. 
            Il nostro team è pronto ad accoglierti.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="btn-cta inline-flex items-center justify-center gap-3 text-lg px-10 py-5"
            >
              <Phone className="w-6 h-6" />
              Chiama {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-14 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-5 border border-accent-foreground/10">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-accent-foreground font-medium mb-1">Indirizzo</p>
              <p className="text-accent-foreground/70 text-sm">{BUSINESS_INFO.address.street}</p>
              <p className="text-accent-foreground/70 text-sm">{BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}</p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
              >
                Apri su Google Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-5 border border-accent-foreground/10">
              <Phone className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-accent-foreground font-medium mb-1">Telefono</p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-accent-foreground/70 text-sm hover:text-primary transition-colors"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>

            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-5 border border-accent-foreground/10">
              <Clock className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-accent-foreground font-medium mb-1">Orari</p>
              <p className="text-accent-foreground/70 text-sm">Lun - Ven: 09:00 – 19:00</p>
              <p className="text-accent-foreground/70 text-sm">Sab: Su appuntamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
