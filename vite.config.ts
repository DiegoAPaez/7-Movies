import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        outDir: "dist",
        assetsDir: "assets",
        sourcemap: false,
        emptyOutDir: true,
    },
    publicDir: "public",
    server: {
        port: 5173,
        open: true,
    },
});
