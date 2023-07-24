/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconSize, Icons } from "./Icon";
import { Text } from "./Text";
import { Fonts } from "../../theme";
import { useState } from "react";
import IconButton from "./IconButton";
import { useTheme } from "@react-navigation/native";
import Tag from "./Tag";
import { StyleSheet, View } from "react-native";

type LikeButtonProps = {
  onClick?: () => void;
  liked: boolean;
  likeCount?: number;
  size?: IconSize;
  style?: any;
  row?: boolean;
};

const LikeButton: React.FC<LikeButtonProps> = ({
  onClick,
  liked,
  likeCount,
  size = IconSize.Small,
  row,
  style,
}) => {
  const [isLiked, setIsLiked] = useState(liked);
  const onPress = () => {
    setIsLiked(!isLiked);
    onClick?.();
  };

  const { colors } = useTheme();

  const customStyle = StyleSheet.create({
    container: {
      flexDirection: row ? "row" : "column",
      gap: 2,
      alignItems: "center",
    },
  });
  return (
    <View style={[customStyle.container, style]}>
      <IconButton
        onPress={onPress}
        name={isLiked ? Icons.FlameFilled : Icons.FlameOutline}
        size={size}
        color={isLiked ? colors.primary : colors.text}
        hitSlop={50}
      />
      {likeCount && <Text variant={Fonts.B2}>{likeCount}</Text>}
    </View>
  );
};

export default LikeButton;
