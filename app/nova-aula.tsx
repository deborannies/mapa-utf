import { useState } from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import CampoInput from "../components/CampoInput";
import SeletorDia from "../components/SeletorDia";
import { salvarAula } from "../services/db";

export default function NovaAula() {
  const router = useRouter();
  const [materia, setMateria] = useState("");
  const [dia, setDia] = useState("Ter");
  const [local, setLocal] = useState("");

  const handleSalvar = () => {
    if (materia.trim() === "") {
      Alert.alert("Erro de Validação", "O campo 'Nome da Matéria' não pode ficar vazio.");
      return;
    }
    if (local.trim() === "") {
      Alert.alert("Erro de Validação", "Por favor, informe o Bloco ou Sala.");
      return;
    }

    try {
      salvarAula({ 
        subject: materia, 
        day_of_week: dia, 
        start_time: "18:40", 
        end_time: "20:10", 
        local: local 
      });
      
      Alert.alert("Sucesso", "Aula cadastrada com sucesso no SQLite!", [
        { text: "OK", onPress: () => router.back() }
      ]);
    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar no banco de dados.");
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.labelConfig}>CONFIGURAÇÃO</Text>
        <Text style={styles.tituloPrincipal}>Organize seus estudos no campus.</Text>
        
        <CampoInput label="Nome da Matéria" placeholder="Ex: Desenvolvimento Web" valor={materia} onChange={setMateria} />
        <SeletorDia diaSelecionado={dia} onSelecionar={setDia} />

        <View style={styles.row}>
          <View style={styles.cardMetade}><Text style={styles.labelInterna}>Início</Text><View style={styles.inputFake}><Text style={styles.textMuted}>18:40</Text><FontAwesome5 name="clock" size={14} color="#9CA3AF" /></View></View>
          <View style={styles.cardMetade}><Text style={styles.labelInterna}>Término</Text><View style={styles.inputFake}><Text style={styles.textMuted}>20:10</Text><FontAwesome5 name="clock" size={14} color="#9CA3AF" /></View></View>
        </View>

        <CampoInput label="Escolher Local" placeholder="Ex: Bloco B" valor={local} onChange={setLocal} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}>
          <FontAwesome5 name="save" size={18} color="#FFF" style={styles.iconeBotao} />
          <Text style={styles.textoBotao}>Salvar Aula</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#FFF" },
  container: { flex: 1, padding: 24 },
  scrollContent: { paddingBottom: 40 },
  labelConfig: { color: '#8B6B22', fontSize: 10, fontWeight: 'bold', marginBottom: 4, letterSpacing: 1 },
  tituloPrincipal: { fontSize: 26, fontWeight: 'bold', color: '#111827', marginBottom: 24, lineHeight: 32 },
  row: { flexDirection: 'row', gap: 12 },
  cardMetade: { flex: 1, backgroundColor: "#F2F2F2", padding: 16, borderRadius: 16, marginBottom: 16 },
  labelInterna: { fontSize: 13, fontWeight: "bold", color: "#4B5563", marginBottom: 8 },
  inputFake: { backgroundColor: "#FFF", height: 44, borderRadius: 10, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#E5E7EB' },
  textMuted: { color: '#9CA3AF' },
  footer: { padding: 24, borderTopWidth: 1, borderTopColor: '#F3F4F6' },
  botaoSalvar: { backgroundColor: '#004B87', height: 56, borderRadius: 28, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  iconeBotao: { marginRight: 10 },
  textoBotao: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});