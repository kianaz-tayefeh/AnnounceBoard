import { defineConfig } from "vite";
import ReactRefresh from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ReactRefresh()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    port: 4000,
  },
});
