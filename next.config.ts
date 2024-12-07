/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb', // Adjust to your desired limit, e.g., 5MB
    },
  },
};

module.exports = nextConfig;
