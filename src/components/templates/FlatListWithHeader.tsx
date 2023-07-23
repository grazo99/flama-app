import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useFlatListWithHeader } from "./hooks";
import { FlatListWithHeaderProps } from "./types";
import { FlashList } from "@shopify/flash-list";

const FlatListWithHeader = ({
  headerRenderer,
  ListData,
  listDataRenderer,
  gap,
  numColumns,
}: FlatListWithHeaderProps) => {
  const { handleRenderItem, handleKeyExtractor } = useFlatListWithHeader({
    headerRenderer,
    listDataRenderer,
  });
  return (
    <FlatList
      data={[{}, ...ListData]}
      renderItem={handleRenderItem}
      keyExtractor={handleKeyExtractor}
      ItemSeparatorComponent={() => <View style={{ height: gap }} />}
      style={styles.container}
      numColumns={numColumns}
      horizontal={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
});

export default FlatListWithHeader;
