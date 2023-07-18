import React from "react";
import { ColorValue, StyleSheet } from "react-native";
import { Avatar as PaperAvatar } from "react-native-paper";
import { AvatarImageSource } from "react-native-paper/lib/typescript/src/components/Avatar/AvatarImage";

export type AvatarProps = {
  size: number;
  image: AvatarImageSource;
  borderColor?: ColorValue;
  borderWidth?: number;
};

export const Avatar = ({
  size,
  image,
  borderColor,
  borderWidth,
}: AvatarProps) => {
  const styles = StyleSheet.create({
    avatar: {
      borderColor: borderColor,
      borderWidth: borderWidth,
      borderRadius: 100,
    },
  });
  return <PaperAvatar.Image style={styles.avatar} size={size} source={image} />;
};
