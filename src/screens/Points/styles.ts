import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  gap: 12px;
  padding: 28px 48px 0 48px;
`;
