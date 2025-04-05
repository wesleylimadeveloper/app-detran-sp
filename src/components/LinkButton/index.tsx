import * as S from "./styles";

type Props = {
  title: string;
};

export function LinkButton({ title }: Props) {
  return (
    <S.Pressable>
      <S.Title>{title}</S.Title>
    </S.Pressable>
  );
}
