import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {TanStackRouterVite} from "@tanstack/router-plugin/vite";

export default defineConfig({
    plugins: [
        react(),
        TanStackRouterVite({
            autoCodeSplitting: true
        })
    ],
    resolve: {
        alias: {
            "@": "/src"
        }
    },
  server: {
    allowedHosts: true
  },
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                assetFileNames: "styles/style-[hash].css"
            }
        }
    }
});
