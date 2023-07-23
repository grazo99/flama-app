import React from "react";
import { MediaGridWithHeaderProps } from "./types";
import { useMediaGrid } from "../organisms/hooks";
import FlatListWithHeader from "../templates/FlatListWithHeader";

const MediaGridWithHeader = ({
  items,
  columns,
  styles,
  headerRenderer,
}: MediaGridWithHeaderProps) => {
  const { renderItem } = useMediaGrid(styles, columns);

  return (
    <FlatListWithHeader
      ListData={items}
      listDataRenderer={renderItem}
      headerRenderer={headerRenderer}
      numColumns={columns}
    />
  );
};

export default MediaGridWithHeader;
