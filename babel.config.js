module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [
		"react-native-reanimated/plugin",
		[
			"module-resolver",
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
			  alias: {
				"@components": "./src/components",
				"@constants" : "./src/constants",
				"@navigation/drawer" : "./src/navigation/drawer",
				"@navigation/stacks" : "./src/navigation/stacks",
			  },
			},
		],
		['module:react-native-dotenv',
		{
			"envName": "APP_ENV",
			"moduleName": "@env",
			"path": ".env",
			"blocklist": null,
			"allowlist": null,
			"safe": false,
			"allowUndefined": true,
			"verbose": false
		  }
		],
	],
	env: {
		production: {
		  plugins: ['transform-remove-console', 'react-native-paper/babel'], //removing consoles.log from app during release (production) versions
		},
	  },
};
