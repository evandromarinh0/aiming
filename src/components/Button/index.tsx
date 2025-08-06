import { colors } from "@/theme";
import { ButtonText, Container, Loading } from "./styles";

interface ButtonProps {
  title: string;
  isProcessing?: boolean;
  onPress: () => void;
}

export function Button(props: ButtonProps){
  return(
    <Container disabled={props.isProcessing} activeOpacity={0.7} onPress={() => props.onPress()}>
      <ButtonText>{props.isProcessing ? <Loading size="small" color={colors.white} /> : props.title}</ButtonText>
    </Container>
  );
}