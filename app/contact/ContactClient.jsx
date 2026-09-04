"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FadeIn } from "@/components/Motion";

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  else if (v.name.trim().length > 100) e.name = "Keep it under 100 characters.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.phone && v.phone.length > 40) e.phone = "Phone number is too long.";
  if (!v.message.trim()) e.message = "Please add a message.";
  else if (v.message.length > 2000) e.message = "Please keep your message under 2000 characters.";
  return e;
}

function Field({ label, id, error, children, className }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium text-primary">{label}</label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand shrink-0">{icon}</span>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-medium text-primary">{value}</div>
      </div>
    </li>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  }

  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="container-prose pt-20 pb-16 max-w-3xl">
          <FadeIn>
            <p className="text-sm font-medium text-brand">Contact</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-primary">
              Let&apos;s build something remarkable.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Tell us about your project — we reply within one business day with a clear next step.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-prose py-20 grid lg:grid-cols-12 gap-10">
        <FadeIn className="lg:col-span-7">
          <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft">
            {sent && (
              <div className="mb-6 flex items-start gap-3 rounded-xl bg-brand/10 border border-brand/30 p-4 text-sm">
                <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" />
                <p className="text-primary">Thanks — your message is on its way. We&apos;ll get back to you within one business day.</p>
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" id="name" error={errors.name}>
                <input id="name" type="text" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="contact-input" autoComplete="name" />
              </Field>
              <Field label="Email" id="email" error={errors.email}>
                <input id="email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="contact-input" autoComplete="email" />
              </Field>
              <Field label="Phone (optional)" id="phone" error={errors.phone} className="sm:col-span-2">
                <input id="phone" type="tel" maxLength={40} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="contact-input" autoComplete="tel" />
              </Field>
              <Field label="Message" id="message" error={errors.message} className="sm:col-span-2">
                <textarea id="message" rows={6} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="contact-input resize-y" />
              </Field>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-brand-foreground px-6 py-3 text-sm font-medium shadow-elevated hover:opacity-95 transition">
              Send message <Send size={14} />
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-5">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
            <h2 className="text-lg font-semibold text-primary">Contact Information</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Whether you&apos;re looking to build a custom software solution, implement SellOps ERP, modernize your
              existing systems, or discuss a new idea, we&apos;d love to hear from you.
            </p>
            <ul className="mt-8 space-y-5 text-sm">
              <Info icon={<Mail size={16} />} label="Email" value="contact@axioslabs.com" />
              <Info icon={<Phone size={16} />} label="Phone" value="+91 63623 60979" />
              <Info icon={<MapPin size={16} />} label="Location" value="Kerala, India" />
            </ul>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm font-medium text-primary">Follow us</p>
              <div className="mt-4 flex gap-3">
                <a aria-label="LinkedIn" href="https://www.linkedin.com/company/axiouslabs/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-full bg-muted hover:bg-brand/10 hover:text-brand transition">
                  <FaLinkedinIn size={16} />
                </a>
                <a aria-label="Twitter / X" href="#" className="h-10 w-10 grid place-items-center rounded-full bg-muted hover:bg-brand/10 hover:text-brand transition">
                  <FaXTwitter size={16} />
                </a>
                <a aria-label="Instagram" href="https://www.instagram.com/axiouslabs?igsh=MWNla2txbWtkd3prcg%3D%3D" target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-full bg-muted hover:bg-brand/10 hover:text-brand transition">
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>
            <div className="mt-auto pt-8">
              <div className="rounded-2xl bg-gradient-brand p-6 text-white">
                <h3 className="font-semibold">Ready to get started?</h3>
                <p className="mt-2 text-sm text-white/80">Our team typically responds within one business day with the next steps for your project.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <style>{`
        .contact-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.75rem 0.875rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .contact-input:focus {
          border-color: var(--brand);
          box-shadow: 0 0 0 4px oklch(0.55 0.22 277 / 0.15);
        }
      `}</style>
    </>
  );
}
