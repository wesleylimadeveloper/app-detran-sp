import { Header } from "../../components/Header";
import { DriversLicenseCard } from "../../components/DriversLicenseCard";
import { VehicleCard } from "../../components/VehicleCard";

import LogoutIcon from "../../assets/icons/logout.svg";

import * as S from "./styles";

export function MyDetran() {
  return (
    <S.Container>
      <Header title="Meu Detran" />

      <S.ProfileHeader>
        <S.Greetings>Bem vindo(a), Wesley!</S.Greetings>

        <LogoutIcon />
      </S.ProfileHeader>

      <S.Content>
        <S.Title>CNH - Habilitação</S.Title>

        <S.Cards>
          <DriversLicenseCard />
        </S.Cards>

        <S.Title>Veículos</S.Title>

        <S.Cards>
          <VehicleCard />
        </S.Cards>
      </S.Content>
    </S.Container>
  );
}
