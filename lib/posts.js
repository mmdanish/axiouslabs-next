// lib/posts.js — Server-only. Reads Markdown files from content/posts/ at build time.
// Every blog page is statically generated — zero network requests, perfect for SEO.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      category: data.category ?? "General",
      tags: data.tags ?? [],
      author: {
        name: data.author_name ?? "",
        role: data.author_role ?? "",
      },
      publishedAt: data.published_at ?? "",
      readingTime: data.reading_time ?? 5,
      cover: data.cover ?? "/placeholder-cover.svg",
      featured: !!data.featured,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkHtml).process(content);
  const bodyHtml = processed.toString();

  return {
    slug,
    title: data.title ?? "",
    excerpt: data.excerpt ?? "",
    body: bodyHtml,
    category: data.category ?? "General",
    tags: data.tags ?? [],
    author: {
      name: data.author_name ?? "",
      role: data.author_role ?? "",
    },
    publishedAt: data.published_at ?? "",
    readingTime: data.reading_time ?? 5,
    cover: data.cover ?? "/placeholder-cover.svg",
    featured: !!data.featured,
  };
}

export function getAllSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
