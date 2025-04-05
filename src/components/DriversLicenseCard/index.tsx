import DriversLicenseIcon from "../../assets/icons/drivers-license.svg";

import * as S from "./styles";

export function DriversLicenseCard() {
  return (
    <S.Container>
      <S.Header>
        <DriversLicenseIcon />
        <S.Column>
          <S.Label>
            Nº de Registro: <S.Text>000011112222</S.Text>
          </S.Label>

          <S.Row>
            <S.Label>
              Categoria: <S.Text>B</S.Text>
            </S.Label>

            <S.Row>
              <S.Label>CNH: </S.Label>

              <S.Status>
                <S.StatusText>Ativa</S.StatusText>
              </S.Status>
            </S.Row>
          </S.Row>
        </S.Column>
      </S.Header>

      <S.Content>
        <S.Row>
          <S.Text>Pontos</S.Text>
          <S.InfoText>10</S.InfoText>
        </S.Row>

        <S.Row>
          <S.Text>Vencimento</S.Text>
          <S.InfoText>10/01/2026</S.InfoText>
        </S.Row>

        <S.Row>
          <S.Text>Processo passível de defesa/ recurso</S.Text>
          <S.InfoText>-</S.InfoText>
        </S.Row>

        <S.Row>
          <S.Text>Multa passível de indicação</S.Text>
          <S.InfoText>-</S.InfoText>
        </S.Row>
      </S.Content>
    </S.Container>
  );
}
