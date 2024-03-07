import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://jadetgodtdu.github.io/recipes-start",
  //base:"http://localhost:4173/recipes-start"
});
