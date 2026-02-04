import { BUSINESS_INFO } from "@/config/siteConfig";
import { useEffect } from "react";

const Cookie = () => {
  useEffect(() => {
    document.title = "Cookie Policy | Via S. Gottardo Dental Studio";
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 animate-fade-up">
            Cookie Policy
          </h1>
          
          <div className="prose prose-gray max-w-none animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-muted-foreground mb-6">
              Ultimo aggiornamento: Febbraio 2025
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              1. Cosa sono i Cookie
            </h2>
            <p className="text-muted-foreground mb-4">
              I cookie sono piccoli file di testo che i siti web visitati inviano al 
              terminale dell'utente, dove vengono memorizzati per essere poi ritrasmessi 
              agli stessi siti alla visita successiva.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              2. Cookie Utilizzati da Questo Sito
            </h2>
            <p className="text-muted-foreground mb-4">
              <strong>Questo sito non utilizza cookie.</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              Non sono presenti cookie tecnici, cookie di profilazione, cookie di terze parti 
              o strumenti di tracciamento di alcun tipo.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              3. Link a Siti Esterni
            </h2>
            <p className="text-muted-foreground mb-4">
              Questo sito può contenere link a siti esterni (ad esempio Google Maps per 
              la localizzazione dello studio). Tali siti hanno le proprie politiche sulla 
              privacy e sui cookie, sulle quali non abbiamo alcun controllo.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              4. Aggiornamenti
            </h2>
            <p className="text-muted-foreground mb-4">
              La presente Cookie Policy può essere soggetta ad aggiornamenti. 
              Si consiglia di consultare periodicamente questa pagina.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              5. Contatti
            </h2>
            <p className="text-muted-foreground mb-4">
              Per qualsiasi domanda relativa a questa Cookie Policy, è possibile 
              contattarci al numero {BUSINESS_INFO.phoneDisplay}.
            </p>

            <div className="mt-8 p-6 bg-secondary rounded-xl">
              <p className="text-foreground font-medium mb-2">Titolare del Trattamento</p>
              <p className="text-muted-foreground text-sm">
                {BUSINESS_INFO.name}<br />
                {BUSINESS_INFO.address.full}<br />
                Tel: {BUSINESS_INFO.phoneDisplay}<br />
                P.IVA: {BUSINESS_INFO.vatNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cookie;
