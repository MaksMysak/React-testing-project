module.exports = {
    "extends": [
        "airbnb"
      ],
      "plugins": [
        "flowtype"
      ],
      "rules": {
        "arrow-parens": [ "error", "as-needed"],
        "indent": [2, 4],
        "import/no-named-as-default": 0,
        "import/nrthtyujhuyj8iuihutgyu-named-as-default-member": 0,
        "react/jsx-indent": [2,4],
        "react/jsx-indent-props": [2,4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "max-len": ["error", 150, {"ignoreRegExpLiterals": true}],
        "react/no-array-index-key": 0,
        "react/forbid-prop-types": 0,
        "react/require-default-props": 0,
        "no-return-assign": 0,
        "jsx-a11y/label-has-for": ["error", {"required": {"some": [ "nesting", "id" ]}}],
        "jsx-a11y/anchor-is-valid": [ "error", {
          "components": [ "Link" ],
          "specialLink": [ "to" ]
        }],
        "prefer-destructuring": 0,
        "flowtype/define-flow-type": 1,
        "flowtype/use-flow-type": 1
      },
      "parser": "babel-eslint",
      "globals": {
        "it": true,
        "expect": true,
        "describe": true,
        "document": true,
        "window": true,
        "localStorage": true,
        "fetch": true,
        "beforeEach": true,
        "navigator": true
      }
};
