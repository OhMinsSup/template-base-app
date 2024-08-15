import type { Options } from "tsup";
import { defineConfig } from "tsup";

export default defineConfig((options: Options) => [
  {
    entry: {
      index: "src/index.ts",
      authkit: "src/authkit/index.ts",
      auth: "src/auth/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    minify: !options.watch,
    minifyWhitespace: true,
    clean: true,
    ...options,
  },
]);
