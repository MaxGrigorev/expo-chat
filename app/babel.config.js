module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@i18n": "./src/i18n",
            "@redux": "./src/redux",
            "@ducks": "./src/redux/ducks",
            "@reduxForms": "./src/redux/forms",
            "@selectors": "./src/redux/selectors",
            "@services": "./src/services",
            "@constants": "./src/constants",
            "@utils": "./src/utils",
            "@hooks": "./src/hooks",
            "@contexts": "./src/contexts",
            "@navigation": "./src/navigation",
            "@configs": "./src/configs",
            "@atoms": "./src/components/atoms",
            "@molecules": "./src/components/molecules",
            "@organisms": "./src/components/organisms",
            "@templates": "./src/components/templates",
            "@screens": "./src/components/screens",
            "@assets": "./assets",
            "@types": "./src/types",
          },
          extensions: [".js", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
