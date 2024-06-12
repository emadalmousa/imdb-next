
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**'
            }
        ]
    },
    // Weitere Konfigurationen können hier hinzugefügt werden
};

export default nextConfig;
