import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    coverage: {
      all: true,
      exclude: [
        "**/*.d.ts",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.types.ts",
        "App.tsx",
        "graphql/client.ts",
        "index.tsx",
        "serviceWorker.ts",
        "src/test",
      ],
      excludeNodeModules: true,
      reporter: ["text", "json", "html"],
      src: ["./src"],
      lines: 99,
      functions: 98,
      branches: 100,
      statements: 99,
    },
  },
});