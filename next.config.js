/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  // Your other configurations can go here

  // Add the "output" option for static HTML export
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/public" : "",

  // Add any other configurations you need
}
