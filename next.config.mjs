/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // The double asterisk allows any domain
      },
    ],
  },
};

export default nextConfig;
