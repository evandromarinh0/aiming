import { colors, fontFamily } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${colors.blue[500]};
  height: 48px;
  width: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${fontFamily.medium};
  color: ${colors.white};
  font-size: 14px;
`;

export const Loading = styled.ActivityIndicator``;

export const ButtonWrapper = styled.View`
  padding: 0 24px 32px;
`;