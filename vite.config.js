import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    base: "/urbancraft-services/",

    build: {
        sourcemap: false,
    },

    css: {
        devSourcemap: false,
    },
});
