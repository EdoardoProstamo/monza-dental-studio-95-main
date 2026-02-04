import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, BUSINESS_INFO } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2C8 2 6 6 6 10c0 3 1 5 2 7l2 4c.5 1 1.5 1 2 1s1.5 0 2-1l2-4c1-2 2-4 2-7 0-4-2-8-6-8z" />
                <path d="M10 8c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-foreground text-sm md:text-base leading-tight">
                Dental Studio
              </p>
              <p className="text-xs text-muted-foreground">Via S. Gottardo</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors link-hover",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden md:flex items-center gap-2 btn-cta text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "bg-secondary text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="mt-2 mx-4 btn-cta text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Chiama ora</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
