import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CardAula from '../../components/CardAula';
import BotaoFlutuante from '../../components/BotaoFlutuante';

import { AULAS_MOCK } from '../../mocks/aulas'; 

export default function MinhaGrade() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.labelSaudacao}>Bem-Vindo</Text>
        <Text style={styles.tituloPrincipal}>Olá, Calouro</Text>
        <Text style={styles.textoData}>Segunda-Feira, 15 de Abril</Text>

        <Text style={styles.tituloSecao}>Aulas de Hoje</Text>

        {AULAS_MOCK.map((aula) => (
          <CardAula 
            key={aula.id}
            titulo={aula.titulo}
            horario={aula.horario} 
            local={aula.local} 
            ativo={aula.ativo}
          />
        ))}
      </ScrollView>

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