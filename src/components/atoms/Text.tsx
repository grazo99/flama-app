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
  customStyle?: StyleSheet;
  variant: Fonts;
  color?: ColorValue;
};

const getFontStyle = (fontVariant: Fonts): FontType => fontsConfig[fontVariant];

export const Text = ({
  children,
  customStyle,
  variant,
  color = colors.textBody,
}: TextProps) => {
  const fontStyle = getFontStyle(variant);
  return (
    <NativeText style={[styles.text, customStyle, { color: color }, fontStyle]}>
      {children}
    </NativeText>
  );
};
