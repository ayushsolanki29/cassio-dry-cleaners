import "./globals.css";
import { Fredoka, Inter } from "next/font/google";
import { PageLoader } from "@/components/common/PageLoader";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://cassiodrycleaners.co.uk"),
  title: {
    default: "Cassio Dry Cleaners | Premium laundry & dry cleaning in Watford",
    template: "%s | Cassio Dry Cleaners",
  },
  description: "Premium dry cleaning, wash & fold, and ironing in 24 hours. Eco-friendly garment care with free pickup and delivery across Watford and surrounding areas.",
  keywords: ["dry cleaners Watford", "laundry near me", "wash and fold", "ironing service Watford", "same day dry cleaning", "eco-friendly dry cleaners", "free pickup laundry"],
  authors: [{ name: "Cassio Dry Cleaners" }],
  creator: "Cassio Dry Cleaners",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Cassio Dry Cleaners",
    title: "Cassio Dry Cleaners | Premium laundry & dry cleaning in Watford",
    description: "Premium dry cleaning, wash & fold, and ironing in 24 hours. Eco-friendly garment care with free pickup and delivery across Watford.",
    images: [
      {
        url: "/icon1.png",
        width: 800,
        height: 600,
        alt: "Cassio Dry Cleaners Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cassio Dry Cleaners | Premium laundry & dry cleaning",
    description: "Premium dry cleaning, wash & fold, and ironing in 24 hours. Free pickup and delivery across Watford.",
    images: ["/icon1.png"],
  },
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    title: "Cassio Dry Cleaners",
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    "name": "Cassio Dry Cleaners",
    "image": "https://cassiodrycleaners.co.uk/icon1.png",
    "@id": "https://cassiodrycleaners.co.uk",
    "url": "https://cassiodrycleaners.co.uk",
    "telephone": "+44 1923 256212",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "166 Cassiobury Dr",
      "addressLocality": "Watford",
      "postalCode": "WD17 3AJ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.666990,
      "longitude": -0.415050
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:30"
      }
    ],
    "priceRange": "$$",
    "areaServed": ["Watford", "Cassiobury", "Croxley Green", "Nascot Wood", "Bushey", "Rickmansworth", "Kings Langley", "Abbots Langley", "Chorleywood", "Northwood", "Carpenters Park"]
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fredoka.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
