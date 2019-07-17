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
        "plugin:import/errors",
        "plugin:import/typescript",
        "plugin:jest/recommended",
        "plugin:react/recommended",
    ],
    "settings": {
        "react": {
            "version": "detect",
        },
        
        "import/resolver": {
            // use <root>/tsconfig.json for resolving aliases
            "typescript": {},
            
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"],
            },
            "webpack": { "config": path.join(appRoot, "config/webpack.common.js") },
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
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-object-literal-type-assertion": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-unused-vars": 0,
        
        "react-hooks/rules-of-hooks": 2,
        "react-hooks/exhaustive-deps": 1,
        
        "react/display-name": 0,
        
        "no-empty": 0,
        "no-unused-vars": 0,
        "no-console": 0,
        "react/prop-types": 0,
        "jest/valid-expect": 0,
        
        "semi": [2, "always"],
        "quotes": [2, "double", { "avoidEscape": true }],
        "camelcase": 1,
        "indent": [2, 4, { "SwitchCase": 1 }],
        // "spaced-comment": [1, "always"],
        "arrow-spacing": [2, { "before": true, "after": true }],
        "comma-dangle": [2, "always-multiline"],
        "no-multi-spaces": 2,
        "no-unexpected-multiline": 0,
        "object-curly-spacing": [2, "never"],
        "space-before-blocks": [2, { "functions": "always", "keywords": "always", "classes": "always" }],
        "space-before-function-paren": [2, { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
        "padding-line-between-statements": [2, { blankLine: "always", prev: "*", next: "return" }],
        // "func-style": [2, "expression"],
        
    },
    // remove broken rules for typescript
    "overrides": [{
        "files": ["*.tsx"],
        "rules": {
            "no-undef": 0, // while https://github.com/typescript-eslint/typescript-eslint/issues/342
        }
    }],
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

