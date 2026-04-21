import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2f95dc' }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Minha Grade',
          tabBarIcon: ({ color }) => <FontAwesome name="calendar" size={24} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="mapa"
        options={{
          title: 'Mapa do Campus',
          tabBarIcon: ({ color }) => <FontAwesome name="map" size={24} color={color} />,
        }}
      />
      
    </Tabs>
  );
}