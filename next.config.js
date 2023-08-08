/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/portfolio-next-tailwind-app" : "",
}
