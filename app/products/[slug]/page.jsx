import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { products } from "@/lib/cms";
import { FadeIn } from "@/components/Motion";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <article>
      <section className="bg-gradient-hero border-b border-border">
        <div className="container-prose pt-12 pb-20">
          <Link href="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft size={14} /> All products
          </Link>
          <FadeIn>
            <div className="mt-6 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <div className="text-xs uppercase tracking-widest text-brand font-medium">{product.category}</div>
                <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-primary">{product.name}</h1>
                <p className="mt-3 text-lg text-brand">{product.tagline}</p>
                <p className="mt-5 text-muted-foreground">{product.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="rounded-full bg-gradient-brand text-brand-foreground px-6 py-3 text-sm font-medium shadow-elevated">
                    Request a demo
                  </Link>
                  <Link href="/contact" className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium">
                    Talk to sales
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-3xl rounded-full" aria-hidden />
                  <div className="relative rounded-2xl overflow-hidden border border-border shadow-elevated">
                    <img src="/placeholder-cover.svg" alt={`${product.name} preview`} className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-prose py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary">Key features</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {product.features.map((f) => (
            <div key={f} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand shrink-0">
                <Check size={16} />
              </span>
              <span className="text-sm text-foreground pt-1">{f}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
