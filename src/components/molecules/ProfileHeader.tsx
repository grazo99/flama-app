import { Avatar } from "../../components/atoms/Avatar";
import { Text } from "../atoms";
import { Fonts } from "../../theme/fonts";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Organizer } from "../../models";

interface ProfileHeaderProps {
  profile: Organizer;
  style?: any;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, style }) => {
  return (
    <View style={[styles.header, style]}>
      <Avatar
        size={100}
        image={{
          uri: profile.profilePic,
        }}
      />
      <View style={styles.headerTextArea}>
        <Text variant={Fonts.H2}>{profile.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    gap: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
    marginTop: 30,
  },
  headerTextArea: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});

export default ProfileHeader;
