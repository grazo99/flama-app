import { colors } from "./colors";
import { DefaultTheme } from "@react-navigation/native";
import { useCustomFonts } from "./fonts";

const Theme = {
  ...DefaultTheme,
  colors,
};

export { Theme, useCustomFonts };
