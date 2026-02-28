import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#00ADEF' }, // Your Zap It Blue
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* This points to your bottom tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* The Modal requirement */}
      <Stack.Screen 
        name="safety-modal" 
        options={{ 
          presentation: 'modal', 
          title: 'Safety Emergency Override' 
        }} 
      />

      {/* Parameter Screen 1: Device Details */}
      <Stack.Screen name="device/[id]" options={{ title: 'Device Info' }} />
    </Stack>
  );
}