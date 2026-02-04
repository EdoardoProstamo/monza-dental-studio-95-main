import { BUSINESS_INFO } from "@/config/siteConfig";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Via S. Gottardo Dental Studio";
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 animate-fade-up">
            Privacy Policy
          </h1>
          
          <div className="prose prose-gray max-w-none animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-muted-foreground mb-6">
              Ultimo aggiornamento: Febbraio 2025
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              1. Titolare del Trattamento
            </h2>
            <p className="text-muted-foreground mb-4">
              Il Titolare del trattamento dei dati è:<br />
              <strong>{BUSINESS_INFO.name}</strong><br />
              {BUSINESS_INFO.address.full}<br />
              Telefono: {BUSINESS_INFO.phoneDisplay}<br />
              P.IVA: {BUSINESS_INFO.vatNumber}
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              2. Tipologie di Dati Raccolti
            </h2>
            <p className="text-muted-foreground mb-4">
              Questo sito web non raccoglie dati personali degli utenti in modo automatico. 
              Non sono presenti form di contatto, cookie di profilazione o strumenti di analytics.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              3. Base Giuridica del Trattamento
            </h2>
            <p className="text-muted-foreground mb-4">
              Eventuali dati forniti volontariamente dall'utente tramite contatto telefonico 
              saranno trattati sulla base del consenso dell'interessato e per l'esecuzione 
              di misure precontrattuali.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              4. Modalità di Trattamento
            </h2>
            <p className="text-muted-foreground mb-4">
              I dati personali sono trattati con strumenti automatizzati per il tempo 
              strettamente necessario a conseguire gli scopi per cui sono stati raccolti.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              5. Diritti dell'Interessato
            </h2>
            <p className="text-muted-foreground mb-4">
              Ai sensi degli articoli 15-22 del GDPR, l'interessato ha diritto di:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Accedere ai propri dati personali</li>
              <li>Ottenere la rettifica o la cancellazione degli stessi</li>
              <li>Opporsi al trattamento</li>
              <li>Ottenere la limitazione del trattamento</li>
              <li>Ottenere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              6. Contatti
            </h2>
            <p className="text-muted-foreground mb-4">
              Per esercitare i propri diritti o per qualsiasi informazione relativa 
              al trattamento dei dati personali, è possibile contattare il Titolare 
              al numero {BUSINESS_INFO.phoneDisplay}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
