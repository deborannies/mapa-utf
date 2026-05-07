import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="nova-aula" 
        options={{ 
          title: 'Nova Aula',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#004b87',
        }} 
      />
    </Stack>
  );
}