module.exports = {
	    "env": {
        "browser": true,
		"es6": true,
		"commonjs": true,
		"es6": true,
		"mocha": true,
		"node": false
    },
    "extends": ["eslint:recommended","plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["warn","tab"],
        "linebreak-style": ["warn","unix"],
        "quotes": ["error","single"],
		"semi": ["error","always"],
		"no-const-assign": "warn",
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "constructor-super": "warn",
        "valid-typeof": "warn",
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/react-in-jsx-scope": 2
    }
};