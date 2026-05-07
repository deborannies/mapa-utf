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
        placeholderTextColor="#9ca3af" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grupoInput: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#374151", 
    marginBottom: 8,
    marginLeft: 4,   
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb", 
    borderRadius: 8, 
    paddingHorizontal: 16, 
    paddingVertical: 12,  
    fontSize: 16,
    color: "#1f2937", 
  },
});