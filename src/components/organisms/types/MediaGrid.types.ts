import { FlexStyle, ImageStyle, ViewStyle } from "react-native";

type MediaGridProps = {
  items: MediaItem[];
  columns: number;
  styles: MediGridStyle;
  headerRenderer?: () => JSX.Element;
};

type MediaItem = {
  id: number;
  source: string;
  type: "image" | "video";
  aspectRatio: number;
};

interface MediGridStyle {
  gridContainer: ViewStyle;
  gridItem: ViewStyle;
  image: ImageStyle;
  video: FlexStyle;
}

enum MediaType {
  Image = "image",
  Video = "video",
}

export { MediaGridProps, MediaItem, MediaType };
