/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    appName: 'Nugik',
  },
  async rewrites() {
    return [
      // {
      //   source: '/login',
      //   destination: '/auth/LoginPage',
      // },
      // {
      //   source: '/register',
      //   destination: '/auth/RegisterPage',
      // },
      // {
      //   source: '/dashboard',
      //   destination: '/Dashboard',
      // }
    ]
  },
}

module.exports = nextConfig
