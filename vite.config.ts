import type { UserConfig } from "vite";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

export default {
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      formats: ["es"],
    },
    outDir: "dist",
    rollupOptions: { output: { entryFileNames: "index.js" } },
  },
  plugins: [dts({ tsconfigPath: "./tsconfig.json" })],
} satisfies UserConfig;
