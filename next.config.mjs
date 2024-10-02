/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "website-image-1.s3.amazonaws.com",
        port: "",
        pathname: "/Data+analyst_Portfolio+Projects/**",
      },
    ],
  },
};

export default nextConfig;
