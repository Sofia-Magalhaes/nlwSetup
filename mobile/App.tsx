import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  // esse if faz com que se a fonte não estiver carregada o app não vai entrar direto
  // vai exibir uma tala de carregamento
  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Home />
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}