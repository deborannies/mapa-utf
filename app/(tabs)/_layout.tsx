import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#004b87', 
        headerTitleStyle: {
            color: '#1E3A8A',
            fontSize: 20,
        }, 
      }}>

      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'MapaUTF',
          tabBarLabel: 'Minha Grade',
          tabBarIcon: ({ color }) => <FontAwesome name="calendar" size={18} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="mapa"
        options={{
          headerTitle: 'MapaUTF',
          tabBarLabel: 'Mapa do Campus',
          tabBarIcon: ({ color }) => <FontAwesome name="map" size={18} color={color} />,
        }}
      />
      
    </Tabs>
  );
}