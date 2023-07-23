export const useFlatListWithHeader = ({
  headerRenderer,
  listDataRenderer,
}: any) => {
  const handleRenderItem = ({ item, index }: any) => {
    return index == 0 ? headerRenderer?.() : listDataRenderer?.(item);
  };
  const handleKeyExtractor = (item: any, index: number) => {
    return index == 0 ? -1 : item.id.toString();
  };
  return { handleRenderItem, handleKeyExtractor };
};
