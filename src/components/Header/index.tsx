import { colors } from "@/theme";
import { Container, Label, SummaryWrapper, Total } from "./styles";
import { Separator } from "../Separator";
import { Summary } from "../Summary";

export type HeaderProps = {
  total: string;
}

type Props = {
  data: HeaderProps
}

export function Header(props: Props){
  return(
    <Container colors={[colors.blue[500], colors.blue[800]]}>
      
      <Label>Total que você possui</Label>
      <Total>R$ {props.data.total}</Total>
      <Separator />


      <SummaryWrapper>
        <Summary data={{ label: "Entradas", value: "R$ 6,184.90" }} icon={{ name: "arrow-upward", color: colors.green[500] }} />

        <Summary data={{ label: "Saídas", value: "-R$ 883.65" }} icon={{ name: "arrow-downward", color: colors.red[400] }} endFlexed />
      </SummaryWrapper>
    </Container>
  );
}