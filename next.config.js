/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.imgur.com', '*', 'outro-dominio.com', 'mais-um-dominio.com'],
    },
    // adicione os dominios que forem ser utilizados para as imagens caso dê erro.
  }
  
  module.exports = nextConfig
  