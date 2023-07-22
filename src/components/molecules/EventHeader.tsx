import { Text } from "../atoms";
import { Fonts } from "../../theme/fonts";
import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Event } from "../../models";

interface EventHeaderProps {
  event: Event;
  style?: any;
}

const EventHeader: React.FC<EventHeaderProps> = ({ event, style }) => {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.headerTextArea}>
        <Text variant={Fonts.H1}>{event.name}</Text>
        <Text variant={Fonts.S2}>{event.lineup.join(", ")}</Text>
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
    paddingTop: Platform.OS != "web" ? 15 : 0,
  },
  headerTextArea: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "column",
    gap: 10,

    flex: 1,
  },
});

export default EventHeader;
