export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: "https://cassiodrycleaners.co.uk/sitemap.xml",
  };
}
