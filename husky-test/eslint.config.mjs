import globals from "globals"; // Para manejar variables globales
import pluginJs from "@eslint/js"; // Configuración básica de ESLint
import pluginReact from "eslint-plugin-react"; // Plugin de React

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Aplicar reglas a todos los archivos relevantes
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser, // Configurar variables globales del navegador
    },
    settings: {
      react: {
        version: "detect", // Detectar automáticamente la versión de React
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Desactivar la regla de React en el scope
    },
  },
  // Configuración recomendada de ESLint para JavaScript
  pluginJs.configs.recommended,
  // Configuración recomendada de React
  pluginReact.configs.flat.recommended,
];
