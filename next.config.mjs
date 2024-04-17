/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/homepage",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    // /**
    //  * Disable server-based image optimization. Next.js does not support
    //  * dynamic features with static exports.
    //  *
    //  * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
    //  */
    // images: {
    //   unoptimized: true,
    // },
};

export default nextConfig;