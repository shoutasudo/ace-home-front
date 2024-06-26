/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scdn.line-apps.com',
            },
            {
                protocol: 'https',
                hostname: '**.cdninstagram.com',
            },
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_BACKEND_URL,
            },
            {
                protocol: 'https',
                hostname: 'ace-home-api.com',
            },
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_FRONTEND_URL
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'nikkan-spa.jp',
            },
        ],
    },
};
export default nextConfig;
