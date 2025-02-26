import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // Must match GitHub repo name
  build: {
    outDir: "dist",
  },
});
