/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/dudzmiko.dev',
    output: 'export',
    reactStrictMode: true,
    images: {
      unoptimized: true, // Aby uniknąć problemów z optymalizacją obrazów
    },
  }
  
  export default nextConfig
  