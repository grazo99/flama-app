import * as React from "react";

import { EventDetails, OrganizerProfile } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const OrganizerProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrganizerProfile"
        component={OrganizerProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EventDetails" component={EventDetails} />
    </Stack.Navigator>
  );
};
export default OrganizerProfileNavigator;
