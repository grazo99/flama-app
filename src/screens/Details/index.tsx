import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useTheme } from "react-native-paper";

export const Details = ({ navigation }: any) => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text variant="displayLarge">Details</Text>
      <Button
        onPress={() => navigation.navigate("EventFeed")}
        buttonColor={colors.primary}
        textColor={colors.secondary}
      >
        <Text variant="labelLarge"> Go to Event Feed</Text>
      </Button>
    </View>
  );
};
