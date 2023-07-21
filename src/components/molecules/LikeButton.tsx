/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconSize, Icons } from "../atoms/Icon";
import { Text } from "../atoms/Text";
import { Fonts } from "../../theme";
import { useState } from "react";
import IconButton from "../atoms/IconButton";
import { useTheme } from "@react-navigation/native";
import Tag from "../atoms/Tag";

type LikeButtonProps = {
  onClick?: () => void;
  liked: boolean;
  likeCount: number;
  variant?: "small" | "large";
  style?: any;
};

const LikeButton: React.FC<LikeButtonProps> = ({
  onClick,
  liked,
  likeCount,
  style,
}) => {
  const [isLiked, setIsLiked] = useState(liked);
  const onPress = () => {
    setIsLiked(!isLiked);
    onClick?.();
  };

  const { colors } = useTheme();

  return (
    <Tag color={colors.background} style={style}>
      <IconButton
        onPress={onPress}
        name={isLiked ? Icons.FlameFilled : Icons.FlameOutline}
        size={IconSize.Small}
        //TODO: fix this
        color={isLiked ? colors.primary : colors.textBody}
      />
      <Text variant={Fonts.B3}>{likeCount}</Text>
    </Tag>
  );
};

export default LikeButton;
