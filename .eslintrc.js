let path = require("path");


const appRoot = path.join(__dirname);

module.exports = {
    "parser": "babel-eslint",
    "plugins": ["jest"],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:jest/recommended"
    ],
    "settings": {
        "import/resolver": {
            "webpack": { "config": path.join(appRoot, "./webpack/client.prod.config.js") }
        }
    },
    "env": {
        "jest": true,
        "es6": true,
        "node": true,
        "browser": true
    },
    "rules": {
        "no-console": 0,
        "semi": [2, "always"],
        "quotes": [2, "double", { "avoidEscape": true }],
        "camelcase": 1,
        "indent": [2, 4, { "SwitchCase": 1 }],
        "spaced-comment": [2, "always"],
        // "sort-imports": "error",
        "arrow-spacing": [2, { "before": true, "after": false }],
        "comma-dangle": [2, "always-multiline"],
        "no-multi-spaces": 2,
        "object-curly-spacing": [2, "always"],
        "space-before-blocks": [2, "never"],
        "space-before-function-paren": [2, "never"],
        
        "import/newline-after-import": [2, { "count": 2 }],
        // "import/order": ["error", {"newlines-between": "always-and-inside-groups"}],
        // "import/no-unresolved": 0,
        
        "jest/valid-expect": 0
    },
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    }
};
