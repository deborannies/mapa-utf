import { useState } from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import CampoInput from "../components/CampoInput";
import SeletorDia from "../components/SeletorDia";

export default function NovaAula() {
  const [materia, setMateria] = useState("");
  const [dia, setDia] = useState("Ter");

  return (
    <View style={styles.wrapper}>
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.labelConfig}>CONFIGURAÇÃO</Text>
        <Text style={styles.tituloPrincipal}>Organize seus estudos no campus.</Text>
        
        <CampoInput 
          label="Nome da Matéria"
          placeholder="Ex: Desenvolvimento Web"
          valor={materia}
          onChange={setMateria}
        />

        <SeletorDia diaSelecionado={dia} onSelecionar={setDia} />

        <View style={styles.row}>
          <View style={styles.cardMetade}>
            <Text style={styles.labelInterna}>Início</Text>
            <View style={styles.inputFake}>
              <Text style={styles.textMuted}>--:--</Text>
              <FontAwesome5 name="clock" size={14} color="#9CA3AF" />
            </View>
          </View>

          <View style={styles.cardMetade}>
            <Text style={styles.labelInterna}>Término</Text>
            <View style={styles.inputFake}>
              <Text style={styles.textMuted}>--:--</Text>
              <FontAwesome5 name="clock" size={14} color="#9CA3AF" />
            </View>
          </View>
        </View>

        <View style={styles.cardFull}>
          <Text style={styles.labelInterna}>Escolher Local</Text>
          <View style={styles.inputFake}>
            <Text style={styles.textMuted}>Selecione o Bloco</Text>
            <FontAwesome5 name="building" size={14} color="#9CA3AF" />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.botaoSalvar}>
          <FontAwesome5 name="save" size={18} color="#FFF" style={styles.iconeBotao} />
          <Text style={styles.textoBotao}>Salvar Aula</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    padding: 24,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  labelConfig: {
    color: '#8B6B22',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: 1,
  },
  tituloPrincipal: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 24,
    lineHeight: 32,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  cardMetade: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  cardFull: {
    backgroundColor: "#F2F2F2",
    padding: 16,
    borderRadius: 16,
  },
  labelInterna: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: 8,
  },
  inputFake: {
    backgroundColor: "#FFF",
    height: 44,
    borderRadius: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  textMuted: {
    color: '#9CA3AF',
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  botaoSalvar: {
    backgroundColor: '#004B87',
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconeBotao: {
    marginRight: 10,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});