import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-prose py-32 text-center">
      <p className="text-6xl font-semibold bg-gradient-brand bg-clip-text text-transparent">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-primary">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-brand-foreground px-6 py-3 text-sm font-medium shadow-elevated hover:opacity-95 transition"
      >
        Go home
      </Link>
    </section>
  );
}
