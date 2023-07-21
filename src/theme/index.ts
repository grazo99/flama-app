import { colors } from "./colors";
import { DefaultTheme } from "@react-navigation/native";
import { loadFonts, Fonts } from "./fonts";

const Theme = {
  ...DefaultTheme,
  colors,
};

export { Theme, loadFonts, Fonts, colors };
