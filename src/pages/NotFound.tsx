import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Pagina non trovata | Via S. Gottardo Dental Studio";
  }, []);

  return (
    <section className="section-padding bg-background min-h-[60vh] flex items-center">
      <div className="container-site">
        <div className="max-w-lg mx-auto text-center animate-fade-up">
          <p className="text-8xl font-bold text-primary mb-4">404</p>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Pagina non trovata
          </h1>
          <p className="text-muted-foreground mb-8">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <Link
            to="/"
            className="btn-cta inline-flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Torna alla home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
