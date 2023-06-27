import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import PropTypes from "prop-types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type DetailsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Details">;
};

export const Details = ({ navigation }: DetailsScreenProps) => {
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
Details.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
