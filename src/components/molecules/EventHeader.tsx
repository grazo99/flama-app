import { Text } from "../atoms";
import { Fonts } from "../../theme/fonts";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Event } from "../../models";
import { Icon, IconSize, Icons } from "../atoms/Icon";
import { useTheme } from "@react-navigation/native";
import LikeButton from "../atoms/LikeButton";

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

      <View style={styles.headerFooter}>
        <View style={styles.eventDataContainer}>
          <View style={styles.eventDataItem}>
            <Icon
              name={Icons.Calendar}
              size={IconSize.Small}
              color={colors.text}
            />
            <Text variant={Fonts.B2}>{event.date}</Text>
          </View>
          <View style={styles.eventDataItem}>
            <Icon
              name={Icons.Location}
              size={IconSize.Small}
              color={colors.text}
            />
            <Text variant={Fonts.B2}>{event.location}</Text>
          </View>
        </View>
        <LikeButton liked size={IconSize.Large} likeCount={event.likeCount} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    gap: 10,
    padding: 15,
    paddingTop: 0,
    width: "100%",
  },
  headerFooter: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 0,
    justifyContent: "space-between",

    width: "100%",
  },
  eventDataItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  eventDataContainer: {
    alignItems: "flex-start",
    gap: 3,
  },
});

export default EventHeader;
