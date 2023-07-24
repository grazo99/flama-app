// LocalizationContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import * as Localization from "expo-localization";
import en from "./en.json";
import es from "./es.json";
import { LocalizedStrings } from "./LocalizedStrings";

const LocalizationContext = createContext<{
  selectedLanguage: string;
  localizedStrings: LocalizedStrings;
  setSelectedLanguage: (language: string) => void;
}>({
  selectedLanguage: "es",
  localizedStrings: es,
  setSelectedLanguage: (language: string) => {
    return;
  },
});

export const useLocalization = () => useContext(LocalizationContext);

const LocalizationProvider = ({ children }: any) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    Localization.locale.split("-")[0]
  );

  const localizedStrings = selectedLanguage === "es" ? es : en;

  useEffect(() => {
    // Save the selected language in state/storage
    // You can use AsyncStorage or any other storage mechanism here
    // For simplicity, we'll just use state to manage the selected language
  }, [selectedLanguage]);

  return (
    <LocalizationContext.Provider
      value={{ selectedLanguage, localizedStrings, setSelectedLanguage }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export default LocalizationProvider;
