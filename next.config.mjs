/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mis-15-invitacion",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
