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
                hostname: 'scontent-itm1-1.cdninstagram.com',
            },
        ],
    },
};

export default nextConfig;
