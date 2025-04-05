import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { SvgProps } from "react-native-svg";

import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: React.FC<SvgProps>;
};

export function ServiceCard({ title, icon: Icon, ...rest }: Props) {
  const THEME = useTheme();

  return (
    <S.Container {...rest}>
      {Icon ? (
        <Icon />
      ) : (
        <Ionicons name="car-sport" size={48} color={THEME.colors.primary} />
      )}

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
