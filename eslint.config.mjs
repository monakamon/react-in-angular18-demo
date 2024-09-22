// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tailwind from "eslint-plugin-tailwindcss";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    processor: angular.processInlineTemplates,
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
  ...tailwind.configs["flat/recommended"],
  eslintPluginPrettierRecommended,
);
