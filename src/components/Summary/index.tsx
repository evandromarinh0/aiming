import { Container, Label, LabelWrapper, Value, ValueWrapper } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

export type SummaryProps = {
  label: string;
  value: string;
}

type Props = {
  data: SummaryProps;
  icon: {
    name: keyof typeof MaterialIcons.glyphMap;
    color: string;
  };
  endFlexed?: boolean;
}

export function Summary(props: Props){
  return(
    <Container>
      <LabelWrapper endFlexed={props.endFlexed}>
        <MaterialIcons name={props.icon.name} size={16} color={props.icon.color} />
        <Label>{props.data.label}</Label>
      </LabelWrapper>

      <ValueWrapper>
        <Value>{props.data.value}</Value>
      </ValueWrapper>
    </Container>
  );
}