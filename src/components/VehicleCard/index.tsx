import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import CarIcon from "../../assets/icons/car.svg";

import * as S from "./styles";

export function VehicleCard() {
  const THEME = useTheme();

  return (
    <S.Container>
      <S.Header>
        <CarIcon style={{ alignSelf: "center" }} />
        <S.Column>
          <S.LicensePlate>ABC1D23</S.LicensePlate>

          <S.Text>GM/ASTRA HB 4P ADVANTAGE </S.Text>
        </S.Column>
        <Feather color={THEME.colors.primary} name="info" size={24} />
      </S.Header>

      <S.Content>
        <S.Row>
          <S.Row>
            <S.Label>IPVA: </S.Label>

            <S.Status>
              <S.StatusText>Em dia</S.StatusText>
            </S.Status>
          </S.Row>

          <S.Row>
            <S.Label>Licenciamento: </S.Label>

            <S.Status>
              <S.StatusText>Em dia</S.StatusText>
            </S.Status>
          </S.Row>
        </S.Row>
        <S.Row>
          <S.Text>Último licenciamento</S.Text>
          <S.InfoText>2024</S.InfoText>
        </S.Row>

        <S.Row>
          <S.Text>Mês licencimanto</S.Text>
          <S.InfoText>10 (Outubro)</S.InfoText>
        </S.Row>

        <S.Row>
          <S.Text>Multa</S.Text>
          <S.InfoText>1 (R$ 130,00)</S.InfoText>
        </S.Row>

        <S.Row>
          <S.Text>Restrição/ bloqueio</S.Text>
          <S.InfoText>-</S.InfoText>
        </S.Row>

        <S.LicensingDownloadButton>
          <S.Button>
            <Feather color={THEME.colors.primary} name="download" size={24} />
            <S.ButtonText>Baixar licenciamento</S.ButtonText>
          </S.Button>
        </S.LicensingDownloadButton>
      </S.Content>
    </S.Container>
  );
}
