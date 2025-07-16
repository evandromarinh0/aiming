import { Loading } from '@/components/Loading';
import { colors } from '@/theme/colors';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';

export default function Layout(){
  const [loadedFonts] = useFonts({ Inter_400Regular, Inter_500Medium, Inter_700Bold });

  if(!loadedFonts){
    return <Loading />
  }

  return <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.white } }} />
};