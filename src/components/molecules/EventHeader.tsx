import { Text } from "../atoms";
import { Fonts } from "../../theme/fonts";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Event } from "../../models";
import { Icon, IconSize, Icons } from "../atoms/Icon";
import { useTheme } from "@react-navigation/native";

interface EventHeaderProps {
  event: Event;
  style?: any;
}

const EventHeader: React.FC<EventHeaderProps> = ({ event, style }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.header, style]}>
      <Text variant={Fonts.H1} numberOfLines={2}>
        {event.name}
      </Text>
      <Text variant={Fonts.S1} numberOfLines={4}>
        {event.lineup.join(", ")}
      </Text>

      <View style={styles.eventDataContainer}>
        <View style={styles.eventDataItem}>
          <Icon
            name={Icons.Location}
            size={IconSize.Small}
            color={colors.text}
          />
          <Text variant={Fonts.B2}>{event.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    gap: 10,
    padding: 15,
    height: 180,
    borderColor: "red",
    borderWidth: 1,
    width: "100%",
  },
  eventDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  eventDataItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default EventHeader;
