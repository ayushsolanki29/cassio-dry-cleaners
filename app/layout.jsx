import "./globals.css";

export const metadata = {
  title: "Cassio Dry Cleaners — Premium laundry & dry cleaning",
  description: "Premium dry cleaning, wash & fold, and ironing in 24 hours. Free pickup and delivery across London.",
  authors: [{ name: "Cassio Dry Cleaners" }],
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add more meta tags here if needed */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
