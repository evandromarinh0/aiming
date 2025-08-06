import { colors } from "@/theme";
import { BackButton, Container, Description, Header, Title } from "./styles";
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router";

interface PageHeaderProps {
  title: string;
  description?: boolean;
  rightButton?: {
    onPress: () => void;
    icon: keyof typeof MaterialIcons.glyphMap;
  };
}

export function PageHeader(props: PageHeaderProps) {
  return(
    <Container>
      <Header>
        <BackButton activeOpacity={0.7} onPress={() => router.back()}>
          <MaterialIcons size={32} name="arrow-back" color={colors.black} />
        </BackButton>

      </Header>

      <Title>{props.title}</Title>
      
      {props.description && <Description>{props.description}</Description>}
    </Container>
  );
}