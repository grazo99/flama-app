import { MediaGridProps } from "../../../components/organisms/types";
import { FlatListWithHeaderProps } from "./FlatListWithHeader.types";

type MediaGridWithHeaderProps = {
  items: MediaGridProps["items"];
  columns: MediaGridProps["columns"];
  styles: MediaGridProps["styles"];
  headerRenderer: FlatListWithHeaderProps["headerRenderer"];
};

export { MediaGridWithHeaderProps };
