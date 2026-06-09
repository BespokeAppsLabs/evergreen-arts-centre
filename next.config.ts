import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.evergreenarts.co.za" }],
        destination: "https://evergreenarts.co.za/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
