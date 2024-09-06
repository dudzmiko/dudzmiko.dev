/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/dudzmiko.dev",
    output: "export",
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
        ],
    },
}

export default nextConfig