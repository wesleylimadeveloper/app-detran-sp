import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

type Props = {
  hideBackIcon?: boolean;
  hideNotifications?: boolean;
  title: string;
};

export function Header({ title, hideBackIcon, hideNotifications }: Props) {
  const navigation = useNavigation();
  const THEME = useTheme();

  return (
    <S.Container>
      <Feather
        onPress={() => navigation.goBack()}
        disabled={hideBackIcon}
        color={hideBackIcon ? THEME.colors.primary : THEME.colors.light}
        name="arrow-left"
        size={24}
      />

      <S.Title>{title}</S.Title>

      <MaterialCommunityIcons
        disabled={hideNotifications}
        color={hideNotifications ? THEME.colors.primary : THEME.colors.light}
        name="bell"
        size={24}
      />
    </S.Container>
  );
}
