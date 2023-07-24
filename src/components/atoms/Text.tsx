import React from "react";
import { ColorValue, StyleSheet } from "react-native";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import { colors } from "../../theme/colors";
import { FontType, Fonts, fontsConfig } from "../../theme/fonts";

const styles = StyleSheet.create({
  text: {},
});

export type TextProps = NativeTextProps & {
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
  numberOfLines,
}: TextProps) => {
  const fontStyle = getFontStyle(variant);
  return (
    <NativeText
      style={[styles.text, style, { color: color }, fontStyle]}
      numberOfLines={numberOfLines}
    >
      {children}
    </NativeText>
  );
};
