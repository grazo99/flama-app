import { loadAsync } from "expo-font";

export const loadFonts = async () => {
  // Remove the useFonts hook from here
  // You should use it inside a functional component instead

  try {
    await Promise.all([
      // Load the fonts using Font.loadAsync directly here
      loadAsync({
        "Rubik-Regular": require("../../assets/fonts/Rubik-Regular.ttf"),
        "Rubik-Medium": require("../../assets/fonts/Rubik-Medium.ttf"),
        "Rubik-SemiBold": require("../../assets/fonts/Rubik-SemiBold.ttf"),
        "ChivoMono-Light": require("../../assets/fonts/ChivoMono-Light.ttf"),
        "ChivoMono-Regular": require("../../assets/fonts/ChivoMono-Regular.ttf"),
        "ChivoMono-Medium": require("../../assets/fonts/ChivoMono-Medium.ttf"),
        "Lato-Light": require("../../assets/fonts/Lato-Light.ttf"),
        "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf"),
        "Lato-Bold": require("../../assets/fonts/Lato-Bold.ttf"),
        "Lato-Black": require("../../assets/fonts/Lato-Black.ttf"),
      }),
    ]);

    return true; // Return true if fonts loaded successfully
  } catch (error) {
    console.error("Error loading fonts:", error);
    return false; // Return false if there was an error loading fonts
  }
};

enum FontFamily {
  HeadingRegular = "Rubik-Regular",
  HeadingMedium = "Rubik-Medium",
  HeadingSemiBold = "Rubik-SemiBold",
  SubtitleLight = "ChivoMono-Light",
  SubtitleRegular = "ChivoMono-Regular",
  SubtitleMedium = "ChivoMono-Medium",
  BodyLight = "Lato-Light",
  BodyRegular = "Lato-Regular",
  BodyBold = "Lato-Bold",
  BodyBlack = "Lato-Black",
}

export type FontType = {
  fontFamily: FontFamily;
  fontSize: number;
  fontWeight: string;
  letterSpacing: number;
  lineHeight: number;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
};

export const fontsConfig: Record<string, FontType> = {
  H1: {
    fontFamily: FontFamily.HeadingSemiBold,
    fontSize: 32,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 36,
  },
  H2: {
    fontFamily: FontFamily.HeadingSemiBold,
    fontSize: 24,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 30,
  },

  S1: {
    fontFamily: FontFamily.BodyRegular,
    fontSize: 18,
    fontWeight: "normal",
    letterSpacing: 1,
    lineHeight: 22,
  },
  S2: {
    fontFamily: FontFamily.BodyRegular,
    fontSize: 16,
    fontWeight: "normal",
    letterSpacing: 1,
    lineHeight: 20,
  },

  S3: {
    fontFamily: FontFamily.BodyRegular,
    fontSize: 14,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 18,
  },
  B1: {
    fontFamily: FontFamily.BodyRegular,
    fontSize: 16,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 24,
  },

  B2: {
    fontFamily: FontFamily.BodyRegular,
    fontSize: 14,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 20,
  },
  B3: {
    fontFamily: FontFamily.BodyRegular,
    fontSize: 12,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 16,
  },
  O3: {
    fontFamily: FontFamily.HeadingRegular,
    fontSize: 10,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 14,
    textTransform: "uppercase",
  },
  HeaderTitle: {
    fontFamily: FontFamily.BodyBlack,
    fontSize: 14,
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 20,
  },
};

export enum Fonts {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",

  S1 = "S1",
  S2 = "S2",
  S3 = "S3",

  B1 = "B1",
  B2 = "B2",
  B3 = "B3",

  O1 = "O1",
  O2 = "O2",
  O3 = "O3",

  HeaderTitle = "HeaderTitle",
}
