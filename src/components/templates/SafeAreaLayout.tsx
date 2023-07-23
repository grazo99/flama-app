import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
type SafeAreaLayoutProps = {
  children: React.ReactNode;
};

const SafeAreaLayout = ({
  children,
}: SafeAreaLayoutProps): React.ReactElement => {
  const insets = useSafeAreaInsets();
  return <View style={{ paddingTop: insets.top, flex: 1 }}>{children}</View>;
};

export default SafeAreaLayout;
