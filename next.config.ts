import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['randomuser.me', 'img.clerk.com'],
    formats: ['image/webp'] // convert to webp format
  }
};

export default nextConfig;
