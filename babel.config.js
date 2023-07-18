module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-react", "babel-preset-expo"];
  const plugins = [
    "@babel/plugin-syntax-jsx",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@theme": "./src/theme",
        },
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
