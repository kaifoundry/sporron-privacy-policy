import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Essential for proper routing on Vercel
  base: "/",

  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Generate manifest for better caching
    manifest: true,

    // Optimize chunks for better loading
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },

  // Enable faster refresh for development
  server: {
    port: 3000,
    strictPort: true,
  },

  // Improve build performance
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
