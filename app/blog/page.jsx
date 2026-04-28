import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { CategoryChips } from "@/components/blog/CategoryChips";
import { LatestArticles } from "@/components/blog/LatestArticles";
import { EditorsPicks } from "@/components/blog/EditorsPicks";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { PopularGuides } from "@/components/blog/PopularGuides";
import { BlogCta } from "@/components/blog/BlogCta";

export const metadata = {
  title: "Blog — Cassio Dry Cleaners | Garment Care Tips & Guides",
  description: "Expert advice on garment care, fabric guides, stain removal, and more from the Cassio Dry Cleaners team in London.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BlogHero />
      <FeaturedPost />
      <CategoryChips />
      <LatestArticles />
      <EditorsPicks />
      <BlogNewsletter />
      <PopularGuides />
      <BlogCta />
      <Footer />
    </main>
  );
}
