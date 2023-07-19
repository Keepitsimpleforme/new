/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  assetPrefix: './',
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}
