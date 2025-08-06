import { colors } from "@/theme";
import { Container, Label, SummaryWrapper, Total } from "./styles";
import { Separator } from "../Separator";
import { Summary, SummaryProps } from "../Summary";

export type HeaderProps = {
  total: string;
  input: SummaryProps;
  output: SummaryProps;
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
        <Summary data={props.data.input} icon={{ name: "arrow-upward", color: colors.green[500] }} />

        <Summary data={props.data.output} icon={{ name: "arrow-downward", color: colors.red[400] }} endFlexed />
      </SummaryWrapper>
    </Container>
  );
}