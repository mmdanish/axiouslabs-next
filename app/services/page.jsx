import * as Icons from "lucide-react";
import { Check } from "lucide-react";
import { services } from "@/lib/cms";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = {
  title: "Services",
  description:
    "Software development, cloud, mobile, AI and enterprise technology services from axiouslabs.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="container-prose pt-20 pb-16 text-center">
          <FadeIn>
            <p className="text-sm font-medium text-brand">Services</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-primary max-w-3xl mx-auto">
              Strategy, engineering and design — under one roof.
            </h1>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
              Specialist teams that plug into yours to deliver software, cloud and AI work that ships and lasts.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-prose py-20">
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = Icons[s.icon] ?? Icons.Sparkles;
            return (
              <StaggerItem key={s.slug}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 hover:shadow-elevated hover:-translate-y-1 transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-elevated">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-primary">{s.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-5">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                        <Check size={16} className="text-brand mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>
    </>
  );
}
