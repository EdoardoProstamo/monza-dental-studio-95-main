import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Domande frequenti
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hai domande? Ecco le risposte
            </h2>
            <p className="text-muted-foreground">
              Trova rapidamente le informazioni che cerchi sulle nostre cure e servizi.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {FAQ.map((item, index) => (
              <div
                key={index}
                className="card-elevated overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-foreground pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 flex-shrink-0 text-primary transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
