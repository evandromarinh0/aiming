import { Button } from "@/components/Button";
import { ButtonWrapper } from "@/components/Button/styles";
import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { Target } from "@/components/Target";
import { router } from "expo-router";

export default function Index(){
  const summaryData = {
    total: "2.680,00", 
    input: { label: "Entradas", value: "R$ 6,184.90" },
    output: { label: "Saídas", value: "-R$ 883.65" }
  }

  const targetData = [
    {
      id: "1",
      name: "Apple Watch",
      percentage: "50%", 
      current: "R$ 580,00",
      target: "R$ 900"
    },
    {
      id: "22",
      name: "Comprar uma cadeira gamer",
      current: "R$ 580,00",
      percentage: "75%", 
      target: "R$ 1200,00"
    },
    {
      id: "23",
      name: "Fazer uma viagem para o Rio",
      current: "R$ 580,00",
      percentage: "50", 
      target: "R$ 300,00"
    }
  ];

  return(
    <>
      <Header data={summaryData} />

      <List 
        data={targetData} 
        renderItem={({ item }) => <Target data={item} onPress={() => router.navigate(`/in-progress/${item.id}`)} />} 
        keyExtractor={(item) => item.id}
        title="Metas"
        emptyMessage="Nenhuma meta. Toque em nova meta para criar uma."
      />

      <ButtonWrapper>
        <Button title="Nova meta" onPress={() => router.navigate("/target")} />
      </ButtonWrapper>
    </>
  );
}