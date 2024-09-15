/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'uploaddeimagens.com.br',
    }]
  }
};

export default nextConfig;
