// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/sitemap.xml',
            destination: '/sitemap.xml'
          },
        ]
      },
  }
   
  module.exports = nextConfig