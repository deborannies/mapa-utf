import { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CampoInput from "../components/CampoInput";

export default function NovaAula() {
  const [materia, setMateria] = useState("");
  const [local, setLocal] = useState("");

  return (
    <ScrollView style={styles.container}>
      <CampoInput 
        label="Nome da Matéria"
        placeholder="Ex: Pensamento Computacional"
        valor={materia}
        onChange={setMateria}/>

      <CampoInput 
        label="Local / Sala"
        placeholder="Ex: Bloco B - Lab B6"
        valor={local}
        onChange={setLocal}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fb",
    padding: 24,
  },
});