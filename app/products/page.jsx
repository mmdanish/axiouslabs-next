import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/cms";
import { FadeIn } from "@/components/Motion";

export const metadata = {
  title: "SellOps ERP",
  description:
    "SellOps ERP is a comprehensive business management platform available on web and mobile.",
};

export default function ProductsPage() {
  const product = products[0];

  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="container-prose pt-24 pb-20">
          <FadeIn>
            <p className="text-sm font-medium text-brand">Our Product</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary max-w-4xl">
              SellOps ERP
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              A modern ERP platform that helps businesses manage sales, inventory, procurement, finance, CRM, HR,
              and operations from one integrated system. Available as both a web application and a mobile app.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/products/${product.slug}`} className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-elevated">
                Learn More
              </Link>
              <Link href="/contact" className="rounded-full border border-border px-6 py-3 text-sm font-medium">
                Request Demo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-prose py-24">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-medium">
                Enterprise Resource Planning
              </span>
              <h2 className="mt-6 text-3xl font-semibold text-primary">One platform for your entire business.</h2>
              <p className="mt-5 text-muted-foreground leading-8">
                SellOps ERP centralizes your core business operations into a single, easy-to-use platform.
                Whether you&apos;re managing sales, inventory, purchasing, finance, or customer relationships,
                SellOps provides real-time visibility and automation.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
                {["✓ Sales & CRM", "✓ Inventory Management", "✓ Purchase Management", "✓ Finance & Accounting", "✓ HR & Payroll", "✓ Reports & Analytics", "✓ Mobile Application", "✓ Cloud & On-Premise Ready"].map((f) => (
                  <div key={f} className="rounded-xl border border-border p-4">{f}</div>
                ))}
              </div>
              <Link href={`/products/${product.slug}`} className="mt-10 inline-flex items-center gap-2 text-brand font-medium">
                Explore SellOps ERP <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img src="/placeholder-cover.svg" alt={product.name} className="w-full rounded-2xl" />
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
