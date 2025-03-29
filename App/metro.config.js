const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Agregar alias para evitar importar react-native-maps en la web
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  "react-native-maps": require.resolve("./web-maps-placeholder.js"),
};

module.exports = config;
