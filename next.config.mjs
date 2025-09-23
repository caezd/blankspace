import { createMDX } from "fumadocs-mdx/next";
const withMDX = createMDX({
    // customise the config file path
    // configPath: "source.config.ts"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

export default withMDX(nextConfig);
