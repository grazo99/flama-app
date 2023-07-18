import { Avatar } from "../../components/atoms/Avatar";
import { Text } from "../../components/atoms";
import { Fonts } from "../../theme/fonts";
import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const OrganizerProfile = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 50,
    },
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      maxWidth: 700,
      width: "100%",
      alignSelf: "center",
    },
    headerContainer: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      justifyContent: "flex-start",
    },
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Avatar
            size={150}
            image={{
              uri: "https://instagram.fmvd2-1.fna.fbcdn.net/v/t51.2885-19/313294798_8595566277150219_2052857571071836908_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fmvd2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=AmEN7WE7RLkAX_fSBmA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAN790v2AtNf0-C8cJIY95ljX32Lu-gOY4Jr_bSLF4ulg&oe=64BA40D3&_nc_sid=8b3546",
            }}
          />
          <Text variant={Fonts.titleLarge}>Key Producciones</Text>
        </View>
      </View>
    </View>
  );
};

export default OrganizerProfile;
