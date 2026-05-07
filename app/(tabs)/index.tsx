import { View, StyleSheet } from 'react-native';
import CardAula from '../../components/CardAula';

export default function TelaTeste() {
  return (
    <View style={styles.container}>
      <CardAula 
        titulo="Pensamento Computacional" 
        horario="18:40 - 20:10" 
        local="Bloco B - Lab B6" 
        ativo={true} 
      />

      <CardAula 
        titulo="Introdução à Computação" 
        horario="20:30 - 22:00" 
        local="Bloco C - Lab C1" 
        ativo={false} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fb',
    justifyContent: 'center',
  }
});