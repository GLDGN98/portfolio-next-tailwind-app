/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

  // output: "export",
  // assetPrefix:
  //   process.env.NODE_ENV === "production" ? "/portfolio-next-tailwind-app" : "",
  // basePath: "/portfolio-next-tailwind-app",
}
