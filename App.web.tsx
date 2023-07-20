import React from "react";
import { useCustomFonts } from "./src/theme";
import AppLoading from "expo-app-loading";
import { RootNavigator } from "./src/navigation/RootNavigator";

export default function App() {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) return <AppLoading />;
  return <RootNavigator />;
}
