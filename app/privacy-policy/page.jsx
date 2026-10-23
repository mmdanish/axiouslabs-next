import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Server,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Clock,
  UserCheck,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { FadeIn } from "@/components/Motion";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how axiouslabs collects, uses, and safeguards information when you visit axiouslabs.com or get in touch with our team.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  { id: "introduction", label: "1. Introduction & Scope" },
  { id: "information-collected", label: "2. Information We Collect" },
  { id: "how-we-use-information", label: "3. How Information Is Used" },
  { id: "cookies-and-tracking", label: "4. Cookies & Similar Technologies" },
  { id: "third-party-services", label: "5. Third-Party Services & Sharing" },
  { id: "data-security", label: "6. Data Security" },
  { id: "data-retention", label: "7. Data Retention" },
  { id: "privacy-choices", label: "8. Your Privacy Choices & Rights" },
  { id: "external-links", label: "9. External Links" },
  { id: "childrens-privacy", label: "10. Children's Privacy" },
  { id: "policy-changes", label: "11. Changes to This Policy" },
  { id: "contact-information", label: "12. Contact Information" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="container-prose pt-20 pb-16 max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3.5 py-1 text-xs font-medium">
              <ShieldCheck size={14} />
              <span>Legal Documentation</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-primary">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              This Privacy Policy explains how axiouslabs handles personal information when you visit{" "}
              <span className="text-primary font-medium">axiouslabs.com</span>, submit inquiries through our contact
              channels, or interact with our online services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted-foreground pt-6 border-t border-border">
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-brand" />
                <span>Last updated: October 23, 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileText size={14} className="text-brand" />
                <span>Scope: axiouslabs.com only</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-brand" />
                <span>Jurisdiction: Kerala, India</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container-prose py-16 max-w-4xl">
        {/* Quick Navigation Panel */}
        <FadeIn>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Table of Contents
            </h2>
            <nav className="mt-4 grid sm:grid-cols-2 gap-2.5 text-sm" aria-label="Table of contents">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="text-muted-foreground hover:text-brand hover:underline transition-colors py-1 flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                  <span>{sec.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </FadeIn>

        {/* Policy Sections */}
        <div className="space-y-12">
          {/* Section 1: Introduction and Scope */}
          <FadeIn>
            <article id="introduction" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <FileText size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">1. Introduction and Scope</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  axiouslabs (&quot;axiouslabs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a technology company delivering software
                  development, cloud infrastructure, AI engineering, and digital marketing services. We are based in Kerala, India.
                </p>
                <p>
                  This Privacy Policy applies solely to the public company marketing website located at{" "}
                  <strong className="text-primary font-medium">https://axiouslabs.com</strong> and direct communications
                  initiated through this site. It outlines the types of information we collect, how we use it, our
                  disclosure practices, and the choices available to you.
                </p>
                <div className="rounded-xl border border-border bg-muted/30 p-4 text-sm text-foreground">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle size={18} className="text-brand shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-primary">Explicit Scope Notice:</strong> This policy does{" "}
                      <em>not</em> apply to separate commercial software platforms (such as SellOps ERP), customer-hosted
                      solutions, mobile applications, or custom software projects engineered for our enterprise clients.
                      Those products and client engagements operate under independent customer service agreements and
                      dedicated privacy frameworks.
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Section 2: Information Collected */}
          <FadeIn>
            <article id="information-collected" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <Eye size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">2. Information We Collect</h2>
              </div>
              <div className="space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  We believe in minimal data collection. We only gather information that is necessary to deliver our website,
                  respond to business inquiries, and review job applications.
                </p>

                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl border border-border bg-muted/20 p-5">
                    <h3 className="font-semibold text-primary flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle2 size={16} className="text-brand" />
                      Information You Provide Voluntarily
                    </h3>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5">
                      <li>
                        <strong className="text-primary font-medium">Contact Inquiries:</strong> When submitting the
                        contact form on our website, you provide your name, business email address, optional phone
                        number, and message details.
                      </li>
                      <li>
                        <strong className="text-primary font-medium">Career Inquiries:</strong> When you express interest in
                        open roles listed on our Careers page, you may share your resume, background, employment history,
                        and contact coordinates.
                      </li>
                      <li>
                        <strong className="text-primary font-medium">Direct Correspondence:</strong> Any information
                        shared when reaching out to our official email address or phone number directly.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-border bg-muted/20 p-5">
                    <h3 className="font-semibold text-primary flex items-center gap-2 text-sm sm:text-base">
                      <Server size={16} className="text-brand" />
                      Standard Technical Data
                    </h3>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5">
                      <li>
                        <strong className="text-primary font-medium">Server Logs:</strong> Like standard web
                        applications, our hosting infrastructure automatically records basic HTTP request headers.
                      </li>
                      <li>
                        <strong className="text-primary font-medium">Diagnostic Information:</strong> This technical data may
                        include your IP address, browser user agent, operating system, requested page URL, referring URL,
                        and timestamp of your visit.
                      </li>
                      <li>
                        <strong className="text-primary font-medium">Purpose:</strong> Technical data is reviewed solely for
                        diagnostic troubleshooting, system availability, and security incident investigations.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-4 text-xs sm:text-sm text-muted-foreground">
                  <strong className="text-primary font-medium">What we do not collect:</strong> axiouslabs.com does not
                  process payment card information, requires no user account creation or passwords, and does not collect
                  sensitive personal data such as government identifiers, biometric data, or health records.
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Section 3: How Information Is Used */}
          <FadeIn>
            <article id="how-we-use-information" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <UserCheck size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">3. How Information Is Used</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>We process the information collected exclusively for legitimate business purposes:</p>
                <ul className="space-y-2.5 list-disc pl-5">
                  <li>
                    <strong className="text-primary font-medium">Responding to Inquiries:</strong> Reviewing and replying to
                    project consultation requests, service inquiries, and general correspondence submitted through our
                    contact form.
                  </li>
                  <li>
                    <strong className="text-primary font-medium">Project Scoping & Proposals:</strong> Preparing technical
                    estimates, commercial proposals, and discussing scope for potential software engineering and consulting engagements.
                  </li>
                  <li>
                    <strong className="text-primary font-medium">Recruitment & Hiring:</strong> Assessing candidate qualifications
                    for open job opportunities and scheduling interviews.
                  </li>
                  <li>
                    <strong className="text-primary font-medium">Infrastructure Security:</strong> Monitoring website performance,
                    investigating technical errors, mitigating automated bots, and protecting our systems against cyber threats.
                  </li>
                  <li>
                    <strong className="text-primary font-medium">Legal Compliance:</strong> Satisfying statutory record-keeping
                    obligations and enforcing our legal terms where required.
                  </li>
                </ul>
                <p className="pt-2">
                  <strong className="text-primary font-medium">No Data Monetization:</strong> We do not sell, rent, lease, or
                  trade personal information to third-party data brokers, advertising networks, or telemarketers.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Section 4: Cookies and Similar Technologies */}
          <FadeIn>
            <article id="cookies-and-tracking" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <Lock size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">4. Cookies & Similar Technologies</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  We prioritize user privacy in our codebase and architecture:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/20 border border-border">
                    <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary font-medium text-sm">No Advertising or Tracking Cookies:</strong> axiouslabs.com
                      does not set third-party advertising cookies, retargeting pixels, or behavioral tracking identifiers.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/20 border border-border">
                    <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary font-medium text-sm">Self-Hosted Typography:</strong> Web fonts (Inter)
                      are embedded and self-hosted locally by our Next.js application at build time. No client requests are
                      made to Google font servers during your visit.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/20 border border-border">
                    <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary font-medium text-sm">Zero Client-Side Storage:</strong> Our application
                      does not store personal profile or session data in your browser&apos;s <code className="text-xs bg-muted px-1.5 py-0.5 rounded">localStorage</code> or{" "}
                      <code className="text-xs bg-muted px-1.5 py-0.5 rounded">sessionStorage</code>.
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm">
                  Should our cloud hosting or Content Delivery Network (CDN) deploy transient, strictly technical cookies
                  solely for network routing, load distribution, or DDoS prevention, these cookies do not track personal
                  browsing behavior and are essential for site delivery.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Section 5: Third-Party Services and Information Sharing */}
          <FadeIn>
            <article id="third-party-services" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <Server size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">5. Third-Party Services & Information Sharing</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  We share information only with authorized service providers who support our core operations, subject to
                  confidentiality commitments, or when legally compelled:
                </p>
                <ul className="space-y-2.5 list-disc pl-5">
                  <li>
                    <strong className="text-primary font-medium">Hosting & Cloud Infrastructure:</strong> Our website and
                    assets are deployed on reputable cloud hosting and edge network providers that store and transmit web
                    traffic securely.
                  </li>
                  <li>
                    <strong className="text-primary font-medium">Email & Communications Services:</strong> Inquiries sent to our
                    contact email or through our forms are routed through commercial email servers to enable our team to
                    read and respond to your messages.
                  </li>
                  <li>
                    <strong className="text-primary font-medium">Legal Requirements:</strong> We may disclose information if
                    required to comply with applicable laws, judicial proceedings, court orders, or governmental directives.
                  </li>
                  <li>
                    <strong className="text-primary font-medium">Business Transfers:</strong> In the event of a merger,
                    acquisition, corporate restructuring, or asset transaction, personal information held by axiouslabs may
                    be transferred to the successor entity under equivalent privacy standards.
                  </li>
                </ul>
              </div>
            </article>
          </FadeIn>

          {/* Section 6: Data Security */}
          <FadeIn>
            <article id="data-security" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">6. Data Security</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  We apply technical and organizational safeguards appropriate to the sensitivity of information we process:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    <strong className="text-primary font-medium">Transport Encryption:</strong> All web traffic to and from{" "}
                    axiouslabs.com is encrypted using modern Transport Layer Security (HTTPS/TLS).
                  </li>
                  <li>
                    <strong className="text-primary font-medium">Input Validation & Limits:</strong> Our contact interfaces enforce
                    character limits and strict input validation to guard against injection threats and system abuse.
                  </li>
                  <li>
                    <strong className="text-primary font-medium">Access Controls:</strong> Inquiries are accessible only to
                    authorized staff members who need the information to address your project or career inquiry.
                  </li>
                </ul>
                <div className="rounded-xl border border-border bg-muted/30 p-4 text-xs sm:text-sm text-foreground">
                  <strong className="text-primary font-medium">Security Notice:</strong> While we implement diligent industry
                  safeguards, please be aware that no method of electronic transmission over the internet or data storage
                  can be guaranteed to be 100% invulnerable. We cannot warrant absolute security against all unforeseen risks.
                </div>
              </div>
            </article>
          </FadeIn>

          {/* Section 7: Data Retention */}
          <FadeIn>
            <article id="data-retention" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <Clock size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">7. Data Retention</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  We keep personal information only for the duration required to satisfy the business purposes for which it
                  was collected:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    <strong className="text-primary font-medium">General Inquiries:</strong> Contact submissions and related
                    correspondence are retained for the active duration of our business communication, typically maintained
                    as business correspondence history or deleted once the inquiry has been resolved.
                  </li>
                  <li>
                    <strong className="text-primary font-medium">Prospective Clients:</strong> If an inquiry leads to a
                    commercial contract, records are preserved under applicable contractual and statutory accounting obligations.
                  </li>
                  <li>
                    <strong className="text-primary font-medium">Job Applications:</strong> Candidate records are retained
                    during the hiring evaluation cycle and subsequently purged unless the candidate consents to keeping their
                    profile on file for future opportunities.
                  </li>
                </ul>
              </div>
            </article>
          </FadeIn>

          {/* Section 8: Privacy Choices and Rights */}
          <FadeIn>
            <article id="privacy-choices" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <UserCheck size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">8. Your Privacy Choices & Rights</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Depending on your jurisdiction and applicable data protection legislation (such as India&apos;s Digital Personal Data
                  Protection Act - DPDPA, the EU/UK GDPR, or other regional standards), you may have the following rights:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <h3 className="font-semibold text-primary text-sm">Right to Access & Review</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Request confirmation of whether we hold your contact details and obtain a summary of that information.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <h3 className="font-semibold text-primary text-sm">Right to Correction</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Request that we update or rectify inaccurate, incomplete, or out-of-date personal information.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <h3 className="font-semibold text-primary text-sm">Right to Erasure / Deletion</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Request the deletion of your personal contact records from our active correspondence databases.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <h3 className="font-semibold text-primary text-sm">Withdrawal of Consent</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Withdraw consent for future communications at any time by contacting us directly.
                    </p>
                  </div>
                </div>
                <p className="pt-2 text-xs sm:text-sm">
                  To exercise any of these rights, please email us at{" "}
                  <a href="mailto:contact@axioslabs.com" className="text-brand font-medium hover:underline">
                    contact@axioslabs.com
                  </a>{" "}
                  with the subject &quot;Privacy Request&quot;. We verify request identity and respond within a reasonable
                  timeframe (typically within 30 days), free of charge.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Section 9: External Links */}
          <FadeIn>
            <article id="external-links" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <ExternalLink size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">9. External Links</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Our website contains links to external third-party platforms, including our official social media channels
                  on LinkedIn and Instagram.
                </p>
                <p>
                  When you follow a link to an external site, this Privacy Policy no longer applies. axiouslabs has no control
                  over, and accepts no responsibility for, the content, security measures, or privacy policies of third-party
                  websites. We encourage you to review the privacy notices of any external site you visit.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Section 10: Children's Privacy */}
          <FadeIn>
            <article id="childrens-privacy" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">10. Children&apos;s Privacy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  axiouslabs.com is designed for business professionals, commercial organizations, and adult career candidates.
                  We do not knowingly market to or solicit personal information from individuals under the age of 18 (or the
                  applicable legal age in your jurisdiction).
                </p>
                <p>
                  If you believe that a minor has submitted personal information to our website without appropriate consent,
                  please notify us immediately at{" "}
                  <a href="mailto:contact@axioslabs.com" className="text-brand font-medium hover:underline">
                    contact@axioslabs.com
                  </a>
                  , and we will take immediate steps to delete such data.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Section 11: Changes to this Policy */}
          <FadeIn>
            <article id="policy-changes" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <RefreshCw size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">11. Changes to This Policy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  We may revise this Privacy Policy periodically to reflect changes in our technology practices, service
                  offerings, or legal obligations.
                </p>
                <p>
                  Any updates will be posted directly to this page with an updated &quot;Last updated&quot; date at the top.
                  Continued use of our website after the posting of changes constitutes acknowledgment of the updated policy.
                  We encourage you to revisit this page periodically to stay informed.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Section 12: Contact Information */}
          <FadeIn>
            <article id="contact-information" className="scroll-mt-24 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <Mail size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-primary">12. Contact Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  If you have questions, comments, or privacy requests regarding this policy or our data practices, please
                  contact axiouslabs through any of the following verified public channels:
                </p>

                <div className="mt-6 rounded-2xl border border-border bg-muted/20 p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand shrink-0">
                      <Mail size={16} />
                    </span>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <a href="mailto:contact@axioslabs.com" className="font-medium text-primary hover:text-brand transition-colors">
                        contact@axioslabs.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand shrink-0">
                      <Phone size={16} />
                    </span>
                    <div>
                      <div className="text-xs text-muted-foreground">Phone</div>
                      <a href="tel:+916362360979" className="font-medium text-primary hover:text-brand transition-colors">
                        +91 63623 60979
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand shrink-0">
                      <MapPin size={16} />
                    </span>
                    <div>
                      <div className="text-xs text-muted-foreground">Location</div>
                      <div className="font-medium text-primary">Kerala, India</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    Looking to discuss a software project?
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-brand-foreground px-5 py-2 text-xs sm:text-sm font-medium shadow-elevated hover:opacity-95 transition"
                  >
                    Go to Contact Page
                  </Link>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
