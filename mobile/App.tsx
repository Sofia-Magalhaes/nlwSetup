import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

import { Loading } from "./src/components/Loading";

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
    return(
      <Loading />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090A",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontFamily: 'Inter_800ExtraBold'
  },
});
