import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="calculator" />
      <Stack.Screen name="solver" />
      <Stack.Screen name="formula-library" />
      <Stack.Screen name="unit-converter" />
      <Stack.Screen name="exit" />
    </Stack>
  );
}