import { getAllPosts } from "@/lib/posts";
import { blogCategories } from "@/lib/cms";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog",
  description:
    "Insights on cloud, AI, software engineering, and design from the axiouslabs team.",
};

export default async function BlogPage() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} categories={blogCategories} />;
}
