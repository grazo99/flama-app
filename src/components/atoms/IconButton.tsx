import {
  Animated,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { IconProps, Icon } from "./Icon";

type IconButtonProps = TouchableOpacityProps & IconProps;

const IconButton = ({ onPress, name, size, color }: IconButtonProps) => {
  const scaleAnim = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
export default IconButton;
