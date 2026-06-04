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
  title: "Cassio Dry Cleaners | Premium laundry and dry cleaning",
  description: "Premium dry cleaning, wash & fold, and ironing in 24 hours. Free pickup and delivery across Watford.",
  authors: [{ name: "Cassio Dry Cleaners" }],
  appleWebApp: {
    title: "Cassio Dry Cleaners.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fredoka.variable} ${inter.variable}`}>
      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
