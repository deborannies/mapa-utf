import { View, Text, TextInput, StyleSheet } from "react-native";

interface CampoInputProps {
  label: string;
  placeholder: string;
  valor: string;
  onChange: (texto: string) => void;
}

export default function CampoInput({ label, placeholder, valor, onChange }: CampoInputProps) {
  return (
    <View style={styles.grupoInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        value={valor}
        onChangeText={onChange}
        placeholderTextColor="#C1C7D2" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grupoInput: {
    width: "100%",
    marginBottom: 16,
    backgroundColor: "#F2F2F2", 
    padding: 16,
    borderRadius: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4B5563", 
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#ffffff", 
    borderRadius: 12, 
    paddingHorizontal: 16, 
    height: 48,
    fontSize: 16,
    color: "#1f2937",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
});