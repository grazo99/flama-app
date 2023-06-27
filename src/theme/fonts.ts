import { MD3Type } from "react-native-paper/lib/typescript/src/types";
import { useFonts } from "expo-font";

export const [fontLoaded] = useFonts({
  Rubik300: require("../assets/fonts/Rubik-300.ttf"),
  Rubik400: require("../assets/fonts/Rubik-400.ttf"),
  Rubik500: require("../assets/fonts/Rubik-500.ttf"),
  Rubik600: require("../assets/fonts/Rubik-600.ttf"),
  Rubik700: require("../assets/fonts/Rubik-700.ttf"),
});

export const fontsConfig: Record<string, MD3Type> = {
  displaySmall: {
    fontFamily: "Rubik-300",
    fontSize: 36,
    fontWeight: "300",
    letterSpacing: 0,
    lineHeight: 44,
  },

  displayMedium: {
    fontFamily: "Rubik",
    fontSize: 45,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 52,
  },

  displayLarge: {
    fontFamily: "Rubik",
    fontSize: 57,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 64,
  },
  titleSmall: {
    fontFamily: "Rubik",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  titleMedium: {
    fontFamily: "Rubik",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleLarge: {
    fontFamily: "Rubik",
    fontSize: 22,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 28,
  },
  labelSmall: {
    fontFamily: "Rubik",
    fontSize: 11,
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelMedium: {
    fontFamily: "Rubik",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelLarge: {
    fontFamily: "Rubik",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: "Rubik",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0.4,
    lineHeight: 16,
  },
  bodyMedium: {
    fontFamily: "Rubik",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodyLarge: {
    fontFamily: "Rubik",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.15,
    lineHeight: 24,
  },
};
