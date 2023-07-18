import { MD3Type } from "react-native-paper/lib/typescript/src/types";

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

export const fontsConfig: Record<string, MD3Type> = {
  displaySmall: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(3), // Adjust the scaling factor (3) based on your preference
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: RFValue(4), // Adjust the scaling factor (4) based on your preference
  },
  displayMedium: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(3.75), // Adjust the scaling factor (3.75) based on your preference
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: RFValue(4.33), // Adjust the scaling factor (4.33) based on your preference
  },
  displayLarge: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(4.75), // Adjust the scaling factor (4.75) based on your preference
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: RFValue(5.33), // Adjust the scaling factor (5.33) based on your preference
  },
  titleSmall: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(1.17), // Adjust the scaling factor (1.17) based on your preference
    fontWeight: "normal",
    letterSpacing: RFValue(0.03), // Adjust the scaling factor (0.03) based on your preference
    lineHeight: RFValue(1.67), // Adjust the scaling factor (1.67) based on your preference
  },
  titleMedium: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(1.33), // Adjust the scaling factor (1.33) based on your preference
    fontWeight: "normal",
    letterSpacing: RFValue(0.04), // Adjust the scaling factor (0.04) based on your preference
    lineHeight: RFValue(2), // Adjust the scaling factor (2) based on your preference
  },
  titleLarge: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(1.85), // Adjust the scaling factor (1.85) based on your preference
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: RFValue(2.33), // Adjust the scaling factor (2.33) based on your preference
  },
  labelSmall: {
    fontFamily: "SourceCodePro-400",
    fontSize: RFValue(0.92), // Adjust the scaling factor (0.92) based on your preference
    fontWeight: "normal",
    letterSpacing: RFValue(0.025), // Adjust the scaling factor (0.025) based on your preference
    lineHeight: RFValue(1.33), // Adjust the scaling factor (1.33) based on your preference
  },
  labelMedium: {
    fontFamily: "SourceCodePro-400",
    fontSize: RFValue(1), // Adjust the scaling factor (1) based on your preference
    fontWeight: "normal",
    letterSpacing: RFValue(0.025), // Adjust the scaling factor (0.025) based on your preference
    lineHeight: RFValue(1.33), // Adjust the scaling factor (1.33) based on your preference
  },
  labelLarge: {
    fontFamily: "SourceCodePro-400",
    fontSize: RFValue(1.17), // Adjust the scaling factor (1.17) based on your preference
    fontWeight: "normal",
    letterSpacing: RFValue(0.03), // Adjust the scaling factor (0.03) based on your preference
    lineHeight: RFValue(1.67), // Adjust the scaling factor (1.67) based on your preference
  },
  bodySmall: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(1), // Adjust the scaling factor (1) based on your preference
    fontWeight: "normal",
    letterSpacing: RFValue(0.033), // Adjust the scaling factor (0.033) based on your preference
    lineHeight: RFValue(1.33), // Adjust the scaling factor (1.33) based on your preference
  },
  bodyMedium: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(1.17), // Adjust the scaling factor (1.17) based on your preference
    fontWeight: "normal",
    letterSpacing: RFValue(0.021), // Adjust the scaling factor (0.021) based on your preference
    lineHeight: RFValue(1.67), // Adjust the scaling factor (1.67) based on your preference
  },
  bodyLarge: {
    fontFamily: "Rubik-400",
    fontSize: RFValue(1.33), // Adjust the scaling factor (1.33) based on your preference
    fontWeight: "normal",
    letterSpacing: RFValue(0.015), // Adjust the scaling factor (0.015) based on your preference
    lineHeight: RFValue(2), // Adjust the scaling factor (2) based on your preference
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
