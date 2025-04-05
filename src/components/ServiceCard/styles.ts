import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  flex: 1;
  gap: 14px;
  justify-content: center;
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  text-align: center;
`;
