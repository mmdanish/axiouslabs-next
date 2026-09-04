import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Sparkles,
  ShieldCheck,
  Zap,
  Rocket,
} from "lucide-react";
import { services, products } from "@/lib/cms";
import { getAllPosts } from "@/lib/posts";
import { FadeIn, Stagger, StaggerItem, Counter } from "@/components/Motion";

export const metadata = {
  title: "axiouslabs",
  description:
    "axiouslabs partners with ambitious teams to build software platforms, cloud systems, and AI products that scale.",
};

export default async function HomePage() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.slice(0, 1);
  const featuredProducts = products.slice(0, 1);

  return (
    <>
      <Hero />
      <Intro />
      <WhyUs />
      <ServicesPreview />
      <ProductsPreview items={featuredProducts} />
      <Stats />
      <BlogsPreview items={featuredPosts} />
      <CareersHighlight />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero border-b border-border">
      <div className="container-prose pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <FadeIn delay={0.05}>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary leading-[1.05]">
              Engineering the systems
              <br />
              that{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                move modern
              </span>{" "}
              enterprises.
            </h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              axiouslabs designs and builds software, cloud and AI platforms for
              ambitious teams — from MVP to global scale.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-elevated hover:opacity-95 transition"
              >
                Start a project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-6 py-3 text-sm font-medium text-primary hover:bg-background transition"
              >
                Explore services
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 w-full h-full flex items-center justify-center">
          <FadeIn delay={0.25} className="w-full">
            <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-elevated aspect-square">
              <Image
                src="/group.jpg"
                alt="axiouslabs engineering systems interface visualization"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="container-prose py-24">
      <div className="grid lg:grid-cols-12 gap-10 items-end">
        <FadeIn className="lg:col-span-7">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
            A technology partner for the systems your business depends on.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="lg:col-span-5">
          <p className="text-muted-foreground">
            From rapid product builds to mission-critical platforms, axiouslabs
            brings senior teams of engineers, designers and strategists who ship
            work that lasts.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    { icon: Rocket, title: "Expert teams", desc: "Every engagement is staffed with engineers and designers who've shipped at scale." },
    { icon: ShieldCheck, title: "Enterprise grade", desc: "Security, compliance and reliability built in — SOC 2, ISO 27001, GDPR ready." },
    { icon: Zap, title: "Velocity with rigor", desc: "Rapid delivery without skipping testing, documentation, or operational readiness." },
    { icon: Sparkles, title: "Modern by default", desc: "JavaScript, edge-first, AI-augmented — using the tools that win for the next decade." },
  ];
  return (
    <section className="bg-muted/40 border-y border-border">
      <div className="container-prose py-24">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand">Why axiouslabs</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
              The standard your roadmap deserves.
            </h2>
          </div>
        </FadeIn>
        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-2xl bg-card border border-border p-6 shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-all">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const items = services.slice(0, 6);
  return (
    <section className="container-prose py-24">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <FadeIn>
          <p className="text-sm font-medium text-brand">Services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-primary max-w-xl">
            End-to-end engineering for ambitious products.
          </h2>
        </FadeIn>
        <Link href="/services" className="text-sm font-medium text-brand inline-flex items-center gap-1 hover:gap-2 transition-all">
          All services <ArrowUpRight size={16} />
        </Link>
      </div>
      <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((s) => (
          <StaggerItem key={s.slug}>
            <article className="group h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elevated hover:-translate-y-1 transition-all">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white">
                <Code2 size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{s.description}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function ProductsPreview({ items }) {
  const product = items[0];
  if (!product) return null;
  return (
    <section className="bg-gradient-dark text-white">
      <div className="container-prose py-24">
        <FadeIn>
          <p className="text-sm font-medium text-accent">Our Product</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Meet <span className="text-accent">SellOps ERP</span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">
            SellOps is a comprehensive ERP platform that helps businesses manage their entire operations from a single system.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <Link
            href={`/products/${product.slug}`}
            className="group mt-12 block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 hover:bg-white/10 transition-all"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs uppercase tracking-widest text-accent">
                  {product.category}
                </div>
                <h3 className="mt-6 text-4xl font-bold">{product.name}</h3>
                <p className="mt-4 text-lg text-white/70">{product.tagline}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-accent font-medium">
                  Explore SellOps <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-10">
                <h4 className="text-xl font-semibold">One platform. Complete business management.</h4>
                <ul className="mt-6 space-y-4 text-white/70">
                  <li>✓ Sales & CRM Management</li>
                  <li>✓ Inventory & Warehouse Management</li>
                  <li>✓ Purchase & Procurement</li>
                  <li>✓ Accounting & Financial Reports</li>
                  <li>✓ Order & Invoice Management</li>
                  <li>✓ HR & Employee Management</li>
                  <li>✓ Real-time Analytics & Dashboards</li>
                  <li>✓ Available on Web & Mobile</li>
                </ul>
              </div>
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 4, suffix: "+", label: "Years building enterprise software" },
    { value: 15, suffix: "+", label: "Projects shipped to production" },
    { value: 3, suffix: "", label: "Countries served" },
    { value: 99.99, suffix: "%", label: "Average platform uptime" },
  ];
  return (
    <section className="container-prose py-24">
      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <div className="text-center md:text-left">
              <div className="text-4xl sm:text-5xl font-semibold bg-gradient-brand bg-clip-text text-transparent">
                {Number.isInteger(s.value) ? (
                  <Counter to={s.value} suffix={s.suffix} />
                ) : (
                  `${s.value}${s.suffix}`
                )}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function BlogsPreview({ items }) {
  return (
    <section className="bg-muted/40 border-y border-border">
      <div className="container-prose py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <FadeIn>
            <p className="text-sm font-medium text-brand">Insights</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-primary max-w-xl">
              Latest from the axiouslabs blog.
            </h2>
          </FadeIn>
          <Link href="/blog" className="text-sm font-medium text-brand inline-flex items-center gap-1 hover:gap-2 transition-all">
            Read the blog <ArrowUpRight size={16} />
          </Link>
        </div>
        <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
          {items.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block h-full rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elevated transition-all"
              >
                <div className="aspect-video bg-gradient-brand relative">
                  <Image src={p.cover || "/placeholder-cover.svg"} alt={p.title} fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-brand/10 text-brand px-2 py-0.5">{p.category}</span>
                    <span>·</span>
                    <span>{p.readingTime} min read</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-primary group-hover:text-brand transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function CareersHighlight() {
  return (
    <section className="container-prose py-24">
      <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-hero p-10 md:p-16">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-sm font-medium text-brand">Careers</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
              Build with engineers who care about the work.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We hire senior, curious people who like solving hard problems with great teammates. Remote-friendly, globally distributed.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/careers" className="rounded-full bg-gradient-brand text-brand-foreground px-5 py-2.5 text-sm font-medium shadow-elevated">
                See open roles
              </Link>
              <Link href="/about" className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium">
                Our culture
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { q: "axiouslabs rebuilt our analytics platform in 14 weeks. It now handles 40× the load on a third of the infrastructure cost.", a: "VP Engineering, FinTech scale-up" },
    { q: "A genuinely senior team. They challenged our assumptions and delivered something better than we'd specified.", a: "CTO, Global retailer" },
    { q: "The clarity, the velocity, the craft — everything you hope for from a top-tier engineering partner.", a: "Head of Product, B2B SaaS" },
  ];
  return (
    <section className="bg-muted/40 border-y border-border">
      <div className="container-prose py-24">
        <FadeIn>
          <p className="text-sm font-medium text-brand">What clients say</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-primary max-w-xl">Outcomes that compound.</h2>
        </FadeIn>
        <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
          {quotes.map((t, i) => (
            <StaggerItem key={i}>
              <figure className="h-full rounded-2xl bg-card border border-border p-6 shadow-soft">
                <blockquote className="text-primary leading-relaxed">&ldquo;{t.q}&rdquo;</blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-white text-xs font-semibold">
                    {t.a.charAt(0)}
                  </span>
                  {t.a}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-prose py-24">
      <div className="rounded-3xl bg-gradient-dark text-white p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" aria-hidden />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to build what&apos;s next?</h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Tell us about your project. We&apos;ll respond within one business day with a clear next step.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-medium hover:opacity-95 transition">
              Start a project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
