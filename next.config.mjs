/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/dudzmiko.dev', // Ścieżka na GitHub Pages
    output: "export",
    images: {
      loader: "akamai",
      path: "",
    },
  };
  
  export default nextConfig;