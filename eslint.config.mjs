import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Reduce severity of unused variables/imports to warnings instead of errors
      "@typescript-eslint/no-unused-vars": "warn",
      
      // Allow @ts-ignore comments
      "@typescript-eslint/ban-ts-comment": "warn",
      
      // Disable strict boolean expressions
      "@typescript-eslint/strict-boolean-expressions": "off",
      
      // Relax rules for explicit function return types
      "@typescript-eslint/explicit-function-return-type": "off",
      
      // Allow empty interfaces
      "@typescript-eslint/no-empty-interface": "warn",
      
      // Relax rules for explicit module boundary types
      "@typescript-eslint/explicit-module-boundary-types": "off",
      
      // Allow any type
      "@typescript-eslint/no-explicit-any": "warn",
      
      // Disable unescaped entities check (apostrophes in text)
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
