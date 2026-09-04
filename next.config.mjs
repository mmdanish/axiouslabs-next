/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow local public images + external placeholder/cover images if needed
    remotePatterns: [],
    // Allow unoptimized local svg placeholders
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
