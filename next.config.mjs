/** @type {import('next').NextConfig} */
const imageDomains = process.env.NEXT_PUBLIC_IMAGE_DOMAINS ? process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(',') : [];

const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  images: {
    domains: imageDomains,
    remotePatterns: [
      {
        protocol: "https",
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
