import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type EventFeedScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Details">;
};
export const EventFeed = ({ navigation }: EventFeedScreenProps) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Details")}
        buttonColor={colors.background}
      >
        <Text>Details</Text>
      </Button>
    </View>
  );
};
