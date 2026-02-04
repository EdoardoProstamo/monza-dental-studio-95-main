import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/config/siteConfig";
import heroImage from "@/assets/hero-dental.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-background">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-0">
          {/* Text Content - Left */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Studio Dentistico a Monza
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Il tuo sorriso,{" "}
              <span className="text-primary">la nostra passione</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Da oltre 20 anni ci prendiamo cura della salute orale dei nostri pazienti 
              con professionalità, tecnologie avanzate e un approccio umano.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn-cta inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Prenota una visita
              </a>
              <Link
                to="/servizi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Scopri i servizi
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Quick Info */}
            <div className="mt-10 pt-8 border-t border-border">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl font-bold text-primary">20+</p>
                  <p className="text-sm text-muted-foreground">Anni di esperienza</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">5000+</p>
                  <p className="text-sm text-muted-foreground">Pazienti soddisfatti</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Materiali certificati</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right */}
          <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Reception dello studio dentistico Via S. Gottardo a Monza - ambiente moderno e accogliente"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 bg-card p-4 rounded-xl shadow-card max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Prenota ora</p>
                    <p className="text-primary font-semibold">{BUSINESS_INFO.phoneDisplay}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent -z-10 hidden lg:block" />
    </section>
  );
}
