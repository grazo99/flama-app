import React from "react";
import { PaperProvider } from "react-native-paper";
import { theme, useCustomFonts } from "./src/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventFeed } from "./src/screens/EventFeed";
import { Details } from "./src/screens/Details";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

export type RootStackParamList = {
  EventFeed: undefined; // undefined because you aren't passing any params to the home screen
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) return <AppLoading />;
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="EventFeed" component={EventFeed} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
