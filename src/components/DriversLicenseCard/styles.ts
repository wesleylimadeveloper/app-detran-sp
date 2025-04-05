import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
`;

export const Header = styled.View`
  align-items: center;
  border-color: #e4e4e4;
  border-bottom-width: 1px;
  flex-direction: row;
  gap: 16px;
  padding: 14px;
`;

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 6px;
  padding-right: 40px;
`;

export const Row = styled.View`
  align-items: baseline;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  font-weight: normal;
`;

export const Status = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 10px;
  justify-content: center;
  padding: 1px 8px;
`;

export const StatusText = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  font-weight: 900;
`;

export const Content = styled.View`
  gap: 14px;
  padding: 18px 12px;
`;

export const InfoText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  font-weight: bold;
`;
