import { Container } from "./styles";

interface SeparatorProps {
  color?: string;
}

export function Separator(props: SeparatorProps){
  return(
    <Container color={props.color} />
  )
}