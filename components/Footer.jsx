import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map((l, i) => (
          <li key={i}>
            <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-dark text-white/80 mt-24">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="AxiosLabs Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg object-cover shadow-elevated"
            />
            <span className="font-semibold text-white text-lg">axiouslabs</span>
          </div>
          <p className="mt-4 text-sm text-white/60 max-w-xs">
            Engineering software, cloud, and AI systems for the world&apos;s most ambitious teams.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/axiouslabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              aria-label="Twitter / X"
              href="#"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <FaXTwitter size={16} />
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/axiouslabs?igsh=MWNla2txbWtkd3prcg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        <FooterCol
          title="Company"
          links={[
            { href: "/about", label: "About" },
            { href: "/careers", label: "Careers" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
            { href: "/privacy-policy", label: "Privacy Policy" },
          ]}
        />
        <FooterCol
          title="Services"
          links={[
            { href: "/services", label: "Software Development" },
            { href: "/services", label: "Cloud Solutions" },
            { href: "/services", label: "AI & Data" },
            { href: "/services", label: "Digital Marketing" },
          ]}
        />
        <FooterCol
          title="Products"
          links={[{ href: "/products", label: "Sellops" }]}
        />
      </div>
      <div className="border-t border-white/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} axiouslabs. All rights reserved.</p>
          <p>Crafted with precision · Built for scale</p>
        </div>
      </div>
    </footer>
  );
}
