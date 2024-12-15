module.exports = {
    env: {
      browser: true, // Entorno de navegador
      es2021: true,  // Habilitar ES2021
      node: true,    // Entorno de Node.js
    },
    extends: [
      'eslint:recommended',               // Reglas recomendadas de ESLint
      'plugin:react/recommended',         // Reglas específicas para React
      'plugin:react-hooks/recommended',   // Reglas específicas para hooks de React
      'plugin:jsx-a11y/recommended',      // Reglas de accesibilidad
      'plugin:prettier/recommended',      // Integra Prettier con ESLint
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Soporte para JSX
      },
      ecmaVersion: 2021,  // Sintaxis moderna de ES
      sourceType: 'module', // Uso de módulos
    },
    plugins: ['react', 'jsx-a11y', 'prettier'], // Plugins usados por ESLint
    rules: {
      // Reglas específicas
      'prettier/prettier': 'error', // Errores de Prettier como errores de ESLint
      'react/prop-types': 'off',   // Deshabilitar validación de prop-types (si usas TypeScript)
      'react/react-in-jsx-scope': 'off', // No requiere importar React en JSX (React 17+)
      'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // Advertencia para variables no usadas
      'quotes': ['error', 'single'], // Forzar comillas simples
      'semi': ['error', 'always'],  // Requiere punto y coma
      'jsx-a11y/anchor-is-valid': 'warn', // Reglas básicas de accesibilidad para <a>
    },
    settings: {
      react: {
        version: 'detect', // Detecta automáticamente la versión de React
      },
    },
  };
  