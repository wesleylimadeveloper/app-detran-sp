import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

export function Splash() {
  const navigation = useNavigation();

  function navigateToDashboard() {
    setTimeout(() => {
      navigation.navigate("DashboardTab" as never);
    }, 2000);
  }

  useEffect(() => {
    navigateToDashboard();
  }, []);
  return (
    <S.Container>
      <S.SplashImage
        source={require("../../assets/images/splash.png")}
        resizeMode="stretch"
      />

      <S.Images>
        <S.DetranImage
          source={require("../../assets/images/detran.png")}
          resizeMode="cover"
        />

        <S.GovernmentImage
          source={require("../../assets/images/government.png")}
          resizeMode="contain"
        />
      </S.Images>
    </S.Container>
  );
}
