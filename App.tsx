import React from "react";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { theme, useCustomFonts } from "./src/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventFeed } from "./src/screens/EventFeed";
import { Details } from "./src/screens/Details";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
