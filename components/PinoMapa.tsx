import { View, Text, StyleSheet, TouchableOpacity, DimensionValue } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface PinoMapaProps {
  titulo: string;
  icone: string;
  corBase: string;
  top: DimensionValue; 
  left: DimensionValue; 
  onPress?: () => void; 
}

export default function PinoMapa({ titulo, icone, corBase, top, left, onPress }: PinoMapaProps) {
  return (
    <TouchableOpacity 
      style={[styles.container, { top, left }]} 
      onPress={onPress}
      activeOpacity={0.7} 
    >
      <View style={styles.pilula}>
        <FontAwesome5 name={icone} size={10} color={corBase} style={styles.iconePilula} />
        <Text style={styles.texto}>{titulo}</Text>
      </View>

      <View style={[styles.circulo, { backgroundColor: corBase }]}>
        <FontAwesome5 name={icone} size={14} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center", 
  },
  pilula: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  iconePilula: {
    marginRight: 4,
  },
  texto: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#374151",
  },
  circulo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});