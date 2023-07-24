import * as React from "react";
import { Text } from "../components/atoms";
import { EventDetails, OrganizerProfile } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
import { Fonts } from "../theme";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";
import { routes } from "./routes";

const Stack = createStackNavigator();

const OrganizerProfileNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,

        headerTintColor: colors.text,
        headerBackground: () => (
          <LinearGradient
            colors={["#000000", "transparent"]}
            style={{ flex: 1 }}
            start={Platform.OS != "web" ? [0.5, 0.4] : [0, 0]}
          />
        ),
        headerTitle: () => <Text variant={Fonts.H1}>Organizer</Text>,
      }}
    >
      <Stack.Screen
        name={routes.OrganizerProfile}
        component={OrganizerProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen name={routes.EventDetails} component={EventDetails} />
    </Stack.Navigator>
  );
};
export default OrganizerProfileNavigator;
