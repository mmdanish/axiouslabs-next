import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/posts";
import { FadeIn } from "@/components/Motion";
import { notFound } from "next/navigation";

// Pre-generate all blog post pages at build time
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.cover ? [{ url: post.cover }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [post.cover] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <article>
      {/* Header */}
      <header className="bg-gradient-hero border-b border-border">
        <div className="container-prose pt-12 pb-16 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft size={14} /> All articles
          </Link>
          <FadeIn>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full bg-brand/10 text-brand px-2 py-0.5 font-medium">{post.category}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} /> {post.readingTime} min
              </span>
              <span>·</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(undefined, { dateStyle: "long" })}
              </time>
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
            <div className="mt-8 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-white text-sm font-semibold">
                {post.author.name.split(" ").map((s) => s[0]).join("")}
              </span>
              <div className="text-sm">
                <div className="font-medium text-primary">{post.author.name}</div>
                <div className="text-xs text-muted-foreground">{post.author.role}</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Cover Image */}
      <div className="container-prose py-12">
        <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-gradient-brand relative">
          <Image
            src={post.cover || "/placeholder-cover.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Body */}
      <div className="container-prose pb-20">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-muted/40 border-t border-border">
          <div className="container-prose py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-primary">More in {post.category}</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
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
                    <h3 className="text-base font-semibold text-primary group-hover:text-brand">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
