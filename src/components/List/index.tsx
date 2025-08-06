import { FlatList, FlatListProps, StyleProp, ViewStyle } from "react-native";
import { Container, EmptyListText, Title, Wrapper } from "./styles";
import { Separator } from "../Separator";
import { colors } from "@/theme";

type Props<T> = FlatListProps<T> & {
  title: string;
  emptyMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
  renderItem,
  data,
}

export function List<T>(props: Props<T>){
  return(
    <Wrapper>
      <Title>{props.title}</Title>  

      <Container
        data={props.data}
        renderItem={props.renderItem}
        ItemSeparatorComponent={() => <Separator color={colors.gray[200]} />}
        ListEmptyComponent={() => <EmptyListText>{props.emptyMessage}</EmptyListText>}
        keyExtractor={props.data.id}
        showsVerticalScrollIndicator={false}
        >
      </Container>
    </Wrapper>
  );
}