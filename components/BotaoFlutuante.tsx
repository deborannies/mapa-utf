import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";

interface BotaoFlutuanteProps {
  href: string;
}

export default function BotaoFlutuante({ href }: BotaoFlutuanteProps) {
  return (
    <Link href={href as any} asChild>
      <TouchableOpacity style={styles.botao}>
        <FontAwesome5 name="plus" size={24} color="white" />
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  botao: {
    position: "absolute",
    bottom: 24,
    right: 24,
    backgroundColor: "#004b87",
    width: 60,
    height: 60,
    borderRadius: 30, 
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});