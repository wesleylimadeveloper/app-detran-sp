import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 32,
    marginTop: 32,
    paddingBottom: 32 + 70,
    paddingHorizontal: 16,
  },
})``;

export const Cards = styled.View`
  gap: 42px;
`;
