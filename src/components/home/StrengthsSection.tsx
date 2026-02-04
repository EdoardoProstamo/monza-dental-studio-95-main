import { Award, Cpu, Heart, User } from "lucide-react";
import { STRENGTHS } from "@/config/siteConfig";
import studioImage from "@/assets/studio-interior.jpg";

const iconMap: Record<string, React.ElementType> = {
  experience: Award,
  technology: Cpu,
  comfort: Heart,
  personalized: User,
};

export function StrengthsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-fade-up">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={studioImage}
                  alt="Sala operatoria dello studio dentistico con attrezzature moderne"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent shape */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/5 rounded-full -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Perché sceglierci
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Lo studio al servizio del tuo sorriso
            </h2>
            <p className="text-muted-foreground mb-8">
              In Via S. Gottardo Dental Studio uniamo esperienza, tecnologia e cura del paziente 
              per offrirti trattamenti di eccellenza in un ambiente confortevole.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {STRENGTHS.map((strength, index) => {
                const Icon = iconMap[strength.icon] || Award;
                return (
                  <div
                    key={strength.title}
                    className="flex gap-4 animate-fade-up"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {strength.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
