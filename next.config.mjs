/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Ensures all pages are treated as static files with .html
  serverActions: true, // ✅ OK if you're using Server Actions

};

export default nextConfig;
