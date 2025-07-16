import { colors, fontFamily } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";


export const Container = styled(LinearGradient)`
  height: 324px;
  width: 100%;
  justify-content: flex-end;
  padding: 0 24px 18px;
  gap: 24px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${colors.white};
  font-family: ${fontFamily.regular};
`;

export const Total = styled.Text`
  font-size: 32px;
  color: ${colors.white};
  font-family: ${fontFamily.medium};
`;

export const SummaryWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;