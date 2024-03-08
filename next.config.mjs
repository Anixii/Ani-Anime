/** @type {import('next').NextConfig} */
const nextConfig = { 
    images:{ 
        remotePatterns:[ 
            {
                    protocol: 'https',
                    hostname: 'cdn.myanimelist.net',
                    pathname: '/images/**',          
            },
            {
                    protocol: 'https',
                    hostname: 's4.anilist.co',
                    pathname: '**',          
            }
        ],
        domains:['*']
    }
};

export default nextConfig;
