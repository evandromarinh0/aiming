import { ActivityIndicator } from "react-native";
import { Container } from "./styles";
import { colors } from "@/theme/colors";

export function Loading(){
  return(
    <Container>
      <ActivityIndicator color={colors.blue[500]} />
    </Container>
  );
}