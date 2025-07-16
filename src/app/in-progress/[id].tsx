import { Text } from "react-native";
import { useLocalSearchParams } from 'expo-router';

type ParamsProps = {
  id: string;
}

export default function InProgressPage(){
  const params = useLocalSearchParams<ParamsProps>();
  return(
    <Text>ID:{ params.id }</Text>
  );
}