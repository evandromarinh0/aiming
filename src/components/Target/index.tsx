import { Container, Content, Status, TargetName } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

interface TargetProps {
  id?: string;
  name: string;
  percentage: string;
  current: string;
  target: string;
}

interface Props {
  onPress: () => void;
  data: TargetProps
}

export function Target(props: Props){
  
  return(
    <Container onPress={() =>  props.onPress()}>
      <Content>
        <TargetName>
          {props.data.name}
        </TargetName>

        <Status>
          {props.data.percentage} • {props.data.current} de {props.data.target}
        </Status>
      </Content>

      <MaterialIcons name="chevron-right" size={20} />
    </Container>
  );
}