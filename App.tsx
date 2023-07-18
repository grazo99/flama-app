import React from "react";
import { PaperProvider } from "react-native-paper";
import { theme, useCustomFonts } from "src/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import OrganizerProfile from "src/screens/OrganizerProfile/OrganizerProfile";

export type RootStackParamList = {
  OrganizerProfile: undefined; // undefined because you aren't passing any params to the home screen
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) return <AppLoading />;
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="OrganizerProfile" component={OrganizerProfile} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
