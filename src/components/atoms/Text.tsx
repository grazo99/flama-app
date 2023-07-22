import React from "react";
import { ColorValue, StyleSheet } from "react-native";
import { Text as NativeText } from "react-native";
import { colors } from "../../theme/colors";
import { FontType, Fonts, fontsConfig } from "../../theme/fonts";

const styles = StyleSheet.create({
  text: {},
});

export type TextProps = {
  children: React.ReactNode;
  borderColor?: string;
  style?: any;
  variant: Fonts;
  color?: ColorValue;
};

const getFontStyle = (fontVariant: Fonts): FontType => fontsConfig[fontVariant];

export const Text = ({
  children,
  style,
  variant,
  color = colors.text,
}: TextProps) => {
  const fontStyle = getFontStyle(variant);
  return (
    <NativeText style={[styles.text, style, { color: color }, fontStyle]}>
      {children}
    </NativeText>
  );
};
