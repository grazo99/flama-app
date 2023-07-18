import React from "react";
import { ColorValue, StyleSheet } from "react-native";
import { Text as PaperText } from "react-native-paper";
import { colorsConfig } from "@theme/colors";
import { Fonts } from "@theme/fonts";

const styles = StyleSheet.create({
  text: {},
});

export type TextProps = {
  children: React.ReactNode;
  borderColor?: string;
  customStyle?: StyleSheet;
  variant: Fonts;
  color?: ColorValue;
};

export const Text = ({
  children,
  customStyle,
  variant,
  color = colorsConfig.onBackground,
}: TextProps) => {
  return (
    <PaperText
      style={[styles.text, customStyle, { color: color }]}
      variant={variant}
    >
      {children}
    </PaperText>
  );
};
