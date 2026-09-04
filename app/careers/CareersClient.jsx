"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";
import { jobs } from "@/lib/cms";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";

export default function CareersClient() {
  const [dept, setDept] = useState("All");

  const departments = useMemo(() => {
    return ["All", ...new Set(jobs.map((j) => j.department?.trim()).filter(Boolean))];
  }, []);

  const filtered = useMemo(() => {
    if (dept === "All") return jobs;
    return jobs.filter((j) => j.department?.trim().toLowerCase() === dept.trim().toLowerCase());
  }, [dept]);

  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="container-prose pt-20 pb-16 text-center">
          <FadeIn>
            <p className="text-sm font-medium text-brand">Careers</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-primary max-w-3xl mx-auto">
              Do the best work of your career.
            </h1>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
              We&apos;re a senior, globally distributed team. We hire for craft, curiosity, and kindness — and we
              keep teams small enough that great work compounds.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-prose py-16">
        <div className="flex flex-wrap gap-2 justify-center">
          {departments.map((d) => (
            <button
              key={d}
              onClick={() => setDept(d)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                dept === d
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-primary"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <Stagger key={dept} className="mt-10 grid gap-4">
          {filtered.map((j) => (
            <StaggerItem key={j.slug}>
              <article className="group rounded-2xl border border-border bg-card p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5 hover:shadow-elevated transition-all">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-brand/10 text-brand px-2 py-0.5 font-medium">{j.department}</span>
                    <span>·</span>
                    <span>{j.level}</span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-primary group-hover:text-brand transition-colors">
                    {j.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{j.description}</p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin size={12} />{j.location}</span>
                    <span className="inline-flex items-center gap-1"><Briefcase size={12} />{j.type}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> Posted {new Date(j.postedAt).toLocaleDateString(undefined, { dateStyle: "medium" })}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-brand-foreground px-5 py-2.5 text-sm font-medium shadow-elevated whitespace-nowrap"
                >
                  Apply now <ArrowRight size={14} />
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No open roles in this department right now.</p>
        )}
      </section>
    </>
  );
}
