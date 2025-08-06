import { colors, fontFamily } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  gap: 12px;
  padding-bottom: 16px;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  gap: 7px;
`;

export const TargetName = styled.Text`
  font-size: 14px;
  color: ${colors.black};
  font-family: ${fontFamily.medium};
`;

export const Status = styled.Text`
  font-size: 10px;
  color: ${colors.gray[500]};
  font-family: ${fontFamily.regular};
`;
