/** @type {import('next').NextConfig} */
const nextConfig = { 
    images:{ 
        remotePatterns:[ 
            {
                    protocol: 'https',
                    hostname: 'cdn.myanimelist.net',
                    pathname: '/images/**',          
            }
        ],
        domains:['*']
    }
};

export default nextConfig;
