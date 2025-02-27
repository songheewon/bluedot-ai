export default defineConfig({
  // ... 기존 설정 ...
  server: {
    proxy: {
      '/api': {
        target: 'https://bluedot.so/blog/members',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}) 