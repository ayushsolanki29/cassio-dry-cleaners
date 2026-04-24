import "./globals.css";

export const metadata = {
  title: "Cassio Dry Cleaners | Premium laundry and dry cleaning",
  description: "Premium dry cleaning, wash & fold, and ironing in 24 hours. Free pickup and delivery across London.",
  authors: [{ name: "Cassio Dry Cleaners" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
