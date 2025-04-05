import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import { Header } from "../../components/Header";

import * as S from "./styles";

export function MoreOptions() {
  return (
    <S.Container>
      <Header title="Mais Opções" hideBackIcon />

      <S.Content>
        <S.Options>
          <S.Option>
            <FontAwesome5 color="#919191" name="car-crash" size={24} />

            <S.Label>
              <S.Text>Acidentes, o que fazer?</S.Text>
              <S.Divider />
            </S.Label>
          </S.Option>

          <S.Option>
            <AntDesign color="#919191" name="questioncircle" size={24} />

            <S.Label>
              <S.Text>Dúvidas frequentes</S.Text>
              <S.Divider />
            </S.Label>
          </S.Option>

          <S.Option>
            <Ionicons color="#919191" name="megaphone" size={24} />

            <S.Label>
              <S.Text>Fale conosco</S.Text>
              <S.Divider />
            </S.Label>
          </S.Option>

          <S.Option>
            <AntDesign color="#919191" name="like1" size={24} />

            <S.Label>
              <S.Text>Avaliar o app</S.Text>
            </S.Label>
          </S.Option>
        </S.Options>

        <S.Options>
          <S.Option>
            <MaterialIcons color="#919191" name="edit" size={24} />

            <S.Label>
              <S.Text>Editar dados</S.Text>
              <S.Divider />
            </S.Label>
          </S.Option>

          <S.Option>
            <MaterialCommunityIcons
              color="#919191"
              name="key-variant"
              size={24}
            />

            <S.Label>
              <S.Text>Alterar senha</S.Text>
            </S.Label>
          </S.Option>
        </S.Options>
      </S.Content>
    </S.Container>
  );
}
