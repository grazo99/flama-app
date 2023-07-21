import { Avatar } from "../components/atoms/Avatar";
import { Text } from "../components/atoms";
import { Fonts } from "../theme/fonts";
import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Avatar
            size={150}
            image={{
              uri: "https://yt3.googleusercontent.com/ytc/AGIKgqMMlR9_5ZiI_J5NjAu7w3Tg9b76OsqXTMrYi2_X7A=s900-c-k-c0x00ffffff-no-rj",
            }}
          />
          <Text variant={Fonts.H2}>Key Poducciones</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

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

export default Home;
