import styled from "styled-components/native";
import { FlatList } from "react-native";
import { colors, fontFamily } from "@/theme";

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Container = styled(FlatList).attrs({
  contentContainerStyle: {
    gap: 16,
    paddingTop: 16,
    paddingBottom: 72,
  },
})``;

export const Title = styled.Text`
  margin-top: 24px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray[200]};
  font-size: 18px;
  font-family: ${fontFamily.medium};
  color: ${colors.black};
`;

export const EmptyListText = styled.Text`
  font-size: 14px;
  color: ${colors.gray[600]};
  font-family: ${fontFamily.regular};
`;


