import { useFonts } from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

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

export type FontType = {
  fontFamily: string;
  fontSize: number;
  fontWeight: string;
  letterSpacing: number;
  lineHeight: number;
};

export const fontsConfig: Record<string, FontType> = {
  displaySmall: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(36),
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: RFValue(44),
  },
  displayMedium: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(45),
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: RFValue(52),
  },
  displayLarge: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(57),
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: RFValue(64),
  },
  titleSmall: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(14),
    fontWeight: "normal",
    letterSpacing: 0.1,
    lineHeight: RFValue(20),
  },
  titleMedium: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(16),
    fontWeight: "normal",
    letterSpacing: 0.15,
    lineHeight: RFValue(24),
  },
  titleLarge: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(22),
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: RFValue(28),
  },
  labelSmall: {
    fontFamily: "SourceCodePro-400",
    fontSize: RFValue(11),
    fontWeight: "normal",
    letterSpacing: 0.5,
    lineHeight: RFValue(16),
  },
  labelMedium: {
    fontFamily: "SourceCodePro-400",
    fontSize: RFValue(12),
    fontWeight: "normal",
    letterSpacing: 0.5,
    lineHeight: RFValue(16),
  },
  labelLarge: {
    fontFamily: "SourceCodePro-400",
    fontSize: RFValue(14),
    fontWeight: "normal",
    letterSpacing: 0.1,
    lineHeight: RFValue(20),
  },
  bodySmall: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(12),
    fontWeight: "normal",
    letterSpacing: 0.4,
    lineHeight: RFValue(16),
  },
  bodyMedium: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(14),
    fontWeight: "normal",
    letterSpacing: 0.25,
    lineHeight: RFValue(20),
  },
  bodyLarge: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(16),
    fontWeight: "normal",
    letterSpacing: 0.15,
    lineHeight: RFValue(24),
  },
};

export enum Fonts {
  displayLarge = "displayLarge",
  displayMedium = "displayMedium",
  displaySmall = "displaySmall",

  headlineLarge = "headlineLarge",
  headlineMedium = "headlineMedium",
  headlineSmall = "headlineSmall",

  titleLarge = "titleLarge",
  titleMedium = "titleMedium",
  titleSmall = "titleSmall",

  labelLarge = "labelLarge",
  labelMedium = "labelMedium",
  labelSmall = "labelSmall",

  bodyLarge = "bodyLarge",
  bodyMedium = "bodyMedium",
  bodySmall = "bodySmall",
}
