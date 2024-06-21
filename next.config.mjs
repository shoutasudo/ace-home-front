/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.NEXT_PUBLIC_BACKEND_URL, 'localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scdn.line-apps.com',
            },
            {
                protocol: 'https',
                hostname: 'scontent-itm1-1.cdninstagram.com',
            },
        ],
    },
};

export default nextConfig;
