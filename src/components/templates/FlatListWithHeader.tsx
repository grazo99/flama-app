import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

type FlatListWithHeaderProps = {
  listDataRenderer: (item: any) => React.ReactElement | null;
  headerRenderer: () => React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null;
  gap?: number;
  ListData: any[];
};

const FlatListWithHeader = ({
  headerRenderer,
  ListData,
  listDataRenderer,
  gap,
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

const useFlatListWithHeader = ({ headerRenderer, listDataRenderer }: any) => {
  const handleRenderItem = ({ item, index }: any) => {
    return index == 0 ? headerRenderer?.() : listDataRenderer?.(item);
  };
  const handleKeyExtractor = (item: any, index: number) => {
    return index == 0 ? -1 : item.id.toString();
  };
  return { handleRenderItem, handleKeyExtractor };
};
