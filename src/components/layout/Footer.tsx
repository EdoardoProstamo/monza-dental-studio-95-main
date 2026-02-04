import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS } from "@/config/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-primary-foreground"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2C8 2 6 6 6 10c0 3 1 5 2 7l2 4c.5 1 1.5 1 2 1s1.5 0 2-1l2-4c1-2 2-4 2-7 0-4-2-8-6-8z" />
                  <path d="M10 8c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-lg">{BUSINESS_INFO.shortName}</p>
              </div>
            </div>
            <p className="text-accent-foreground/70 text-sm max-w-md mb-6">
              Il tuo sorriso è la nostra priorità. Da oltre 20 anni al servizio della salute orale dei cittadini di Monza e provincia.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-accent-foreground/80">{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-accent-foreground/80 hover:text-primary transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent-foreground/60">
              Navigazione
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent-foreground/60">
              Legale
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/privacy"
                className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie"
                className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-accent-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-accent-foreground/50 text-center md:text-left">
              © {currentYear} {BUSINESS_INFO.name}. Tutti i diritti riservati.
            </p>
            <p className="text-xs text-accent-foreground/50">
              P.IVA: {BUSINESS_INFO.vatNumber}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
