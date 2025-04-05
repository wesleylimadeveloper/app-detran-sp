import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 32 + 70,
    gap: 24,
  },
})``;

export const Options = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 12px;
  margin-top: 24px;
  padding: 16px;
`;

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  gap: 10px;
  padding: 10px 0;
`;

export const Label = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.larger}px;
`;

export const Divider = styled.View`
  background-color: #e4e4e4;
  height: 1px;
  margin: 14px 0 0 0;
`;
