import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 16,
    paddingBottom: 32 + 70,
    paddingHorizontal: 16,
  },
})``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.largest}px;
  margin: 26px 0 12px 0;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 16px;
`;
