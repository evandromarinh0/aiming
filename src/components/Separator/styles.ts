import { colors } from "@/theme";
import { css } from "styled-components";
import styled from "styled-components/native";


export const Container = styled.View<{ color?: string; }>`
  height: 1px;
  width: 100%;
  background: ${colors.blue[400]};


  ${props => props.color && css`
    background-color: ${props.color};
  `}
`;