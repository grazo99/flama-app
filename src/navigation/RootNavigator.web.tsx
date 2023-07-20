import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Theme } from "../theme";
import { Home, OrganizerProfile } from "../screens";

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name={"OrganizskjskskerProfile"}
          component={OrganizerProfile}
        />
        <Tab.Screen name={"Home"} component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
