import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 배포 설정
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
