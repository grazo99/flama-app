import { Avatar } from "../components/atoms/Avatar";
import { Text } from "../components/atoms";
import { Fonts } from "../theme/fonts";
import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { colors } from "../theme/colors";

const OrganizerProfile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar
            size={100}
            image={{
              uri: mock.profile_pic,
            }}
          />
          <View style={styles.headerTextArea}>
            <Text variant={Fonts.titleLarge}>{mock.name}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    gap: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerTextArea: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});

const mock = {
  name: "Key Producciones",
  profile_pic:
    "https://yt3.googleusercontent.com/ytc/AGIKgqMMlR9_5ZiI_J5NjAu7w3Tg9b76OsqXTMrYi2_X7A=s900-c-k-c0x00ffffff-no-rj",
};

export default OrganizerProfile;
