import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CardAulaProps {
  titulo: string;
  horario: string;
  local: string;
  ativo?: boolean;
}

export default function CardAula({ titulo, horario, local, ativo }: CardAulaProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <Text style={[styles.tituloBase, ativo ? styles.tituloAtivo : styles.tituloInativo]}>{titulo}</Text>
        
        <View style={styles.row}>
          <FontAwesome5 name="clock" size={12} color="gray" />
          <Text style={styles.textoIcone}>{horario}</Text>
        </View>
        
        <View style={styles.row}>
          <FontAwesome5 name="map-marker-alt" size={12} color="gray" />
          <Text style={styles.textoIcone}>{local}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={[styles.botao, ativo ? styles.botaoAtivo : styles.botaoInativo]}>
        <Text style={[styles.textoBotao, ativo ? styles.textoBotaoAtivo : styles.textoBotaoInativo]}>
          Ver no Mapa
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#f3f4f6",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  textoIcone: {
    color: "#6b7280",
    fontSize: 12,
    marginLeft: 8,
  },
  botao: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 9999,
    marginLeft: 8,
  },
  botaoAtivo: {
    backgroundColor: "#facc15",
  },
  botaoInativo: {
    backgroundColor: "#e5e7eb",
  },
  textoBotao: {
    fontSize: 12,
    fontWeight: "bold",
  },
  textoBotaoAtivo: {
    color: "#111827",
  },
  textoBotaoInativo: {
    color: "#6b7280",
  },
  tituloBase: {
    fontWeight: "bold",
    color: "#1f2937",
    textTransform: "uppercase",
    fontSize: 14,
    marginBottom: 8,
  },
  tituloAtivo: {
    color: "#004b87",
  },
  tituloInativo: {
    color: "#6b7280",
  },
});