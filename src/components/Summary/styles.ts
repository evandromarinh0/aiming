import { colors, fontFamily } from "@/theme";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  gap: 4px;
`;

export const LabelWrapper = styled.View<{ endFlexed?: boolean; }>`
  flex-direction: row;
  align-items: center;
  gap: 4px;

   ${props => props.endFlexed && css`
    justify-content: flex-end;
  `}
`;

export const Label = styled.Text`
  font-size: 10px;
  color: ${colors.blue[300]};
  font-family: ${fontFamily.regular};
`;

export const ValueWrapper = styled.View``;

export const Value = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-family: ${fontFamily.regular};
`;
