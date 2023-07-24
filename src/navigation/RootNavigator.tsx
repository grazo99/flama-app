import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Theme } from "../theme";
import OrganizerProfileNavigator from "./OrganizerProfile.nav";
import { routes } from "./routes";
import LocalizationProvider from "../locales/LocalizationContext";
import SafeAreaLayout from "../components/templates/SafeAreaLayout";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <LocalizationProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={Theme}>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
              name={routes.OrganizerProfileTab}
              component={OrganizerProfileNavigator}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </LocalizationProvider>
  );
};
