"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { FadeIn } from "@/components/Motion";

export default function BlogClient({ posts, categories }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const featured = posts.find((p) => p.featured) ?? posts[0];

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCat = cat === "All" || p.category === cat;
      const q = query.toLowerCase();
      const matchesQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQ;
    });
  }, [query, cat, posts]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="container-prose pt-20 pb-16">
          <FadeIn>
            <p className="text-sm font-medium text-brand">Blog</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-primary max-w-2xl">
              Notes from the axiouslabs team.
            </h1>
            <p className="mt-5 text-muted-foreground max-w-2xl">
              Practical writing on engineering, cloud, AI and the work of building great software.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="container-prose py-16">
          <FadeIn>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-3xl overflow-hidden border border-border bg-card hover:shadow-elevated transition-all"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-brand relative">
                  <Image
                    src={featured.cover || "/placeholder-cover.svg"}
                    alt={featured.title}
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-brand/10 text-brand px-2 py-0.5 font-medium">Featured</span>
                    <span>·</span>
                    <span>{featured.category}</span>
                    <span>·</span>
                    <span>{featured.readingTime} min read</span>
                  </div>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-primary group-hover:text-brand transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-3 text-sm">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white font-semibold text-xs">
                      {featured.author.name.split(" ").map((s) => s[0]).join("")}
                    </span>
                    <div>
                      <div className="font-medium text-primary">{featured.author.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(featured.publishedAt).toLocaleDateString(undefined, { dateStyle: "medium" })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        </section>
      )}

      {/* Filter Bar */}
      <section className="container-prose pb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              aria-label="Search articles"
              className="w-full rounded-full border border-border bg-card pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto -mx-1 px-1 pb-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                  cat === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-prose pb-24">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">No articles match your search.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elevated transition-all"
              >
                <div className="aspect-video bg-gradient-brand relative">
                  <Image
                    src={p.cover || "/placeholder-cover.svg"}
                    alt={p.title}
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-brand/10 text-brand px-2 py-0.5">{p.category}</span>
                    <span>·</span>
                    <span>{p.readingTime} min read</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-primary group-hover:text-brand transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <div className="mt-5 text-xs text-muted-foreground">
                    {p.author.name} · {new Date(p.publishedAt).toLocaleDateString(undefined, { dateStyle: "medium" })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
