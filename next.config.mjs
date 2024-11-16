import nextPwa from 'next-pwa';

const isProd = process.env.NODE_ENV === 'production';  // Correcting this to check for production mode

/** @type {import('next').NextConfig} */
const nextConfig = nextPwa({
  dest: 'public', // Directory where service worker and other PWA assets will be saved
  disable: !isProd, // Disable PWA during development
  register: true,  // Automatically register the service worker
  skipWaiting: true,  // Skip the waiting phase when a new service worker is installed
  buildExcludes: [/middleware-manifest.json$/],  // Exclude middleware if you use it
});

export default nextConfig;