import { colors } from "./colors";
import { DarkTheme } from "@react-navigation/native";
import { loadFonts, Fonts } from "./fonts";

const Theme = {
  ...DarkTheme,
  colors,
};

export { Theme, loadFonts, Fonts, colors };
