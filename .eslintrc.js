let path = require("path");


const appRoot = path.join(__dirname);

module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "import",
        "jest",
        "react-hooks",
        "@typescript-eslint",
    ],
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:jest/recommended",
    ],
    "settings": {
        "react": {
            "version": "16.8.3",
        },
        "import/resolver": {
            // use <root>/tsconfig.json for resolving aliases
            "typescript": {},
            
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"],
            },
            "webpack": { "config": path.join(appRoot, "./config/webpack.config.js") },
        },
    },
    "env": {
        "jest": true,
        "es6": true,
        "node": true,
        "browser": true,
    },
    "rules": {
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/no-namespace": 0,
        "@typescript-eslint/no-empty-interface": 0,
        
        "no-unused-vars": 0,
        "no-console": 0,
        "react/prop-types": 0,
        "jest/valid-expect": 0,
        
        "semi": [2, "always"],
        "quotes": [2, "double", { "avoidEscape": true }],
        "camelcase": 1,
        "indent": [2, 4, { "SwitchCase": 1 }],
        "spaced-comment": [2, "always"],
        "arrow-spacing": [2, { "before": true, "after": true }],
        "comma-dangle": [2, "always-multiline"],
        "no-multi-spaces": 2,
        "object-curly-spacing": [2, "always"],
        "space-before-blocks": [2, { "functions": "always", "keywords": "always", "classes": "always" }],
        "space-before-function-paren": [2, { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
        
        "import/order": 2, // not working yet
    },
    "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./",
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
        },
    },
};
