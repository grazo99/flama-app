import { useEffect } from "react";
import { useLocalization } from "../../locales/LocalizationContext";
import { View } from "react-native";
import { Text } from "../../components/atoms";
import { Fonts } from "../../theme";

export const useEventDetails = ({ navigation, route }: any) => {
  const { event, organizer } = route.params;
  const { localizedStrings } = useLocalization();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ alignItems: "center" }}>
          <Text variant={Fonts.O3}>{organizer.name}</Text>
          <Text variant={Fonts.B2}>{localizedStrings.events}</Text>
        </View>
      ),
    });
  }, []);

  return { event };
};
