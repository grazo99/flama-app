import { FlatListProps } from "react-native";

type FlatListWithHeaderProps = {
  listDataRenderer: (item: any) => React.ReactElement | null;
  headerRenderer: () => React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null;
  gap?: number;
  ListData: any[];
  numColumns?: number;
};

export { FlatListWithHeaderProps };
