export default function sitemap() {
  const baseUrl = "https://cassiodrycleaners.co.uk";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/business",
    "/how-it-works",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const areas = [
    "watford",
    "cassiobury",
    "croxley-green",
    "nascot-wood",
    "bushey",
    "rickmansworth",
    "kings-langley",
    "abbots-langley",
    "chorleywood",
    "northwood",
    "carpenters-park"
  ];

  const dynamicRoutes = areas.map((area) => ({
    url: `${baseUrl}/areas/${area}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
