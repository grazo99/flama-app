import React from "react";
import { ColorValue, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { CustomTypography } from "src/theme/fonts";

const styles = StyleSheet.create({
  text: {},
});

export type TextProps = {
  children: React.ReactNode;
  borderColor: string;
  customStyle?: StyleSheet;
  textVariant: CustomTypography;
  color: ColorValue;
};

export const StyledText = ({
  children,
  customStyle,
  textVariant,
  color,
}: TextProps) => {
  return (
    <Text
      style={[styles.text, customStyle, { color: color }]}
      variant={textVariant}
    >
      {children}
    </Text>
  );
};
