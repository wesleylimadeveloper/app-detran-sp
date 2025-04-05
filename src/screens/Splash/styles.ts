import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
`;

export const SplashImage = styled.Image`
  flex: 8;
  width: 100%;
`;

export const Images = styled.View`
  align-items: center;
  flex: 2;
  gap: 16px;
`;

export const DetranImage = styled.Image`
  height: 35px;
  width: 139px;
`;

export const GovernmentImage = styled.Image`
  height: 83px;
  width: 83px;
`;
