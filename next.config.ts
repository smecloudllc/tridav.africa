import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root — a stray lockfile in the home directory
    // otherwise makes Next.js guess the wrong root.
    root: path.join(__dirname),
  },
};

export default nextConfig;
