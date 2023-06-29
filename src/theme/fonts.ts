import { MD3Type } from "react-native-paper/lib/typescript/src/types";
import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-300": require("../../assets/fonts/Rubik-300.ttf"),
    "Rubik-400": require("../../assets/fonts/Rubik-400.ttf"),
    "Rubik-500": require("../../assets/fonts/Rubik-500.ttf"),
    "Rubik-600": require("../../assets/fonts/Rubik-600.ttf"),
    "Rubik-700": require("../../assets/fonts/Rubik-700.ttf"),
    "SourceCodePro-400": require("../../assets/fonts/SourceCodePro-400.ttf"),
  });

  return fontsLoaded;
};
export const fontsConfig: Record<string, MD3Type> = {
  displaySmall: {
    fontFamily: "Rubik-400",
    fontSize: 36,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 44,
  },

  displayMedium: {
    fontFamily: "Rubik-400",
    fontSize: 45,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 52,
  },

  displayLarge: {
    fontFamily: "Rubik-400",
    fontSize: 57,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 64,
  },
  titleSmall: {
    fontFamily: "Rubik-400",
    fontSize: 14,
    fontWeight: "normal",
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  titleMedium: {
    fontFamily: "Rubik-400",
    fontSize: 16,
    fontWeight: "normal",
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleLarge: {
    fontFamily: "Rubik-400",
    fontSize: 22,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 28,
  },
  labelSmall: {
    fontFamily: "SourceCodePro-400",
    fontSize: 11,
    fontWeight: "normal",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelMedium: {
    fontFamily: "SourceCodePro-400",
    fontSize: 12,
    fontWeight: "normal",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelLarge: {
    fontFamily: "SourceCodePro-400",
    fontSize: 14,
    fontWeight: "normal",
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: "Rubik-400",
    fontSize: 12,
    fontWeight: "normal",
    letterSpacing: 0.4,
    lineHeight: 16,
  },
  bodyMedium: {
    fontFamily: "Rubik-400",
    fontSize: 14,
    fontWeight: "normal",
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodyLarge: {
    fontFamily: "Rubik-400",
    fontSize: 16,
    fontWeight: "normal",
    letterSpacing: 0.15,
    lineHeight: 24,
  },
};
