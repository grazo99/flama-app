import React from "react";
import { View, StyleSheet, ColorValue } from "react-native";
type TagProps = {
  children: React.ReactNode;
  style?: any;
  color?: ColorValue;
};

const Tag: React.FC<TagProps> = ({ color, children, style }) => (
  <View style={[style, { backgroundColor: color }, styles.tag]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  tag: {
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
});

export default Tag;
