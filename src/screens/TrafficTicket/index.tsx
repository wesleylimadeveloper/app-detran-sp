import { Header } from "../../components/Header";
import { DetailsCard } from "../../components/DetailsCard";
import { LinkButton } from "../../components/LinkButton";

import * as S from "./styles";

export function TraficTicket() {
  return (
    <S.Container>
      <Header title="Multas" hideNotifications />

      <S.Content>
        <DetailsCard value="1 (R$ 130,00)" text="multa(s)" />

        <LinkButton title="Ver detalhes" />
      </S.Content>
    </S.Container>
  );
}
