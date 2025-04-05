import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  gap: 16px;
  padding: 22px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
  font-weight: 600;
  text-align: center;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
  font-weight: 600;
  text-align: center;
`;
