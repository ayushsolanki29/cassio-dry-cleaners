import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ArticleHeader } from "@/components/blog-detail/ArticleHeader";
import { ArticleImage } from "@/components/blog-detail/ArticleImage";
import { ArticleContent } from "@/components/blog-detail/ArticleContent";
import { ArticleShare } from "@/components/blog-detail/ArticleShare";
import { AuthorBio } from "@/components/blog-detail/AuthorBio";
import { RelatedArticles } from "@/components/blog-detail/RelatedArticles";
import { ArticleCta } from "@/components/blog-detail/ArticleCta";

// Sample article data - in a real app, this would come from a CMS or database
const articleData = {
  "silk-garment-care": {
    title: "The Complete Guide to Caring for Silk Garments",
    slug: "silk-garment-care",
    excerpt: "Silk is one of the most luxurious fabrics, but it requires special care to maintain its beauty. Learn the expert techniques Cassio uses to clean and preserve silk garments.",
    category: "Garment Care",
    author: "Emma Thompson",
    date: "April 15, 2026",
    readTime: "8 min",
    image: "/assets/service-drycleaning.jpg"
  },
  "wine-stain-removal": {
    title: "How to Remove Wine Stains from Delicate Fabrics",
    slug: "wine-stain-removal",
    excerpt: "Quick action is key when dealing with wine spills. Here's what to do immediately and when to call the professionals at Cassio.",
    category: "Garment Care",
    author: "James Martinez",
    date: "April 20, 2026",
    readTime: "5 min",
    image: "/assets/service-washfold.jpg"
  },
  "fabric-care-labels": {
    title: "Understanding Fabric Care Labels: A Complete Guide",
    slug: "fabric-care-labels",
    excerpt: "Decode those mysterious symbols on your clothing tags and learn what they mean for proper garment care.",
    category: "Fabric Guide",
    author: "Sophie Chen",
    date: "April 18, 2026",
    readTime: "7 min",
    image: "/assets/service-ironing.jpg"
  },
  "east-london-guide": {
    title: "Best Dry Cleaners in East London: Local's Guide",
    slug: "east-london-guide",
    excerpt: "Discover the top-rated garment care services in East London. From Shoreditch to Canary Wharf, find out why Cassio is the local favorite.",
    category: "London Life",
    author: "Oliver Davies",
    date: "April 15, 2026",
    readTime: "6 min",
    image: "/assets/hero-woman.jpg"
  },
  "eco-friendly-cleaning": {
    title: "Eco-Friendly Dry Cleaning: What You Need to Know",
    slug: "eco-friendly-cleaning",
    excerpt: "How sustainable cleaning methods protect your clothes and the planet. Learn about Cassio's commitment to green technology.",
    category: "Sustainability",
    author: "Maya Patel",
    date: "April 12, 2026",
    readTime: "8 min",
    image: "/assets/section-towels.jpg"
  },
  "day-in-life": {
    title: "A Day in the Life at Cassio Dry Cleaners",
    slug: "day-in-life",
    excerpt: "Go behind the scenes with our cleaning specialists and discover what makes Cassio different from other dry cleaners.",
    category: "Behind the Scenes",
    author: "Tom Richardson",
    date: "April 10, 2026",
    readTime: "4 min",
    image: "/assets/service-ironing.jpg"
  },
  "wedding-dress-preservation": {
    title: "Wedding Dress Preservation: Expert Tips",
    slug: "wedding-dress-preservation",
    excerpt: "Protect your precious memories with proper bridal gown care. Cassio's wedding dress specialists share their preservation secrets.",
    category: "Garment Care",
    author: "Emma Thompson",
    date: "April 8, 2026",
    readTime: "9 min",
    image: "/assets/service-premium.jpg"
  },
  "laundry-mistakes": {
    title: "10 Common Laundry Mistakes You're Probably Making",
    slug: "laundry-mistakes",
    excerpt: "Avoid these pitfalls to keep your clothes looking their best. Learn from Cassio's expert cleaning team.",
    category: "Garment Care",
    author: "James Martinez",
    date: "April 5, 2026",
    readTime: "6 min",
    image: "/assets/service-washfold.jpg"
  },
  "winter-coat-storage": {
    title: "The Ultimate Guide to Storing Winter Coats",
    slug: "winter-coat-storage",
    excerpt: "Proper storage prevents damage and keeps coats fresh for next season. Cassio's storage tips for luxury outerwear.",
    category: "Fabric Guide",
    author: "Sophie Chen",
    date: "April 3, 2026",
    readTime: "7 min",
    image: "/assets/service-drycleaning.jpg"
  },
  "professional-vs-home": {
    title: "Why Professional Dry Cleaning Beats Home Methods",
    slug: "professional-vs-home",
    excerpt: "Discover the science behind professional garment care and why Cassio's methods deliver superior results.",
    category: "Garment Care",
    author: "Dr. Lisa Wong",
    date: "April 1, 2026",
    readTime: "10 min",
    image: "/assets/service-premium.jpg"
  }
};

export async function generateStaticParams() {
  return Object.keys(articleData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articleData[slug];
  
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} — Cassio Blog`,
    description: article.excerpt,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const article = articleData[slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="py-20 text-center">
          <h1 className="font-display text-4xl font-semibold text-navy">Article Not Found</h1>
          <p className="mt-4 text-muted-foreground">The article you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ArticleHeader article={article} />
      <ArticleImage article={article} />
      <ArticleContent article={article} />
      <ArticleShare />
      <AuthorBio article={article} />
      <RelatedArticles />
      <ArticleCta />
      <Footer />
    </main>
  );
}
