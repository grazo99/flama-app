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
import LikeButton from "./LikeButton";
import { Event } from "../../models";
import Tag from "../atoms/Tag";
import { useTheme } from "@react-navigation/native";

type EventCardProps = {
  event: Event;
  style?: any;
  navigation: any;
};

const EventCard = ({ event, navigation, style }: EventCardProps) => {
  const { colors } = useTheme();
  const handleEventPress = () => {
    navigation.navigate("EventDetails", { event });
  };

  const EventInfo = () => (
    <View style={styles.eventInfoContainer}>
      <Text variant={Fonts.H2}>{event.name}</Text>
      <Text variant={Fonts.S3}>{event.lineup.join(", ")}</Text>
      <View style={styles.eventDataContainer}>
        <View style={styles.eventDataItem}>
          <Icon name={Icons.Location} size={IconSize.Small} />
          <Text variant={Fonts.B3}>{event.location}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <TouchableOpacity onPress={handleEventPress}>
      <View style={[styles.cardContainer, style]}>
        <ImageBackground
          source={{ uri: event.cover }}
          imageStyle={styles.imageContainer}
          style={styles.imageContainer}
        >
          <View style={styles.overlay}></View>
          <EventInfo />
        </ImageBackground>
        <LikeButton
          liked={false}
          likeCount={event.likeCount}
          style={styles.likeButtonTag}
        />
        <Tag style={[styles.eventDateTag]} color={colors.background}>
          <Text variant={Fonts.B3}>{event.date}</Text>
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
