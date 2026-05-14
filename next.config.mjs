/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/ceebycelina",
  assetPrefix: "/ceebycelina/",

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;