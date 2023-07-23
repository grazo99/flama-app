import { TouchableOpacity, Image, View, Dimensions } from "react-native";
import Video from "react-native-video";
import { MediaItem, MediaType } from "../types";

export const useMediaGrid = (styles: any, columns: number) => {
  const windowWidth = Dimensions.get("window").width;
  const gridPadding =
    styles.gridContainer.padding * 2 - styles.gridItem.margin * 2;
  const itemWidth = (windowWidth - gridPadding * (columns - 1)) / columns;

  const renderItem = ({ item }: { item: MediaItem }) => {
    const { type, source, aspectRatio } = item;
    const itemHeight = itemWidth / aspectRatio;
    const itemStyle = { width: itemWidth, height: itemHeight };

    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View style={[styles.gridItem, itemStyle]}>
          {type === MediaType.Image ? (
            <Image
              source={{ uri: source }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <Video
              source={{ uri: source }}
              style={styles.video}
              resizeMode="cover"
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const handleItemPress = (item: MediaItem) => {
    // Handle item click, e.g., navigate to a detail view
    console.log(item.id);
  };
  return { renderItem };
};
