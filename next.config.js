// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 启用静态导出
    distDir: '.next', // 自定义构建输出目录（可选）
    images: {
      unoptimized: true, // 禁用图片优化（静态导出时需要）
    },
  };
  
  module.exports = nextConfig;