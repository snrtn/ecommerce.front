import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@common": "/src/components/common",
      "@form": "/src/components/form",
      "@navigation": "/src/components/navigation",

      "@hooks": "/src/hooks",
      "@redux": "/src/modules",
      "@mock": "/src/mock",
    },
  },
});
