import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Icon, Text } from "../atoms";
import { Fonts } from "../../theme";
import { IconSize, Icons } from "../atoms/Icon";
import LikeButton from "../atoms/LikeButton";
import { Event } from "../../models";
import Tag from "../atoms/Tag";
import { useTheme } from "@react-navigation/native";

type EventCardProps = {
  event: Event;
  style?: any;
  navigation: any;
  onPress?: () => void;
};

const EventCard = ({ event, style, onPress }: EventCardProps) => {
  const { colors } = useTheme();

  const EventInfo = () => (
    <View style={styles.eventInfoContainer}>
      <Text variant={Fonts.H2}>{event.name}</Text>
      <Text variant={Fonts.S2}>{event.lineup.join(", ")}</Text>
      <View style={styles.eventDataContainer}>
        <View style={styles.eventDataItem}>
          <Icon name={Icons.Location} size={IconSize.Small} />
          <Text variant={Fonts.B3}>{event.location}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.cardContainer, style]}>
        <ImageBackground
          source={{ uri: event.cover }}
          imageStyle={styles.imageContainer}
          style={styles.imageContainer}
        >
          <View style={styles.overlay}></View>
          <EventInfo />
        </ImageBackground>
        <Tag color={colors.background} style={styles.likeButtonTag}>
          <LikeButton
            liked={false}
            likeCount={event.likeCount}
            size={IconSize.Medium}
            row={true}
          />
        </Tag>
        <Tag style={[styles.eventDateTag]} color={colors.background}>
          <Text variant={Fonts.B3} color={colors.primary}>
            {event.date}
          </Text>
        </Tag>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 400,
    borderRadius: 5,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    resizeMode: "cover",
    padding: 15,
    borderRadius: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.55)", // Adjust the opacity value (0.5 in this case) to control the darkness
    borderRadius: 5,
  },
  eventInfoContainer: {
    flexDirection: "column",
    gap: 5,
  },
  eventDataItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  eventDateTag: {
    position: "absolute",
    top: 15,
    left: 15,
    width: "auto",
  },
  eventDataContainer: {
    gap: 5,
    marginTop: 15,
    opacity: 0.8,
  },
  likeButtonTag: {
    position: "absolute",
    top: 15,
    right: 15,
    width: "auto",
  },
});

export default EventCard;
