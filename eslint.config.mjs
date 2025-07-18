import { FlatCompat } from "@eslint/eslintrc";
import pluginImport from "eslint-plugin-import";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["src/hooks/tmdb.ts"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: {
      import: pluginImport,
    },
  },
];

export default eslintConfig;
