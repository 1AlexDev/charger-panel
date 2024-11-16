import nextPwa from "next-pwa";

const nextConfig = nextPwa({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest.json$/],
});

/** Prisma configuration */
export default {
  ...nextConfig,
  webpack: (config) => {
    config.externals.push("@prisma/client");
    return config;
  },
};