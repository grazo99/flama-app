import {
  MD3DarkTheme as DefaultTheme,
  configureFonts,
} from "react-native-paper";
import { fontsConfig } from "./fonts";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FE7032",
    secondary: "yellow",
  },
  fonts: configureFonts({ config: fontsConfig }),
};
