/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Ensures all pages are treated as static files with .html
};

export default nextConfig;
