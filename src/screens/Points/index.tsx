import { Header } from "../../components/Header";
import { DetailsCard } from "../../components/DetailsCard";
import { LinkButton } from "../../components/LinkButton";

import * as S from "./styles";

export function Points() {
  return (
    <S.Container>
      <Header title="Pontos" hideNotifications />

      <S.Content>
        <DetailsCard value="1" text="pontos" />

        <LinkButton title="Ver detalhes" />
      </S.Content>
    </S.Container>
  );
}
