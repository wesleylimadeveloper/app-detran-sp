import { Header } from "../../components/Header";
import { DriversLicenseCard } from "../../components/DriversLicenseCard";
import { VehicleCard } from "../../components/VehicleCard";

import * as S from "./styles";

export function MyVehicles() {
  return (
    <S.Container>
      <Header title="Meu Detran" />

      <S.Content>
        <S.Cards>
          <DriversLicenseCard />
        </S.Cards>

        <S.Cards>
          <VehicleCard />
        </S.Cards>
      </S.Content>
    </S.Container>
  );
}
