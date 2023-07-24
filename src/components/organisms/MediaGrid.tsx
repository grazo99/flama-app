import React from "react";

import { MediaGridProps, MediaItem } from "./types";
import { useMediaGrid } from "./hooks/useMediaGrid";
import { FlashList, MasonryFlashList } from "@shopify/flash-list";

const MediaGrid = ({
  items,
  columns,
  styles,
  headerRenderer,
}: MediaGridProps) => {
  const { renderItem, itemHeight } = useMediaGrid(styles, columns);

  return (
    <MasonryFlashList
      ListHeaderComponent={headerRenderer}
      data={items}
      keyExtractor={(item: MediaItem) => item.id.toString()}
      renderItem={renderItem}
      numColumns={columns}
      estimatedItemSize={itemHeight}
    />
  );
};

export default MediaGrid;
