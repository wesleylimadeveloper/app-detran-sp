import * as S from "./styles";

type Props = {
  text: string;
  value: string;
};

export function DetailsCard({ text, value }: Props) {
  return (
    <S.Container>
      <S.Text>Você possui</S.Text>

      <S.Value>{value}</S.Value>

      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
