import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Theme } from "../theme";

import OrganizerProfileNavigator from "./OrganizerProfile.nav";

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="OrganizerProfile"
          component={OrganizerProfileNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
