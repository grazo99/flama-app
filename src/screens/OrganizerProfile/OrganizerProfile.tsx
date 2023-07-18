import { Text } from "@components/atoms/Text/Text";
import { Fonts } from "@theme/fonts";
import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const OrganizerProfile = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: colors.background,
      padding: 50,
    },
  });

  return (
    <View style={styles.container}>
      <Text variant={Fonts.titleLarge}>Organizer Profile</Text>
    </View>
  );
};

export default OrganizerProfile;
