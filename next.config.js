/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ✅ This enables static export
  images: {
    unoptimized: true, // ✅ Needed if you're using <Image /> component
  },
};

module.exports = nextConfig;
