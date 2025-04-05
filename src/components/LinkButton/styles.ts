import styled from "styled-components/native";

export const Pressable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
`;
