import { Event } from "../../models";
import { routes } from "../../navigation/routes";

export const useOrganizerProfile = ({ navigation, organizer }: any) => {
  const handleEventPress = (event: Event) => () => {
    navigation.navigate(routes.EventDetails, {
      event,
      organizer: organizer,
    });
  };

  return { handleEventPress };
};
