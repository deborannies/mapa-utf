import { View, StyleSheet, Text } from 'react-native';
import CardAula from '../../components/CardAula';
import BotaoFlutuante from '../../components/BotaoFlutuante';

export default function MinhaGrade() {
  return (
    <View style={styles.container}>

      <Text style={styles.labelSaudacao}>Bem-Vindo</Text>
      <Text style={styles.tituloPrincipal}>Olá, Calouro</Text>
      <Text style={styles.textoData}>Segunda-Feira, 15 de Abril</Text>

      <Text style={styles.tituloSecao}>Aulas de Hoje</Text>

      <CardAula 
        titulo="Pensamento Computacional" 
        horario="18:40 - 20:10" 
        local="Bloco B - Lab B6" 
        ativo={true}/>

      <CardAula 
        titulo="Introdução à Computação" 
        horario="20:30 - 22:00" 
        local="Bloco C - Lab C1" 
        ativo={false}/>

      <BotaoFlutuante href="/nova-aula" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f8f9fb',
  },

  labelSaudacao: {
    color: '#8B6B22',
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },

  textoData: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },

  tituloSecao: {
    fontSize: 18,
    color: '#111827',
    fontWeight: 'bold',
    marginBottom: 14,
  }
});