/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.imgur.com', '*', 'media.licdn.com', 'localhost', '127.0.0.1'],
    },
    // adicione os dominios que forem ser utilizados para as imagens caso dê erro.
  }
  
  module.exports = nextConfig
  