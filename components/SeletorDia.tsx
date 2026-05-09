import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface SeletorDiaProps {
  diaSelecionado: string;
  onSelecionar: (dia: string) => void;
}

const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export default function SeletorDia({ diaSelecionado, onSelecionar }: SeletorDiaProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dias da Semana</Text>
      <View style={styles.grade}>
        {dias.map((dia) => (
          <TouchableOpacity
            key={dia}
            onPress={() => onSelecionar(dia)}
            style={[
              styles.botao, 
              diaSelecionado === dia && styles.botaoAtivo
            ]}
          >
            <Text style={[
              styles.texto, 
              diaSelecionado === dia && styles.textoAtivo
            ]}>
              {dia}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: 12,
  },
  grade: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  botao: {
    width: 50,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoAtivo: {
    backgroundColor: "#004B87",
  },
  texto: {
    fontSize: 13,
    color: "#4B5563",
  },
  textoAtivo: {
    color: "#FFF",
    fontWeight: "bold",
  },
});