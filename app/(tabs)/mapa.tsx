import { View, StyleSheet } from "react-native";
import PinoMapa from "../../components/PinoMapa";

export default function Mapa() {
  return (
    <View style={styles.mapaFundo}>
      
      <PinoMapa titulo="Bloco A" icone="building" corBase="#8B6B22" top="15%" left="35%" />
      
      <PinoMapa titulo="Bloco C" icone="building" corBase="#8B6B22" top="25%" left="15%" />
      
      <PinoMapa titulo="Biblioteca" icone="book" corBase="#004b87" top="45%" left="50%" />
      
      <PinoMapa titulo="RU" icone="utensils" corBase="#004b87" top="70%" left="70%" />

    </View>
  );
}

const styles = StyleSheet.create({
  mapaFundo: {
    flex: 1,
    backgroundColor: "#d1e0d5",
  },
});