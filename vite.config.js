import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import istanbul from "vite-plugin-istanbul";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        istanbul({
            cypress: true,
            include: ["src/**/*"],
            exclude: ["node_modules", "cypress/**"],
            extension: [".js", ".jsx", ".ts", ".tsx"],
        }),
    ],
    server: {
        port: 3000,
        host: "0.0.0.0",
        open: true,
    },
});
