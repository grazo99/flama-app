import React from "react";
import {
  ColorValue,
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";
import { IconProps as MUXIconProps } from "react-native-vector-icons/Icon";
import { default as MUXIcon } from "react-native-vector-icons/MaterialCommunityIcons";

type IconProps = TouchableHighlightProps &
  MUXIconProps & {
    color: ColorValue;
  };

export const Icon = ({
  size,
  color,
  name,
  onPress,
  style,
  disabled,
}: IconProps) => {
  const styles = StyleSheet.create({
    icon: {
      color: color,
    },
  });
  return (
    <TouchableHighlight onPress={onPress} disabled={disabled}>
      <MUXIcon style={[styles.icon, style]} size={size} name={name} />
    </TouchableHighlight>
  );
};

export const Icons = {
  CALENDAR: "calendar",
  LOCATION_PIN: "LocationOn",
  MUSIC_NOTE: "musicNote",
};
