import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
    transform: {
      "^.+\\.jsx?$": "esbuild-jest",
    },
  },
});

// test: {
//   global: true,
//   environment: 'jsdom',
//   setupFiles: "./src/lib/tests/setup.js",
//   transform: {
//     '^.+\\.jsx?$': 'esbuild-jest',
//   },
// },
