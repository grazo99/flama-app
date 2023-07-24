import React from "react";
import SafeAreaLayout from "../components/templates/SafeAreaLayout"; // Replace "path/to/SafeAreaLayout" with the actual import path for your SafeAreaLayout component

import OrganizerProfile from "./OrganizerProfile";
import EventDetails from "./EventDetails";
import { ScreenProps } from "./types";
import { View } from "react-native";

// Wrap the OrganizerProfile component with SafeAreaLayout
const OrganizerProfileWithSafeArea: React.FC<ScreenProps> = (props) => {
  return (
    <SafeAreaLayout>
      <OrganizerProfile {...props} />
    </SafeAreaLayout>
  );
};

// Wrap the EventDetails component with SafeAreaLayout
const EventDetailsWithSafeArea: React.FC<ScreenProps> = (props) => {
  return (
    <View style={{ padding: 5, flex: 1 }}>
      <EventDetails {...props} />
    </View>
  );
};

export {
  OrganizerProfileWithSafeArea as OrganizerProfile,
  EventDetailsWithSafeArea as EventDetails,
};
