import React, { useEffect, useState } from "react";
import { loadFonts } from "./src/theme";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadCustomFonts = async () => {
      const fontsLoadedSuccessfully = await loadFonts();
      setFontsLoaded(fontsLoadedSuccessfully);
    };

    loadCustomFonts();
  }, []);

  if (!fontsLoaded) {
    // Show a loading screen or fallback while fonts are loading
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <RootNavigator />
    </>
  );
}
