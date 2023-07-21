import React from "react";
import {
  ColorValue,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

export type AvatarProps = {
  size: number;
  borderColor?: ColorValue;
  borderWidth?: number;
  image: ImageSourcePropType;
};

export const Avatar = ({
  size,
  image,
  borderColor,
  borderWidth = 0,
}: AvatarProps) => {
  const styles = StyleSheet.create({
    avatar: {
      borderColor: borderColor,
      borderWidth: borderWidth,
      borderRadius: 100,
      width: size,
      height: size,
    },
  });
  return <Image style={styles.avatar} source={image} />;
};
