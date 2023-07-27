import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { PluginOption, defineConfig } from "vite";
import dts from "vite-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }) as PluginOption,
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    target: "es2019",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "react-alzina-menu",
      formats: ["es"],
      fileName: (format) => `react-alzina-menu.${format}.js`,
    },
    rollupOptions: {
      // external: [
      //   "react",
      //   "react-dom",
      //   "react-dnd",
      //   "react-dnd-html5-backend",
      //   "react-dnd-touch-backend",
      // ],
      // output: {
      //   globals: {
      //     react: "React",
      //     "react-dom": "ReactDOM",
      //   },
      // },
    },
  },
});
