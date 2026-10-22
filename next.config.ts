import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: false },
      { source: "/historie.html", destination: "/over-ons", permanent: false },
      { source: "/visie.html", destination: "/over-ons", permanent: false },
      { source: "/kwaliteiten.html", destination: "/over-ons", permanent: false },
      { source: "/nieuwbouw.html", destination: "/diensten/nieuwbouw", permanent: false },
      { source: "/verbouw.html", destination: "/diensten/verbouw-en-aanbouw", permanent: false },
      { source: "/onderhoud.html", destination: "/diensten/onderhoud", permanent: false },
      { source: "/reno.html", destination: "/diensten/renovatie", permanent: false },
      { source: "/woon.html", destination: "/diensten/woonboerderijen", permanent: false },
      { source: "/machinaal.html", destination: "/diensten/timmerwerk", permanent: false },
      { source: "/badkamer.html", destination: "/diensten/badkamer", permanent: false },
      { source: "/utiliteit.html", destination: "/diensten/utiliteitsbouw", permanent: false },
      { source: "/agrarisch.html", destination: "/diensten/agrarisch", permanent: false },
      { source: "/service.html", destination: "/diensten/service", permanent: false },
      { source: "/vacatures.html", destination: "/over-ons", permanent: false },
      { source: "/info.html", destination: "/contact", permanent: false },
      { source: "/contact.html", destination: "/contact", permanent: false },
      { source: "/contact.php", destination: "/contact", permanent: false },
    ];
  },
};

export default nextConfig;
