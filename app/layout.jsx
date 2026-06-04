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

const inlineLoaderStyles = `
  #inline-loader {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #inline-loader img {
    width: 96px;
    height: 96px;
    border-radius: 9999px;
  }
  #inline-loader-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0%;
    background: oklch(0.62 0.21 252);
    animation: loader-progress 0.85s cubic-bezier(0.4,0,0.2,1) forwards;
  }
  @keyframes loader-progress {
    to { width: 100%; }
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fredoka.variable} ${inter.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: inlineLoaderStyles }} />
      </head>
      <body>
        {/* Inline loader — renders instantly from HTML, no JS required */}
        <div id="inline-loader">
          <img src="/assets/cassio-logo.jpg" alt="Cassio" />
          <div id="inline-loader-bar" />
        </div>

        <PageLoader />
        {children}
      </body>
    </html>
  );
}
