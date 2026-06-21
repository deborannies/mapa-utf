import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import CardAula from '../../components/CardAula';
import BotaoFlutuante from '../../components/BotaoFlutuante';
import { initDB, listarAulas, AulaDB, excluirAula } from '../../services/db';

export default function MinhaGrade() {
  const isFocused = useIsFocused();
  const [aulas, setAulas] = useState<AulaDB[]>([]);

  useEffect(() => {
    initDB();
  }, []);

  useEffect(() => {
    if (isFocused) {
      carregarAulas();
    }
  }, [isFocused]);

  const carregarAulas = () => {
    setAulas(listarAulas());
  };

  const handleExcluir = (id?: number) => {
    if (!id) return;
    
    Alert.alert(
      "Excluir Aula",
      "Tem certeza que deseja remover esta aula da sua grade?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive", 
          onPress: () => {
            try {
              excluirAula(id);
              carregarAulas(); 
            } catch (error) {
              Alert.alert("Erro", "Não foi possível excluir a aula.");
            }
          } 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.labelSaudacao}>Bem-Vindo</Text>
        <Text style={styles.tituloPrincipal}>Olá, Calouro!</Text>
        <Text style={styles.textoData}>Segunda-Feira, 15 de Abril</Text>

        <View style={styles.bannerAzul}>
            <Text style={styles.bannerTitulo}>Sua jornada acadêmica começa aqui.</Text>
            <Text style={styles.bannerSub}>UTFPR - Campus Guarapuava</Text>
        </View>

        <Text style={styles.tituloSecao}>Aulas de hoje</Text>

        {aulas.length === 0 ? (
          <Text style={styles.textoVazio}>Nenhuma aula salva.</Text>
        ) : (
          aulas.map((aula) => (
            <CardAula 
              key={aula.id?.toString()} 
              titulo={aula.subject} 
              horario={`${aula.start_time} - ${aula.end_time}`} 
              local={aula.local} 
              ativo={true} 
              onDelete={() => handleExcluir(aula.id)} 
            />
          ))
        )}
      </ScrollView>
      
      <BotaoFlutuante href="/nova-aula" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 24, 
    backgroundColor: '#f8f9fb' 
  },
  labelSaudacao: { 
    color: '#8B6B22', 
    textTransform: 'uppercase', 
    fontSize: 10, 
    fontWeight: 'bold', 
    marginBottom: 4 
  },
  tituloPrincipal: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#111827', 
    marginBottom: 4 
  },
  textoData: { 
    fontSize: 14, 
    color: '#6b7280', 
    marginBottom: 20 
  },
  bannerAzul: { 
    backgroundColor: '#004b87', 
    padding: 20, 
    borderRadius: 12, 
    marginBottom: 24 
  },
  bannerTitulo: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 4 
  },
  bannerSub: { 
    color: '#D1E0D5', 
    fontSize: 12 
  },
  tituloSecao: { 
    fontSize: 18, 
    color: '#111827', 
    fontWeight: 'bold', 
    marginBottom: 14 
  },
  textoVazio: { 
    textAlign: 'center', 
    marginTop: 20, 
    color: '#9CA3AF' 
  }
});