import {
  MD3DarkTheme as DefaultTheme,
  configureFonts,
} from "react-native-paper";
import { fontsConfig } from "./fonts";
import { colorsConfig } from "./colors";
import { useCustomFonts } from "./fonts";

const theme = {
  ...DefaultTheme,
  colors: colorsConfig,
  fonts: configureFonts({ config: fontsConfig }),
};

export { theme, useCustomFonts };
